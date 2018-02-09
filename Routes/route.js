var app = angular.module("myApp", ["ui.router", "myCtrl"]);

app.config(function($stateProvider,$urlRouterProvider) {
    $stateProvider    
        .state("test", {
            url:"/test",
            templateUrl: "test.html",
            controller: "testCtrl"
        })
        .state("question", {
            url:"/StartTest/:id",
            templateUrl: "question.html",
            controller: "questionCtrl"
        })
       $urlRouterProvider.otherwise("test")
})