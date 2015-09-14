angular
  .module("weatherUnderground", ['ngRoute'])
  .config(function($routerProvider) {
    $routerProvider
      .when('/', {
        templateUrl: index.html
      })
  })
  .controller('Main', function ($http) {
    var vm = this;

    navigator.geolocation.getCurrentPosition(function (geoposition) {
      var lat = geoposition.coords.latitude;
      var long = geoposition.coords.longitude;

      $http
        .get('http://api.wunderground.com/api/f79a04da54ef10e8/conditions/q/' + lat + ',' + long + '.json')
        .success(function(data) {
          vm.weather = data;
          vm.curr = data.current_observation.weather;
          vm.temp = data.current_observation.temp_f;
        });
    });
  })
