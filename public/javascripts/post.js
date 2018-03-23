// just hardcode what the dest is

var markdownSrc = document.querySelector('.markdown-src');
var markdownDest = document.querySelector('.markdown-dest');

var converter = new showdown.Converter();

function showMdPreview(md) {
  var html = converter.makeHtml(md);
  markdownDest.innerHTML = html;
}

// code for post page... TODO: move to separate file?
function getMarkdownFromJobListing(url) {
  //get url from the form field on the page
  //
  var url = document.querySelector('#form-apply-url').value;
  console.log('url', url);
  // url = encodeURIComponent(url); // make the url safe for passing as a url param. OR I could just use a POST instead...?
  // url = url; // make the url safe for passing as a url param. OR I could just use a POST instead...?
  //
  // make ajax call
  // return the data
  // TODO: Add client side validation to verify it's a valid url...
  // url is the form param here

  // FIXME: Change the stupid endpoint
  axios
    .post('/import', {url: url})
    .then(function(response) {
      console.log(response);
      var jobDetails = response.data.markup;

      // inject into the textarea
      markdownSrc.value = jobDetails;

      // convert and inject resiult into the preview
      showMdPreview(jobDetails);
    })
    .catch(function(error) {
      console.log(error);
    });
}

// TODO: move this to a separate file

function addListeners() {
  // import markdown from apply url
  var btnImportJobDetails = document.querySelector('.btn-import');

  btnImportJobDetails.addEventListener('click', function(e) {
    var url = document.querySelector('#form-apply-url').value;

    getMarkdownFromJobListing(url);
  });

  // update the md preview LIVE window when textarea changes...
  markdownSrc.addEventListener('keyup', e => {
    var val = e.target.value;
    showMdPreview(val);
  });

  // add submit form listener
  var btnNext = document.querySelector('#btn-next');
  btnNext.addEventListener('click', submitForm);
}

function submitForm() {
  // get all all the input, and textarea details and fill them in for

  var inputs = document.querySelectorAll('#main-container input');
  var ta = document.querySelectorAll('#main-container textarea');

  // take both nodelists and combine into one array
  var formItems = Array.from(inputs).concat(Array.from(ta));

  // now that we have all the sources, move these over to the hidden form, and submit that hidden form.
  // FIXME: There has to be a less hacky way for this...
  for (var i = 0; i < formItems.length; i++) {
    var el = formItems[i];
    var targetName = el.dataset.name;

    // HACK FIXME: Get a better way to target the dataset one
    if (!targetName) continue;

    var targetEl = document.querySelector(`#form-post *[name="${targetName}"]`);

    targetEl.value = el.value;
  }

  // FIXME: Split this fn up?
  document.querySelector('#form-post').submit();
  //submit the form

  // inputs.push('1');

  // console.log('inputs', inputs);

  // gather up all the details
  // var titleEl = document.querySelector("#form-post input[name='title']");
  // populate all the hidden form fields
  //
  // submit the form
}

function init() {
  addListeners();
}

init();
