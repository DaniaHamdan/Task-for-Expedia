angular.module('hotles',[])
.controller('HotelController',function ($scope, $http){
	$scope.hotles={};
	$scope.getdata = function(){
		return $http({
		method: 'GET',
		url: '/api/getAll',
		})
		.then(function (res) {
			 $scope.hotles=res.data;
		});

	}
	
})