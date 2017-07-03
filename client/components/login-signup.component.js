angular.module('work-orders')

.controller('LoginSignupCtrl', function($scope) {
  this.isHidden = false;

  this.showContent = function () {
    this.parent.isContentHidden();
  };

  this.showWorkOrders = function () {
    console.log('hey i was called')
    this.parent.getWorkOrders();
  };
})

.component('loginSignup', {
  require: {
    parent: '^^app'
  },
  controller: 'LoginSignupCtrl',
  templateUrl: '../templates/login-signup.component.html',
});