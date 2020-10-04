if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 100);

}

var x = 0;

var titleText = [ "My name is Ne0shka", "My name is Ne0shka", "My name is Ne0shka", "My name is Ne0shka", "My name is Ne0shka", "#y name is Ne0shka", "M# name is Ne0shka", "My#name is Ne0shka", "My #ame is Ne0shka", "My n#me is Ne0shka", "My na#e is Ne0shka", "My nam# is Ne0shka", "My name#is Ne0shka", "My name #s Ne0shka", "My name i# Ne0shka", "My name is#Ne0shka", "My name is #e0shka", "My name is N#0shka", "My name is Ne#shka", "My name is Ne0#hka", "My name is Ne0s#ka", "My name is Ne0sh#a", "My name is Ne0shk#", "My name is Ne0shka", "My name is Ne0shka", "My name is Ne0shka", "My name is Ne0shka", "My name is Ne0shka", ];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}