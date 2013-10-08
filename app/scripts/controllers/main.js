// 'use strict';

app = angular.module('angularApp');

app.controller('MainCtrl', function ($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
});

app.value('todo_list', [
  { "title":"This is my first TODO",  "state":false }
]);

var controller = app.controller('TodoCtrl', function ($scope, todo_list) {
  $scope.todo_list = todo_list;

  $scope.addTodo = function() {
    if ($scope.todo && $scope.todo.title) {
      $scope.todo_list.push(
        { "title": $scope.todo.title, "state": $scope.todo.state }
      );
    }
  };

  $scope.removeTodo = function(index) {
    console.log("remove");
    console.log(index);
    $scope.todo_list.pop(index);
  };
});

controller.$inject = ['$scope', 'todo_list'];

var twitter = app.controller('TwitterCtrl', function($scope, $http) {
  $scope.doSearch = function () {
    var url = 'https://api.twitter.com/1.1/search/tweets.json?q=' + $scope.query + '&callback=JSON_CALLBACK';
    $http.jsonp(url).success(function(data) {
      console.log(data);
      $scope.results = data.results;
    });
  };
});
twitter.$inject = ['$scope', '$http'];
