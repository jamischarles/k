var express = require('express');
var router = express.Router();

var listingModel = require('../models/listing');
var utils = require('../utils/index');

const {URL} = require('url');

// TODO: use lodash for this? // // terms = ['REACT', 'FT', 'JS] // // they all have to exist... should we just sort them? // TODO: move this? // tagList = ['JS', 'REACT', 'FT']
function getFilteredJobList(jobList = [], terms) {
  // TODO: change the name to filterTerms?
  var filteredList = jobList.filter(jobItem => {
    // TODO: optimize this...
    // for each item in the taglist check all the terms (terrible BigO time...)
    var tagList = jobItem.tags;
    var curTag, curTerm; // one is from listing, other is from search terms
    // because of sorting, now each index should match. If it doesn't we can abort...
    //
    console.log('termsSorted', terms);
    console.log('tagList', tagList);
    for (var i = 0; i < terms.length; i++) {
      // if there are more filter tags than tags in the listing, it's not a match. (easy bail option)
      if (terms.length > tagList.length) {
        return false;
      }
      // if the current term isn't included in the tagList, then no match
      if (!tagList.includes(terms[i])) {
        return false;
      }
      return true;
    }
  });

  return filteredList;
}

// returns an array
function getJobByID(jobList, uniqueId) {
  for (var i = 0; i < jobList.length; i++) {
    console.log('uniqueId', typeof uniqueId);
    console.log('jobList[i].uniqueId', typeof jobList[i].uniqueId);
    if (jobList[i].uniqueId === uniqueId) {
      return [jobList[i]]; // array with only 1 item
    }
  }
}

// GET home page.
router.get('/', function(req, res, next) {
  listingModel.getListings(function(err, jobs) {
    // console.log('jobs', jobs);
    res.render('index', {title: 'Front-end Rocket Jobs', jobData: jobs});
    // res.render('index', {title: 'Express', jobData: jobData});
  });
});

router.get('/filter/:tags', function(req, res, next) {
  var tagStr = req.params.tags;

  var tags = tagStr.split('+');

  listingModel.getListings(function(err, jobs) {
    res.render('index', {
      title: 'Front-end Rocket Jobs',
      terms: tags,
      jobData: getFilteredJobList(jobs, tags),
    });
  });
});

// FIXME: Clean this up and dedupe properly...
router.get('/addfilter/:tag', function(req, res, next) {
  // get the old path
  var ref = req.get('referer');
  console.log('ref', ref);

  var newTag = req.params.tag;
  const myURL = new URL(ref);
  console.log('myurl', myURL.pathname);
  var oldPath = myURL.pathname;

  console.log('oldPath', oldPath);
  console.log('newTag', newTag);
  // if tag is already in url, just bail...
  // FIXME: use path.split() and path.join() instead?
  if (oldPath.includes(newTag)) {
    return res.redirect(oldPath);
  }
  // if there are other filters, add this one
  if (oldPath.includes('/filter')) {
    return res.redirect(`${oldPath}+${req.params.tag}`);
  }
  // if this is the first filter...
  return res.redirect(`/filter/${req.params.tag}`);
});
router.get('/removefilter/:tag', function(req, res, next) {
  // get the old path
  var ref = req.get('referer');
  console.log('ref', ref);

  const myURL = new URL(ref);
  console.log('myurl', myURL.pathname);
  var oldPath = myURL.pathname;

  var pathParts = oldPath.split('/');
  var tagStr = decodeURI(pathParts[pathParts.length - 1]); //remove %20 garbage etc

  var tagsArr = tagStr.split('+');
  tagsArr = tagsArr.filter(item => item != req.params.tag);
  tagStr = tagsArr.join('+');
  // remove it from the tagsArr
  // FIXME: I just need to find some easy built in way to do this... this is so dumb... Should I just use path params?
  // if only 1 param
  //
  console.log('tagsArr', tagsArr);
  console.log('tagStr', tagStr);
  if (!tagStr) {
    newPath = '/';
  } else {
    newPath = `/filter/${tagStr}`;
  }
  return res.redirect(newPath);
});

// permalink
router.get('/jobs/:permalink', function(req, res, next) {
  listingModel.getListings(function(err, jobs) {
    // massage data here... ?

    // if search by permalink doesn't return, then just extract the ID and use that to fetch the proper url
    // then redirect to that...
    // if ID search doesn't return anything, then fetch using the

    // ALWAYS search by UNIQUE_ID field. If it doesn't match the permalink passed in, redirect to that...

    // extract id from permalink
    var uid = parseInt(req.params.permalink.split('-')[0], 10);

    var jobListingArr = getJobByID(jobs, uid);
    var listingPermalink = jobListingArr[0].permalink;

    // TODO: add 404 or something?
    if (listingPermalink.length != req.params.permalink.length) {
      return res.redirect(`/jobs/${listingPermalink}`);
    }

    res.render('index', {
      title: 'Front-end Rocket Jobs',
      singleListing: true,
      terms: [],
      jobData: jobListingArr,
    });
  });
});

// post
router.get('/post', function(req, res, next) {
  res.render('post', {
    title: 'Front-end Rocket Jobs',
    terms: [],
    jobData: [],
  });
});

// TODO: create a new url for that? Can we reuse it?
router.post('/post', function(req, res, next) {
  var payload = {
    title: req.body.title,
    details_long: utils.transformMarkdownToHTML(req.body.detail_body), //convert markdown to html before saving it TODO: add sanitation for all these...
    company: req.body.company,
    location: req.body.location,
    tags: req.body.tags,
    apply_url: req.body.apply_url,
    permalink: utils.generatePermalink(req.body.title, req.body.company), // TODO: Add location too?
    publication_status: 'draft',
    admin_email: req.body.email,
  };

  listingModel.createListing(payload, (err, resp) => {
    // res.json({permalink: resp});
    res.redirect('/jobs/' + resp);
  });
});

// ajax routes

router.post('/import', function(req, res, next) {
  // var url = URIComponent(req.query.url);
  var url = req.body.url;
  utils.getMarkdownFromJobPage(url, function(err, resp) {
    res.json({markup: resp});
  });
});
module.exports = router;
