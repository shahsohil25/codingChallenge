var app = angular.module('promiseExample', ['ngResource']);


app.controller('promiseController', function ($scope, PromiseService) {

	$scope.getData = function() {
		PromiseService.getData().then(function(data) {
			$scope.apiData = data;
		}, function(error) {
			console.log('Error In Controller Promise', error);
		})
	}
	$scope.getData();
})

app.factory("Promise", function($resource) {
	return $resource("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22nome%2C%20ak%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
})

app.service('PromiseService', function(Promise, $q) {
	var self =  {

		'loadData': function () {
			return Promise.get(function (data) {
				return data;
			})
		},
		'getData': function () {
			var d = $q.defer();
			self.loadData().$promise.then(function (data) {
				d.resolve(data.query.results);
			}, function(e) {
				d.reject('Defer Rejection:::', e);
			});
			return d.promise;
		}
	}
	self.getData();
	return self;
});