function A(num) {
	return num * 2;
}

function B(num) {
	return (num % 7) + 4;
}

function C(num) {
	return num + num * num;
}

console.log("A(B(C(5))) is equal to:" + A(B(C(5))) + "\n");
console.log("Hey, this works!\n");