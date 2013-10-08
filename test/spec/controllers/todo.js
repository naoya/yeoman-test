describe('Controller: TodoCtrl', function () {
  beforeEach(module('angularApp'));
  
  var TodoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    TodoCtrl = $controller('TodoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of todos to the scope', function () {
    expect(scope.todo_list.length).toBe(1);
  });
});
