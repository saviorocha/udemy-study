let num = -10;

while (num <= 19) {
	console.log(num);
	num++;
}

console.log("-----------------------");
num = 10;

while (num <= (40)) {
	if (num % 2 === 0) {
		console.log(num);		
	}
	num++;
}

console.log("-----------------------");
num = 300;

while (num <= 333) {
	if (num % 2 !== 0) {
		console.log(num);
	}
	num++;
}

console.log("-----------------------");
num = 5;

while (num <= 50) {
	if (num % 5 === 0 && num % 3 === 0) {
		console.log(num);
	}
	num++;
}