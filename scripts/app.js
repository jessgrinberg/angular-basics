angular.module("todoListApp", [])

.controller('mainCtrl', function($scope){
  $scope.learningNgChange = function(){
    console.log('An input changed!');
  };

  $scope.todos = [
  	{"name": "clean the house"},
  	{"name": "feed the lawns"},
  	{"name": "pay the bills"},
  	{"name": "run"},
  	{"name": "swim"}
  ]

});



// .controller('coolCtrl', function($scope) {
// 	$scope.whoAmI = function() {
// 		console.log('Hello there, this is the coolCtrl function!');
// 	};

// 	$scope.helloWorld = function() {
// 		console.log('This is not the main ctrl !');
// 	}

// })

// .controller('imASibling', function($scope){
// 	$scope.foobar = 1234;

// 	//do other cool stuff!
// });
