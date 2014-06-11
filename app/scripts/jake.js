function uploadImage () {
    var file;

    // Set an event listener on the Choose File field.
    $('#file-upload').bind("change", function(e) {
      var files = e.target.files || e.dataTransfer.files;
      // Our file var now holds the selected file
      file = files[0];
    });

    // This function is called when the user clicks on Upload to Parse. It will create the REST API request to upload this image to Parse.
    $('#submit-photo').click(function() {
      var serverUrl = 'https://api.parse.com/1/files/' + file.name
      // var serverUrl = 'https://api.parse.com/1/files/' + "dirtyharry.jpg"

      $.ajax({
        type: "POST",
        beforeSend: function(request) {
          //ghostTracker keys have been added
          request.setRequestHeader("X-Parse-Application-Id", 'yYugYSDcQMeVy0qGXHxc3uziEndQlpt7yy33tK4M');
          request.setRequestHeader("X-Parse-REST-API-Key", 'HRXk2QaYdSg88Iuy8HbEkLY9JxpVOnMVhh53B2GC');
          request.setRequestHeader("Content-Type", file.type);
        },
        url: serverUrl,
        data: file,
        processData: false,
        contentType: false,
        success: function(data) {

          console.log("File available at: " + data.url);
          //save this to firebase at this point.
        },
        error: function(data) {
          var obj = jQuery.parseJSON(data);
          alert(obj.error);
        }
      });
    });


  };