function maxElement(a){
	var max = a[0];
	a.forEach(function(num){
		if (num > max) {
			max = num;
		}
	});	
	return max;
}

var max = maxElement([1, 2, 3, 5, 90]);
console.log(max);

function sumArray(a){
	var total = 0;
	a.forEach(function(num){
		total += num;
	});	
	return total;
}

var total = sumArray([1, 2, 3, 5, 90]);
console.log(total);

function reverse(a){
	for (var i = a.length-1 ; i >= 0; i--) {
		console.log(a[i]);
	}
	//permanent reverse
	var b = a.reverse();
	console.log("By Function:"+ b);
}

reverse([1, 2, 3, 5, 90]);

// Advanced For Each (Custom)
function myForEach(a, func){
	for (var i = a.length-1 ; i >= 0; i--) {
		func(a[i]);
	}
}
myForEach([1,2,3], console.log)

// Second Way to Call
console.log("*****************");
myForEach([1,2,3], function (value){
		console.log(value);
})
console.log("##################");
Array.prototype.myEach = function (func){
	for (var i = this.length-1 ; i >= 0; i--) {
		func(this[i]);
	}	
}
var myArray = [1,2,3];
myArray.myEach(console.log)