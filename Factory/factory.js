var app = angular.module("mainFact", []);

/*****Test Factory *****/
app.factory("TestFactory", function($http) {
    function getTests(callback) {
        // $http.get("http://localhost:8080/all").then(callback);
          $http.get("data.json").then(callback);
    }

    function getQuestions(id) {

    }
    return {
        addTest: function(Test) {
            return $http.post("http://localhost:8080/addTest", Test);
        }, // End addTest
        Tests: getTests

    }
});