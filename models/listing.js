// const base = require('airtable').base('appmfFMBDPuwpPXBI');
// EXAMPLE USING CUSTOM CONFIGURATION
//
// var Airtable = require('airtable');
// var base = Airtable.base('appmfFMBDPuwpPXBI');

var Airtable = require('airtable');

var base = new Airtable({apiKey: 'keycsG4VfFZfjZu8K'}).base(
  'appmfFMBDPuwpPXBI',
);

var cache;
// every minute invalidate the cache...
//
function createListing(payload, cb) {
  // TODO: handle validation here or at the controller level? Let's try controller level

  base('listings').create(payload, function(err, record) {
    if (err) {
      console.error(err);
      return cb(err);
    }

    clearCache();
    // cb(null, record.getId());
    // Q: how should we return this for the permalink?
    // The unique ID is really the most important part...
    var permalink = record.get('unique_id') + '-' + record.get('permalink');
    cb(null, permalink);
  });

  // fetch the record that was just created to get the unique ID (for the permalink...)

  // bust the cache so the new listing will show up on the home page
}

function getListings(cb) {
  if (cache) {
    console.log('Getting jobs from cache');
    return cb(null, cache);
  }

  console.log('No cache, getting jobs from airtable');

  var allJobs = [];

  base('listings')
    .select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 100,
      view: 'Grid view',
      sort: [{field: 'date_created', direction: 'desc'}],
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          var currentJob = {};
          currentJob.title = record.get('title');
          currentJob.uniqueId = record.get('unique_id')
          currentJob.company = record.get('company');
          currentJob.location = record.get('location');
          var tagStr = record.get('tags');
          currentJob.details = record.get('details_long');
          // currentJob.permalink = record.get('permalink');
          currentJob.pub_status = record.get('publication_status');
          currentJob.apply_url = record.get('apply_url');
          // console.log('Retrieved', record.get('Title'));

          // FIXME: Should we update this somewhere else? I don't love having overwriting this...
          // Maybe make a "prettyTitle" field instead since we generate the permalink on the fly?
          currentJob.permalink = `${record.get('unique_id')}-${record.get(
            'permalink',
          )}`;

          // FIXME: Can we massage this data somewhere else? Or store it in a different format?
          if (tagStr && tagStr.includes(',')) {
            currentJob.tags = tagStr.split(',');
            // only 1 tag, so no comma
          } else if (tagStr) {
            currentJob.tags = [tagStr];
          } else {
            currentJob.tags = [];
          }
          //
          allJobs.push(currentJob);
          // console.log('currentJob', currentJob);
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }

        // clear the cache after 1 min
        setTimeout(clearCache, 1000 * 60);

        // set the cache
        cache = allJobs;

        cb(null, allJobs);
      },
    );
}

// TODO: Add some timing info, to cancel the timeout if I bust the cache manually
function clearCache() {
  cache = undefined;
}

module.exports = {
  getListings,
  createListing,
};
// TODO: Add caching layer..
