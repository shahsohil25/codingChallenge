var app = angular.module('searchProduct', ['ngRoute']);


app.config(function($routeProvider) {
        $routeProvider
				.when('/product', {
          templateUrl : '../product.html',
          controller  : 'searchController'
        })
});

app.controller('searchController', function ($scope) {
	$scope.productsList = [
		{"product":"ESPN", "type":"subscription", "frequency":"monthly", "amount":"15"},
		{"product":"ESPN", "type":"contract", "frequency":"perpetual", "amount":"15"},
		{"product":"SportsIllustrated", "type":"subscription", "frequency":"monthly", "amount":"10"},
		{"product":"GolfDigest", "type":"subscription", "frequency":"yearly", "amount":"30"},
		{"product":"AlarmSystem", "type":"contract", "frequency":"monthly", "amount":"14"},
		{"product":"EquipmentFee", "type":"fee", "frequency":"onetime", "amount":"10"},
		{"product":"Installation", "type":"fee", "frequency":"onetime", "amount":"25"},
		{"product":"Installation", "type":"fee", "frequency":"annual", "amount":"25"}
	];

	$scope.search = {};
})