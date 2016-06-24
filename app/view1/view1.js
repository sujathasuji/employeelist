'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {

  $scope.employees = [
    { "empid": 101, "empname": "scott", "salary": 6000 },
    { "empid": 102, "empname": "smith", "salary": 8000 },
    { "empid": 103, "empname": "jones", "salary": 9000 },
    { "empid": 104, "empname": "james", "salary": 4500 },
    { "empid": 105, "empname": "allen", "salary": 9000 },
    { "empid": 106, "empname": "mark", "salary": 8700 },
    { "empid": 107, "empname": "john", "salary": 7500 }
  ];


  $scope.newemployee = { "newempid": "", "newempname": "", "newsalary": "" };

  $scope.addemployee = function()
  {
    $scope.employees.push({ "empid": $scope.newemployee.newempid, "empname": $scope.newemployee.newempname, "salary": $scope.newemployee.newsalary });

    $scope.newemployee.newempid = "";
    $scope.newemployee.newempname = "";
    $scope.newemployee.newsalary = "";
  };

  $scope.removeemployee = function(n)
  {
    if (confirm("Are you sure to delete?"))
    {
      $scope.employees.splice(n, 1);
    }
  };

}]);