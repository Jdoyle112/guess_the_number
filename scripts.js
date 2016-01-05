var number = Math.floor((Math.random() * 100) + 1);
var val;
var counter = 0;

function question(){
	counter++;
	val = prompt("Enter your #");
	if(val > number){
		$('#output').text("Too High");
	} else if(val < number) {
		$('#output').text("Too Low");
	} else if(val == number){
		$('#output').text("You got it! It took you " + counter + " tries!");
		return;
	} else {
		$('#output').text("Please enter a valid #");
	}
}


$(document).ready(function(){

	$('#start').click(function(){
		while(val != number){
			question();
		}	
	});

});