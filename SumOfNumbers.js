// Function to find the sum of array elements
function sumOfNumbersInArray(arr) {
	if(!Array.isArray(arr)) {
		throw new Error('Provided input is not an array !!');
	}

	let sum = 0;
	for(let i = 0 ; i < arr.length() ; i++) {
		if(Number.isInteger(arr[i])) {
			sum += arr[i];
		}
	}
	return sum;
}

const arr = [1 , 2 , 3 , 4 , 5];
const ans = sumOfNumbersInArray(arr); 
console.log(ans);