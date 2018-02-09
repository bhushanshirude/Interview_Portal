var app = angular.module("myCtrl", ["mainFact"]);

app.controller("testCtrl", function($scope, TestFactory) {
    $scope.Tests = [];
    TestFactory.Tests(function(TestFactory) {        
        $scope.tests = TestFactory.data.tests;

    })
});
app.controller("questionCtrl", function($scope, $stateParams, TestFactory) {
    var _id = $stateParams.id;
    $scope._id = _id;
    $scope.questionsText = [];
    var len = 0;
    var j = 0;
    var totalTest = 0;
    $scope.queno = 0;
    $scope.userAns = '';
    /*this is for answer counting right or wrong */
    $scope.total = 0;

    $scope.questionData = TestFactory.Tests(function(TestFactory) {
        $scope.tests = TestFactory.data.tests;        
        $scope.tests.filter(function(test) {
            if (test._id == _id) {
                $scope.questionData = test;
                j = $scope.questionData.questions.length;
            }
        })
    });
    $scope.nextQuestion = function() {
        alert("Correct : " + $scope.questionData.questions[$scope.queno].correctOptionIndex + "\nUser : " + $scope.userAns);
        if ($scope.questionData.questions[$scope.queno].correctOptionIndex == $scope.userAns) {
            $scope.total++;
        }
        if ($scope.queno < j - 1)
            $scope.queno++;
        else {
            $("#btn-next").attr("disabled", "disabled");
            $("#btn-end").removeAttr("disabled");
        }

    }


    $scope.saveOption = function(optionName) {
        $scope.userAns = optionName;
    }
    $scope.endTest = function() {
        var html = "<h2>Total no of Questions : " + j + "</h2>";
        html += "<h3 class='text-success'>Correct Answers : " + $scope.total + "</h3>";
        html += "<h3 class='text-warning'>Wrong Answers : " + (j - $scope.total) + " </h3>";
        $("#mainPart").html(html);

        // Check whether next test is available or not
        var nextTest = parseInt($scope.test_id) + 1;
        if (nextTest <= totalTest) // If yes, navigate it to next test
            $("#btnpart").html("<a class='btn btn-success' href='#!question/" + nextTest + "'>Next Test</a>");
        else
        // If no, clear btnpart area
            $("#btnpart").html("");
        $("#btnpart").append("<a href='#!/' class='btn btn-danger'>End Test</a>")
    }
});