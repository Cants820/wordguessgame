//   ----------Variables for the game-----------------------------

var currentWord;

var numberOfGuessesRemaining = 9;

var lettersAlreadyGuessed = [];

//checks if letter is correct
var checkLetter = false;

var wins=0;

var losses=0;


//make arr to to all lower case
var arr=["trumpet", "saxaphone", "guitar", "drums", "microphone","tenderly", "stormy weather", "ella Fitzgerald", "louis armstrong", "new orleans", "new york city", "chet baker", "miles davis", "benny goodman", "count basie", "paris", "la vie en rose", "summertime", "cheek to cheek","St.Louis", "piano", "Unforgettable", "Scat", "Stardust"]


// This will randomly select a word after the game is over
var currentWord = arr[Math.floor(Math.random()*arr.length)]
console.log(currentWord) 

// This will split up the word in our function called wordtoUnderscores
var chosenWord = currentWord.split("")
console.log(chosenWord)

var wordCompare = currentWord.split("")

wordtoUnderscores()

// ---------------Functions for the game------------------------

//  key presses

document.onkeyup= function(keypress){
	console.log(keypress.key)
	console.log(currentWord)
	var letter = keypress.key
	for (var x=0; x<wordCompare.length; x++){
		if (letter===wordCompare[x]){
			chosenWord[x]= letter
			
			console.log(chosenWord)
			checkLetter = true;
		} 
	
	
	}
		if(checkLetter) {

			} else {
				numberOfGuessesRemaining--;
				lettersAlreadyGuessed.push(letter);		
		}
	

	if(wordCompare.toString() === chosenWord.toString()) {
		winRound();
	}


		document.getElementById('wins').innerHTML = wins;
		document.getElementById('wordGuessed').innerHTML = chosenWord.join(' ');
		//show guesses left and letters guesses onto the DOM - J.C.
		document.getElementById('guesses-left').innerHTML = numberOfGuessesRemaining;
		document.getElementById('letters-already-guessed').innerHTML = lettersAlreadyGuessed;


}

function winRound() {

		wins++;
		console.log("wins",wins);
		restartGame();

	
}


// restart the game. reassign all values back to default.
function restartGame(){
	currentWord	= arr[Math.floor(Math.random()*arr.length)];
	chosenWord = currentWord.split("");
	wordtoUnderscores();
	numberOfGuessesRemaining = 9;
	lettersAlreadyGuessed = [];
}


// This is the function that will create an array out of the chosenWord
 function wordtoUnderscores(){


 	for ( var k=0; k<chosenWord.length; k++){
 		chosenWord[k]="_";

 	}
 	// wordUnderscores = chosenWord.join(' ');

 		document.getElementById('wordGuessed').innerHTML = chosenWord.join(' ');
 		
 }

 document.getElementById('wins').innerHTML = wins;
 document.getElementById('losses').innerHTML = losses;

// Functions for wins and losses tracker


