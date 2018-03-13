// const base = require('airtable').base('appmfFMBDPuwpPXBI');
// EXAMPLE USING CUSTOM CONFIGURATION
//
// var Airtable = require('airtable');
// var base = Airtable.base('appmfFMBDPuwpPXBI');

var Airtable = require('airtable');

var cache;
// every minute invalidate the cache...

function getListings(cb) {
  if (cache) {
    console.log('Getting jobs from cache');
    return cb(null, cache);
  }

  console.log('No cache, getting jobs from airtable');

  var allJobs = [];

  var base = new Airtable({apiKey: 'keycsG4VfFZfjZu8K'}).base(
    'appmfFMBDPuwpPXBI',
  );

  base('listings')
    .select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 100,
      view: 'Grid view',
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          var currentJob = {};
          currentJob.title = record.get('Title');
          currentJob.company = record.get('company');
          currentJob.location = record.get('location');
          currentJob.tags = record.get('tags').split(','); // split the tags by comma
          currentJob.details = record.get('details_long');
          currentJob.permalink = record.get('permalink');
          currentJob.pub_status = record.get('publication_status');
          currentJob.apply_url = record.get('apply_url');
          // console.log('Retrieved', record.get('Title'));
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
        setTimeout(() => (cache = undefined), 1000 * 60);

        // set the cache
        cache = allJobs;

        cb(null, allJobs);
      },
    );
}

module.exports = {
  getListings,
};
// TODO: Add caching layer..
