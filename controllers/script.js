var app = angular.module("ValentineWeek" , []);
app.controller("myCtrl" , function($scope){
	$scope.showDetailFlag  = false;
	$scope.quoteFlag = false;
	$scope.printFlag = true;
	$scope.roseDay = {
		title:"Rose Day",
		date:"7 February",
		imageSrc:"../images/roseDay.jpg"
	};
	$scope.proposeDay = {
		title:"Propose Day",
		date:"8 February",
		imageSrc:"../images/proposeDay.jpg"
	};
	$scope.chocolateDay = {
		title:"Chocolate Day",
		date:"9 February",
		imageSrc:"../images/chocolateDay.jpg"
	};
	$scope.teddyDay = {
		title:"Teddy Day",
		date:"10 February",
		imageSrc:"../images/teddyDay.jpg"
	};
	$scope.promiseDay = {
		title:"Promise Day",
		date:"11 February",
		imageSrc:"../images/promiseDay.jpg"
	};
	$scope.hugDay = {
		title:"Hug Day",
		date:"12 February",
		imageSrc:"../images/hugDay.jpg"
	};
	$scope.kissDay = {
		title:"Kiss Day",
		date:"13 February",
		imageSrc:"../images/kissDay.jpg"
	};
	$scope.valentineDay = {
		title:"Valentine Day",
		date:"14 February",
		imageSrc:"../images/valentineDay.jpg"
	};
	
	$scope.openCard = function(cardType){
		$scope.cardType = cardType;
		$scope.showDetailFlag  = true;
		if($scope.cardType=='roseDay'){
			$scope.title = 'Rose Day';
			$scope.imageSrc = $scope.roseDay.imageSrc;
			$scope.quotes = [{
				quote: "We have chased away the clouds, the sky is all 'rose."
			}, 
			{
				quote: "A single rose can be my garden..a single friend, my world. Happy Rose Day!"
			}, 
			{
				quote: "The Rose Speaks of Love Silently, in a language known only to the Heart."
			}];
		}
		
		if($scope.cardType=='proposeDay'){
			$scope.title = 'Propose Day';
			$scope.imageSrc = $scope.proposeDay.imageSrc;
			$scope.quotes = [{
				quote: "Your eyes are like the blue ocean, your lips are like the sweetest part of nature. I want to be with you all the time."
			}, 
			{
				quote: "Love is passionate, love is blind, there is no better promise I can make, that I will be the best you can find."
			}, 
			{
				quote: "My heart is your heart it doesn't beat when we're apart! Happy Propose Day!"
			}];
		}
		if($scope.cardType=='chocolateDay'){
			$scope.title = 'Chocolate Day';
			$scope.imageSrc = $scope.chocolateDay.imageSrc;
			$scope.quotes = [{
				quote: "All you need is love. But a little chocolate now and then doesn't hurt."
			}, 
			{
				quote: "Happiness. Simple as a glass of chocolate or tortuous as the heart. Bitter. Sweet. Alive."
			}, 
			{
				quote: "Love is like a hollowed out piece of chocolate, filled with melted music."
			}];
		}
		if($scope.cardType=='teddyDay'){
			$scope.title = 'Teddy Day';
			$scope.imageSrc = $scope.teddyDay.imageSrc;
			$scope.quotes = [{
				quote: "You are eternal like love, You are cute as the stuffed toy, Take this teddy as my heart, It’s filled with my love and my joy!"
			}, 
			{
				quote: "Teddy bears don't need hearts as they are already stuffed with love.I m ur Teddy with a big heart"
			}, 
			{
				quote: "A cute teddy bear, to my cute friend, on a cute occasions, just to say. Happy Teddy Bear Day!"
			}];
		}
		if($scope.cardType=='promiseDay'){
			$scope.title = 'Promise Day';
			$scope.imageSrc = $scope.promiseDay.imageSrc;
			$scope.quotes = [{
				quote: " A promise created gives hope, a promise kept is commitment."
			}, 
			{
				quote: "Friendship is a promise spoken by the heart It not written in Book!"
			}, 
			{
				quote: "I promise to walk 1000 miles with you. Just promise you will walk back with me."
			}];
		}
		if($scope.cardType=='hugDay'){
			$scope.title = 'Hug Day';
			$scope.imageSrc = $scope.hugDay.imageSrc;
			$scope.quotes = [{
				quote: "Love is a circular emotion that surrounds you, like a hug. Or a noose."
			}, 
			{
				quote: "I have learned that there is more power in a good strong hug than in a thousand meaningful words."
			}, 
			{
				quote: "A hug is like a boomerang - you get it back right away."
			}];
		}
		if($scope.cardType=='kissDay'){
			$scope.title = 'Kiss Day';
			$scope.imageSrc = $scope.kissDay.imageSrc;
			$scope.quotes = [{
				quote: "Close your eyes and I'll kiss you, Tomorrow I'll miss you."
			}, 
			{
				quote: "Drink to me only with thine eyes, And I will pledge with mine; Or leave a kiss but in the cup And I'll not look for wine."
			}, 
			{
				quote: "Before I could lose my courage, I said, Don't I get a kiss for luck? It's kind of a tradition, right?"
			}];
		}
		if($scope.cardType=='valentineDay'){
			$scope.title = 'Valentine Day';
			$scope.imageSrc = $scope.valentineDay.imageSrc;
			$scope.quotes = [{
				quote: "Anyone can catch your eye, but it takes someone special to catch your heart."
			}, 
			{
				quote: " I wanna be the reason behind your smile because surely you are the reason behind mine."
			}, 
			{
				quote: " Sweeter than chocolates, Sweeter than wind, Sweeter than just about everything, You are my Valentine."
			}];
		}
		$scope.message='Sample Message';
	};
	$scope.buildCard=function(){
		var chx = document.getElementsByTagName('input');
		for (var i=0; i<chx.length; i++) {
			if (chx[i].type == 'radio' && chx[i].checked) {
			  $scope.quoteFlag = true;
			  $scope.selectedQuote = chx[i].value;
			} 
		}
		if($scope.quoteFlag && $scope.message){
			$scope.printFlag = false;
		}
	}
	
	$scope.printCard = function(myID){
		var printContents = document.getElementById(myID).innerHTML;
		var originalContents = document.body.innerHTML;
		document.body.innerHTML = printContents;
		/*alert("a"); */
		window.print();
		document.body.innerHTML = originalContents;
		location.reload();
		/*window.close(); */
	}
	$scope.showAllCards = function(){
		$scope.showDetailFlag  = false;
	}
	$scope.deleteCard = function(a){
		$('#' + a).parent().remove();
	}
	
});
app.directive('myday' , function(){
	var directive = {};
	directive.restrict = 'E';
	directive.template = "<figure>"+"<img style='width:100%' ng-src='{{day.imageSrc}}'>"+"<figcaption style='color: white'><b>{{day.date}} - {{day.title}}</b></figcaption></figure>";
	
	directive.scope = {
		day:"=day"
	}
	return directive;
});