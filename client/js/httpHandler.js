// import { createBrotliCompress } from "zlib";

(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  // callback that invokes the SwimTeam function with the returned string corresponding to a 
  var cb = function(data) { 
    if (data === 'failed') {
      console.log(data)
    } else {
      console.log('callback success: ' + data);
      SwimTeam.move(data); // invokes the client's swim
    }
  }
  
  $('.btn-move').on('click', function(e) { // sends GET request to server on button click
    console.log('button click');
    $.ajax({
      type: 'GET',
      url: serverUrl,
      success: cb, // invokes callback function passing in data from server on success response
      // error: console.log('Failed AJAX request')
    });
  });
  

  //
  // TODO: build the swim command fetcher here
  //

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: serverUrl,
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();
