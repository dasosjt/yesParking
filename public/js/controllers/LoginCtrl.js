angular.module('LoginCtrl', []).controller('LoginController', function($scope, $http, $location) {
  $scope.showModal = true;

  //Send login form
  $scope.sendLogin = function(){
    var data = $scope.fields;
    console.log("sendLogin(): email -> "+data.email);
    console.log("sendLogin(): password -> "+data.password);
    if(data.email !== "" &&  data.password !== ""){
      $http.post("/login", data)
      .success(function(response){
        console.log(response);
        console.log(response.value);
        if(response.value){
          $location.path('/dashboard');
        } else {
          $scope.showModal = false;
          $scope.titleModal = "Error";
          $scope.contentModal = "Se ingreso incorrectamente los datos de acceso.";
        }})
        .error(function(response) {
            console.log('Error: ' + response);
        });
      } else {
        $scope.showModal = false;
        $scope.titleModal = "Error";
        $scope.contentModal = "Ingrese todos los campos requeridos.";
      }
  }

  //Close modal
  $scope.closeModal = function(){
    $scope.showModal = true;
  }

});
