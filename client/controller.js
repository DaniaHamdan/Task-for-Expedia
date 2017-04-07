angular.module('hotles',[])
.controller('Controller',function ($scope, $http){
	$scope.hotles={};
	$scope.show = function(){
		return $http({
		method: 'GET',
		url: '/api/getAll',
		})
		.then(function (res) {
			console.log(res.data)
			 $scope.hotles=res.data;
		});

	}
	
})