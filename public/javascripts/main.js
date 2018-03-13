function addListeners() {
  var shortDesc = document.querySelectorAll('.desc-short');
  var two = document.getElementById('two');

  for (var i = 0; i < shortDesc.length; i++) {
    shortDesc[i].addEventListener('click', toggleDetails);
  }
}

function toggleDetails(e) {
  var target = e.target;

  // fetch long-desc
  var el = getParentNode(target, '.desc-long');

  if (el.classList.contains('hidden')) {
    el.classList.remove('hidden');
    updateBrowserUrl(target.dataset.uid);
  } else {
    el.classList.add('hidden');
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
