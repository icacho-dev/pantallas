angular.module('app.directives',[])
.directive('comboItem' , function(){
	return {
		restrict: '	E',
		scope: {
			ngBind: '=ngModel',
			ngLabel: '@',
			ngList: '=ngList'
		},
		replace: true,
		require: 'ngModel',
		controller: function($scope){
			console.info('comboItem' + $scope.ngBind);
			console.info('label' + $scope.ngLabel);
			console.info($scope.ngList);
		},
		templateUrl:'templates/directives/comboItem.html'
	}
})
.directive('checkList' , function(){
	return {
		restrict: '	E',
		scope: {
			ngBind: '=ngModel',
			ngLabel: '='
		},
		replace: true,
		require: 'ngModel',
		controller: function($scope){
			console.info('checkList' + $scope.ngBind);
			console.info('label' + $scope.ngLabel);
		},
		templateUrl:'templates/directives/checkList.html'
	}
})
.directive('toggleSiNo' , function(){
	return {
		restrict: '	E',
		scope: {			
			ngStatus: '=',
			ngValue: '=',
			ngLabel: '=',
			ngSublabel: '=',
			ngType: '='
		},
		replace: true,		
		controller: function($scope){
			$scope.$watch('ngStatus', function() {
		       $scope.ngValue = (!$scope.ngStatus)?0:$scope.ngValue;
		   });
		},
		templateUrl:'templates/directives/toggleSiNo.html'
	}
})
.directive('toggleSiNoCombo' , function(){
	return {
		restrict: '	E',
		scope: {
			ngBind: '=ngModel',
			ngLabel: '=',
			ngSubLabel: '='
		},
		replace: true,		
		controller: function($scope){
			$scope.$watch('ngBind' , function() {
				$scope.ngStatus = ($scope.ngBind.value != 0);
			});
		},
		templateUrl:'templates/directives/toggleSiNoCombo.html'
	}
})
.directive('inputValidNumber' , function(){
	return {
		restrict: '	E',
		scope: {
			ngBind: '=ngModel',
			ngLabel: '@',
			ngFormName: '=',
			ngName: '@',
			ngPlaceholder: '@'
		},
		replace: true,
		require: 'ngModel',
		controller: function($scope){
			console.info('bind -> ' + $scope.ngBind);
			console.info('label-> ' + $scope.ngLabel);
			console.info('form -> ' + $scope.ngFormName);
			console.info('name -> ' + $scope.ngName);
			console.info('placeholder -> ' + $scope.ngPlaceholder);
		},
		templateUrl:'templates/directives/inputValidNumber.html'
	}
})
;