angular.module('foodApp',[]);

angular.module('foodApp').controller('foodController', function($scope, $interval){
	$scope.rascal = 'Rascal_Inc';

	$scope.fbPage = function(){
		window.open("https://www.facebook.com/satish.mishra3");
	}

	$scope.twitterPage = function(){
		window.open("https://twitter.com/Sattastudd");
	}

	var userMailIds = [];

	$scope.enterEmail = function(){
		//userMailIds.push({"mail": $scope.email});
		console.log(userMailIds.object);
		if($scope.email === "sattasaphire@gmail.com"){
			$scope.gotYou = true;
			$scope.satishMail = "hey there Rascal";
			console.log("inside got you"+$scope.gotYou);
		}
		if($scope.email === 'aditim067@gmail.com'){
			$scope.gotYou = true;
			$scope.aditiMail = "Love u babu";
		}
		//console.log(userMailIds);
	}

	//console.log(ddToday);

	$interval(showLeftTime, 1000);

	function showLeftTime(){
		var targetDays = 90;
		var todayDate = new Date();
		var ddToday = todayDate.getDate();
		var mmToday = todayDate.getMonth();
		var hhToday = todayDate.getHours();
		var minToday = todayDate.getMinutes();
		var secToday = todayDate.getSeconds();
		var totalDaysOver = null;

		if(mmToday === 0){
			totalDaysOver = ddToday;
		}
		if(mmToday === 1){
			totalDaysOver = 31+ddToday; 
		}
		if(mmToday === 2){
			totalDaysOver = 59+ddToday;
		}

		$scope.daysLeft = targetDays - totalDaysOver;
		$scope.hoursLeft = 24 - hhToday;
		//console.log(minToday);
		$scope.minutesLeft = 60 - minToday;
		$scope.secondsLeft = 60 - secToday;
	
		if($scope.secondsLeft < 10){
			$scope.showZeroSeconds = true;
			//console.log($scope.showZeroSeconds);
		}
		else if($scope.secondsLeft > 10){
			$scope.showZeroSeconds = false;
		}
		if($scope.minutesLeft < 10){
			$scope.showZeroMinutes = true;
		}
		else if($scope.minutesLeft > 10){
			$scope.showZeroMinutes = false;
		}
		if($scope.hoursLeft < 10){
			$scope.showZeroHours = true;
		}
		else if($scope.hoursLeft > 10){
			$scope.showZeroHours = false;
		}
		if($scope.daysLeft < 10){
			$scope.showZeroDays = true;
		}
	}

});