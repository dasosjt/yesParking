angular.module('DashboardCtrl', []).controller('DashboardController', function($scope, $http, NgMap, $timeout) {
  $scope.showModal = true;

  NgMap.getMap().then(function(map) {
    //console.log(map.getCenter());
    console.log('markers', map.markers);
    //console.log('shapes', map.shapes);
  });

  $http.get('/locations')
  .success(function(data) {
    $scope.locations = data;
    console.log(data);
  })
  .error(function(data) {
    console.log('Error: ' + data);
  });

  //Show Info Window
  $scope.selectLocation = function(event, location){
    $scope.selectedLocation = location;
    $scope.map.showInfoWindow('myInfoWindow', this);
  }

  //Select go location
  $scope.selectGoLocation = function(event, location){
    $scope.goLocation = location;
  }

  //Close modal
  $scope.closeModal = function(){
    $scope.showModal = true;
  }

  var current_priceperhour;
  var counter;
  var myCounter;

  $scope.startCounter = function(priceperhour){
    $scope.showModal = false;
    $scope.titleModal = "Tarifa hasta ahora";
    $scope.contentModal = priceperhour;
    current_priceperhour = priceperhour;
    counter = 0;
    myCounter = $timeout($scope.onCounter, 1000);
  }

  $scope.onCounter = function(){
    counter++;
    if(counter%10 == 0){
      $scope.contentModal += current_priceperhour;
    }
    myCounter = $timeout($scope.onCounter, 1000);
  }

});
