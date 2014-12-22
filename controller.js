var app = angular.module("myapp", ["test"])
       .controller('MyController', ['$scope', '$test', ,
           function($scope, $test) {
           $scope.go = function ('http://www.antennaweb.org/Stations.aspx?Address=&City=Albuquerque&State=NM&ZIP=87114&Housing=S&Accuracy=4&Height=6&Obstructed=False&StationList=&Lat=35.1958704&Lon=-106.6939803'){
           }
           ]);
   app.config(function($httpProvider) {
       //Enable cross domain calls
       $httpProvider.defaults.useXDomain = true;
       delete $httpProvider.defaults.headers.common['X-Requested-With'];
       $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
   });
