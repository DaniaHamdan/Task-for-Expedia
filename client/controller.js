angular.module('hotles',[])
.controller('HotelController',function ($scope, $http){
	$scope.hotels={};
	$scope.getdata = function(){
		return $http({
		method: 'GET',
		url: '/api/getAll',
		})
		.then(function (res) {
			 $scope.hotels=res.data;
		});

	}
	
})