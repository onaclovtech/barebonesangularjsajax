var app = angular.module("myapp", ["test"])
       .controller('MyController', ['$scope', '$test', ,
           function($scope, $test) {
           $scope.go = function ('http://www.antennaweb.org/Stations.aspx/GetAntennaPredictions'){
           }
           ]);
   app.config(function($httpProvider) {
       //Enable cross domain calls
       $httpProvider.defaults.useXDomain = true;
       delete $httpProvider.defaults.headers.common['X-Requested-With'];
       $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
   });
