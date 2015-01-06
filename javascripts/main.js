angular.module('foodApp',[]);

angular.module('foodApp').controller('foodController', function($scope, $interval){
	$scope.rascal = 'Rascal_Inc';

	$scope.fbPage = function(){
		window.open("https://www.facebook.com/satish.mishra3");
	}

	$scope.twitterPage = function(){
		window.open("https://twitter.com/Sattastudd");
	}

	$scope.enterEmail = function(){
		 var email = angular.lowercase($scope.email);
		//console.log(email);
		if(email === "sattasaphire@gmail.com"){
			$scope.gotYou = true;
			$scope.satishMail = "hey there Rascal";
			console.log("inside got you"+$scope.gotYou);
		}else
		if(email === 'aditim067@gmail.com'){
			$scope.gotYou = true;
			$scope.aditiMail = "Love u babu";
		}else
		if(email === 'ss77mehta@gmail.com'){
			$scope.gotYou = true;
			$scope.safalMail = "hey there Safal";
		}else
		if(email === "bharat.sapaha@vossloh-cogifer.com"||email === "bkmvbcl@gmail.com"){
			$scope.gotYou = true;
			$scope.daddyMail = "hey there dad";
		//console.log(userMailIds);
		}else{
			$scope.didntGetYou = true;
			$scope.gotYou = false;
			$scope.wrongMail = "oops this feature is not activated yet";
		}
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

		$scope.daysLeft = targetDays - totalDaysOver -1;
		$scope.hoursLeft = 24 - hhToday -1;
		//console.log(minToday);
		$scope.minutesLeft = 60 - minToday -1;
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