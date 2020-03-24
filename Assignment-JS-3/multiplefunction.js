function isEven(num) {
	if (num%2===0) {
		return true;
	}
	return false;
}

function factorial(num) {
	var output = 1;
	while(num > 1){
		output*=num;
		num--;
	}
	return output;
}

function kebabToSnake(input) {
	return String(input).replace("-"," _");
}

console.log(isEven(10));
console.log(factorial(5));
console.log(kebabToSnake("Hi-Bye"));