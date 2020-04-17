(function (window) {
	var byeSpeak = {};

	var speakWord = "Good Bye";

	byeSpeak.speak = function (name) {
		console.log(speakWord + " " + name)
	} 
	
	window.byeSpeak = byeSpeak;
})(window)