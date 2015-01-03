angular.module('foodApp',[]);

angular.module('foodApp').controller('foodController', function($scope){
	$scope.rascal = 'Rascal_Inc';

	$scope.fbPage = function(){
		window.open("https://www.facebook.com/satish.mishra3");
	}

	$scope.twitterPage = function(){
		window.open("https://twitter.com/Sattastudd");
	}
});