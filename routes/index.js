var express = require('express');
var router = express.Router();

var listingModel = require('../models/listing');

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

function getJobByID(jobList, permalink) {
  for (var i = 0; i < jobList.length; i++) {
    if (jobList[i].permalink === permalink) {
      return [jobList[i]]; // array with only 1 item
    }
  }
}

// GET home page.
router.get('/', function(req, res, next) {
  listingModel.getListings(function(err, jobs) {
    // console.log('jobs', jobs);
    res.render('index', {title: 'Express', jobData: jobs});
    // res.render('index', {title: 'Express', jobData: jobData});
  });
});

router.get('/filter/:tags', function(req, res, next) {
  var tagStr = req.params.tags;

  var tags = tagStr.split('+');

  listingModel.getListings(function(err, jobs) {
    res.render('index', {
      title: 'Express',
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
router.get('/jobs/:id', function(req, res, next) {
  listingModel.getListings(function(err, jobs) {
    res.render('index', {
      title: 'Express',
      terms: [],
      jobData: getJobByID(jobs, req.params.id),
    });
  });
});

// post
router.get('/post', function(req, res, next) {
  res.render('post', {
    title: 'Express',
    terms: [],
    jobData: [],
  });
});

module.exports = router;
