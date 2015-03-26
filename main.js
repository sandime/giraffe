/**
 * Created by SHERRI on 3/26/15.
 */
var app= angular.module('countryApp', []);
app.controller("CountryCtrl", function($scope, $http){
    $http.get('countries.json').success(function(data){
        $scope.countries = data;
    });
    //adding to sort by country or pop
    $scope.sortField = 'population';
});