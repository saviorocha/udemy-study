let secretNumber = Math.floor(Math.random() * 100) + 1;
let guess = Number(prompt("Guess a number"));

if (guess === secretNumber) {
	alert("Acertô");
} else if (guess > secretNumber) {
	alert("too high try again");
} else {
	alert("too low try again");
}