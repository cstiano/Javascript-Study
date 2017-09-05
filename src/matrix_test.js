var array = [[2, 0], [-1, 3]];                // Array
var matrix = math.matrix([[7, 1], [-2, 3]]);  // Matrix

math.square(array);                           // Array,  [[4, 0], [1, 9]]
math.square(matrix);                          // Matrix, [[49, 1], [4, 9]]

math.add(array, matrix);                      // Matrix, [[9, 1], [-3, 6]]
math.multiply(array, matrix);                 // Matrix, [[14, 2], [-13, 8]]

math.ones(2, 3);                              // Matrix, [[1, 1, 1], [1, 1, 1]]


var x = new Array(10);
for(var i=0; i<10; i++){
	x[i] = new Array(20);
}
x[5][12] = 3.0;

function createArray(length){
	var arr = new Array(length || 0);
	i = length;
	if(arguments.length > 1){
		var args = Array.prototype.call(arguments, 1);
		while(i--) arr[length-1-i] = createArray.apply(this,args);
	}
	return arr;
}