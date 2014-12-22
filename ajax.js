angular.module('test', []).factory('$test', ['$http',
      function($http) {
          return 
              function(site) {
                  var method = 'JSON';
                  var url = site;
                  return $http({
                      method: method,
                      url: url + '&callback=JSON_CALLBACK'
                  });
              };
      }
  ]);
