function addListeners() {
  // FIXME: Add a global listener instead of one for each row
  // Add expand / collapse listeners
  var jobItems = document.querySelectorAll('.desc-short');

  for (var i = 0; i < jobItems.length; i++) {
    jobItems[i].addEventListener('click', toggleDetails, false);
  }

  // add wizard listeners

  var wizardButtons = document.querySelectorAll('.wizard-btn');

  for (var i = 0; i < wizardButtons.length; i++) {
    wizardButtons[i].addEventListener('click', advanceWizard, false);
  }

  // add tagbar toggle listeners
  var tagBarTags = document.querySelectorAll('.btn-group-toggle input');

  for (var i = 0; i < tagBarTags.length; i++) {
    tagBarTags[i].addEventListener(
      'click',
      function(e) {
        var el = e.target;
        if (el.parentNode.classList.contains('active')) {
          el.parentNode.classList.remove('active');
        } else {
          el.parentNode.classList.add('active');
        }
      },
      false,
    );
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
    updateBrowserUrl(jobItemEl.dataset.permalink);
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

function getLocation() {
  var options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
}

// move to the next step in the wizard...
function advanceWizard(e) {
  var currStep = parseInt(e.target.dataset.wstep); //FIXME: add any null soaking? _.get()?
  if (currStep === 1) {
    // this comes from anim lib file... TODO: Use parcel for this step...
    __ANIMATE_SCROLL_TO(document.querySelector('.step-2'));
  } else {
    __ANIMATE_SCROLL_TO(document.querySelector('.job-list'));
  }
  // which step am I on?
  // fetch the next step? t
}

function init() {
  addListeners();
  addFormListeners();

  // getLocation();

  // set up the fuzzy search
  var jobListing = new List('main-container', {
    valueNames: ['title', 'location', 'company', 'tag-item'],
  });
}

init();
