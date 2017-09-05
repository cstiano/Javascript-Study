var array = [[2, 0], [-1, 3]];                // Array
var matrix = math.matrix([[7, 1], [-2, 3]]);  // Matrix

math.square(array);                           // Array,  [[4, 0], [1, 9]]
math.square(matrix);                          // Matrix, [[49, 1], [4, 9]]

math.add(array, matrix);                      // Matrix, [[9, 1], [-3, 6]]
math.multiply(array, matrix);                 // Matrix, [[14, 2], [-13, 8]]

math.ones(2, 3);                              // Matrix, [[1, 1, 1], [1, 1, 1]]