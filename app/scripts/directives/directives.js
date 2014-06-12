// -------- custom directive for AJAX call to Parse.com --//
angular.module('finalProjectApp')
      .directive('myDirective', function(){
            return{
              restrict: 'E',
              templateUrl: 'views/directiveDemo.html',
              link: function(){
                  var file;
                  $('#fileselect').bind("change", function(element){
                    var files = element.target.files || element.dataTransfer.files;
                    file = files [0];
                    console.log('file is:', file);

                    var serverUrl = 'https://api.parse.com/1/files/' + file.name;

                    $.ajax({
                        type: "POST",
                        beforeSend: function(request){
                            request.setRequestHeader("X-Parse-Application-Id", 'HRXk2QaYdSg88Iuy8HbEkLY9JxpVOnMVhh53B2GC');
                            request.setRequestHeader("X-Parse-REST-API-Key", 'uWj9AXCYt6ugHQAXyA7pvmYtSYCJb6f61LeKthv5');
                            request.setRequestHeader("Content-Type", file.type);
                          },
                          url: serverUrl,
                          data: file,
                          processData: false,
                          contentType: false,
                          success: function(data){
                             console.log("File available at:" + data.url);
                          },
                          error: function(data){
                            var obj = jQuery.parseJSON(data);
                            console.log('faaaaaaail!!!!');
                          }

                        })
                    })
                  }
              }
            });
  

















// -------- standard directives ---------------------- //
// collapsable view more directive ----------//
function CollapseDemoCtrl($scope) {
  $scope.isCollapsed = true;
};
//-------- DatePicker directive ------//
var DatepickerDemoCtrl = function ($scope) {
  $scope.today = function() {
    $scope.newPost.date = new Date();
  };
  //$scope.today();

  $scope.clear = function () {
    $scope.newPost.date = null;
  };


  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.initDate = new Date('2016-15-20');
  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
};