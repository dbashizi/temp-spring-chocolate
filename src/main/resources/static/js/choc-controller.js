angular.module('TIYChocolateApp', [])
   .controller('TIYChocolateController', function($scope, $http, $timeout) {

        $scope.test = function() {
            console.log("test() is running...");

            $http.get("http://localhost:8080/make-it.json")
                .then(
                    function successCallback(response) {
                        console.log(response.data);
                        console.log("Adding data to scope");
                        $scope.games = response.data;
                    },
                    function errorCallback(response) {
                        console.log("Unable to get data");
                    });
        };

        $scope.postExample = function() {
            console.log("About to add the following game " + JSON.stringify($scope.newGame));

            $http.post("/addGame.json", $scope.newGame)
                .then(
                    function successCallback(response) {
                        console.log(response.data);
                        console.log("Adding data to scope");
                        $scope.games = response.data;
                    },
                    function errorCallback(response) {
                        console.log("Unable to get data");
                    });
        };

       $scope.makeArray = function(arraySize) {
            var returnArray = [];
            for (var i = 0; i < arraySize; i++) {
                returnArray.push(i);
            }
            return returnArray;
        }

        $scope.testTimeout = function() {
            console.log("testTimeout() is running");

            if ($scope.numBigs > 5) {
                return;
            } else {
                $scope.numBigs += 1;
                $timeout($scope.testTimeout, 1000);
            }

        }

        $scope.testVar = "Testing testing 1 2 3";

//        $scope.newGame = {};

        console.log("NG Controller Inialized!");
        $scope.numBigs = 1;
        $timeout($scope.testTimeout, 3000);

    });
