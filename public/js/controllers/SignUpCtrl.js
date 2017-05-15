angular.module('SignUpCtrl', []).controller('SignUpController', function($scope, $http, $location) {
  $scope.showModal = true;

  //Send sign up form
  $scope.sendSignUp = function(){
    var data = $scope.fields;
    if(data.email !== "" &&  data.password0 !== "" && data.password1 !== ""){
      if($scope.fields.password0 === $scope.fields.password1){
        $http.post("/signup", data)
        .success(function(response){
              if(response.status == 200){
                $location.path('/login');
              }
          })
          .error(function(response) {
              console.log('Error: ' + response);
          });

      } else {
        $scope.showModal = false;
        $scope.titleModal = "Error";
        $scope.contentModal = "Se ingreso incorrectamente los datos de contraseña.";
      }
    }
  }

  //Close modal
  $scope.closeModal = function(){
    $scope.showModal = true;
  }

});
