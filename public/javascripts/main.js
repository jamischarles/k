function addListeners() {
  // FIXME: Add a global listener instead of one for each row
  var jobItems = document.querySelectorAll('.job-item');

  for (var i = 0; i < jobItems.length; i++) {
    jobItems[i].addEventListener('click', toggleDetails, false);
  }
}

function toggleDetails(e) {
  var target = e.target;

  // fetch long-desc
  var jobItemEl = getParentNode(target, '.job-item');
  var detailsEl = jobItemEl.querySelector('.desc-long');
  // var el = target.querySelector('.desc-long');

  if (detailsEl.classList.contains('hidden')) {
    detailsEl.classList.remove('hidden');
    jobItemEl.classList.add('open'); // make it gray when open
    jobItemEl.classList.remove('visited');
    updateBrowserUrl(target.dataset.uid);
  } else {
    detailsEl.classList.add('hidden');
    jobItemEl.classList.remove('open');
    jobItemEl.classList.add('visited');
  }
}

// FIXME: this won't work if any of the children have these criteria...
function getParentNode(currentEl, query) {
  // FIXME: so hacky
  // do classes match what the query has?
  var parentFound;

  // if result not found, and we can still go upwards the tree...
  while (!parentFound && currentEl.parentNode) {
    currentEl = currentEl.parentNode;
    // parentFound = currentEl.querySelector(query);
    parentFound = currentEl.classList.contains(query.slice(1)); // FIXME: hacky. Make it easier to check the current node for the query
  }

  return currentEl;
}

// JS for the search form
function addFormListeners() {
  var form = document.querySelector('#search-form');
  var input = form.querySelector('input');
  form.addEventListener('submit', e => {
    e.preventDefault();

    document.location = `/filter/${input.value}`;
  });
}

function updateBrowserUrl(permalink) {
  window.history.pushState('object or string', 'Title', '/jobs/' + permalink);
}

function init() {
  addListeners();
  addFormListeners();

  // set up the fuzzy search
  var jobListing = new List('main-container', {
    valueNames: ['title', 'location', 'company', 'tag-item'],
  });
}

init();
