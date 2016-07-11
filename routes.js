var app = angular.module('myApp', ['homeCtrl', 'contatoCtrl']);

app.config(['$routeProvider', function($routeProvider){

	$routeProvider.
		when('/home', {
			templateUrl: 'templates/home.html',
			controller: 'homeCtrl'
		}).
		when('/contato', {
			templateUrl: 'templates/contato.html',
			controller: 'contatoCtrl'
		}).
		otherwise({
			redirectTo: '/home'
		})

}]);

/* teste no mesmo escopo ...
app.controller('homeCtrl', function($scope){
	$scope.message = 'Home content';
});

app.controller('contatoCtrl', function($scope){
	$scope.message = 'contato content';
});
*/