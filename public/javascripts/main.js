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
  var jobItemEl = getParentNode(target,'.job-item');
  var detailsEl = jobItemEl.querySelector('.desc-long');
  // var el = target.querySelector('.desc-long');

  if (detailsEl.classList.contains('hidden')) {
    detailsEl.classList.remove('hidden');
    jobItemEl.classList.add('open'); // make it gray when open
    updateBrowserUrl(target.dataset.uid);
  } else {
    detailsEl.classList.add('hidden');
    jobItemEl.classList.remove('open');
  }
}

// FIXME: this won't work if any of the children have these criteria...
function getParentNode(currentEl, query) {
  var parentFound;

  // if result not found, and we can still go upwards the tree...
  while (!parentFound && currentEl.parentNode) {
    currentEl = currentEl.parentNode;
    parentFound = currentEl.querySelector(query);
  }

  return parentFound;
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
