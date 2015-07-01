angular.module('foodDiary',[])
.controller('foodController', function($scope) {
  var savedIndex;
  $scope.isEditing = false;
  $scope.foods = [];
  $scope.user = {
    name: 'Collin', age: 26, gender: 'male',
    weight: 170, height: 69, unit: "inches",

    weightChange: function(){
      var totalCalories = $scope.foods.reduce(function(accumulator, food){
        return accumulator + (food.calories * food.servings);
      }, 0);
      return Math.round(totalCalories / 3500);
    },
    bmi: function(){
      var height = $scope.user.height, weight = $scope.user.weight;
      var inches = $scope.user.unit === 'inches' ? height : height * 0.393701;
      return Math.round((weight * 703) / Math.pow(inches, 2));
    }
  };
  $scope.addMeal = function(){
    $scope.foods.push($scope.newFood);
    $scope.newFood = {};
  };
  $scope.deleteMeal = function(index){
    $scope.foods.splice(index, 1);
  };
  $scope.editMeal = function(index){
    $scope.isEditing = true;
    console.log($scope.isEditing);
    $scope.newFood = $scope.foods[index];
    savedIndex = index;
  };
  $scope.finishEdit = function(){
    $scope.foods.splice(savedIndex, 1, $scope.newFood);
    $scope.newFood = {};
    savedIndex = null;
    $scope.isEditing = false;
  };
});
