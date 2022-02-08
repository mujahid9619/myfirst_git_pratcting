// 1. Given an array of string join them with a comma ,
// Sample Input - ["HTML", "CSS", "JAVA", "JS"]
// Sample Output - HTML,CSS,JAVA,JS

// var ary = ["HTML", "CSS", "JAVA", "JS"];
// let text = ary.join();
// console.log(text);

// ---------------------------another method-------------------------

// var ary = ["HTML", "CSS", "JAVA", "JS"];
// var string = "";

// for (var i = 0; i < ary.length; i++){
//     if (i==0) {
//         string = string + ary[i];
//     } else {
//         string = string + "," + ary[i]
//     }
// }
// console.log(string);


// ----------------------------------------------------
// 2. Given an array or string print the total no of characters
// Sample Input - ["HTML", "CSS", "JAVA", "JS", "ANDROID"]
// Sample Output - 20

// var string = ["HTML", "CSS", "JAVA", "JS", "ANDROID"];
// var total = '';

// for (var i = 0; i<string.length; i++){
//        total = total + string[i]
// }
// console.log(total.length);


// ---------------------------------------------------- 
// 3. Given an array of game, scores print the highest and lowest score
// Sample Input - [100, 20, 31, 150, 39, 72]
// Sample Output - 150 
// 		  20

// var string = [100, 20, 31, 150, 39, 72];
// var highest = string[0];
// var lowest = string[0];

// for (var i=1; i<string.length; i++){
//     if(string[i] > highest){
//         highest = string[i];
//     } else if (string[i] < lowest) {
//         lowest = string[i];
//     }
// }
// console.log(highest);
// console.log(lowest);

// ---------------------------------------------------- 
// 4. Given a matrix, print the rows and columns
// Sample Input: [[1, 2, 3], [4, 5. 6], [7, 8, 9]]
// Sample Output: 3, 3
 
// var matrix = [
//     [1, 2, 3], 
//     [4, 5, 6], 
//     [7, 8, 9]
// ]

// var rows = matrix.length;
// console.log(rows);

// var cols = matrix[0].length;
// console.log(rows);


// ---------------------------------------------------- 
// 5. Given a matrix print the first diagonal
// Sample Input:  [[1, 2, 3], [4, 5. 6], [7, 8, 9]]
// Sample Output: 1, 4, 9
 
// var mat = [
//     [1, 2, 3], 
//     [4, 5, 6], 
//     [7, 8, 9]
// ];

// for (var i=0; i<mat.length; i++){
//     for(var j=0; j<mat[i].length; j++){
//         if(i == j){
//             console.log(mat[i][j]);
//         }
//     }
// }


// ---------------------------------------------------- 
// 6. Given an array of string generate an array whose first or last character is a
// Sample Input - ["assignment", "problem", "media", "upload"]
// Sample Output - ["assignment", "media"]
 
// var ary = ["assignment", "problem", "media", "upload"];

// for (var i = 0; i < ary.length; i++) {
//     if (ary[i][0] === "a" || ary[i][ary[i].length - 1] === "a") {
//       console.log(ary[i]);
//     }
// }

// ---------------------------------------------------- 
// 7. Given an array of strings print the snake case of the strings [Assume Small case strings]
// Sample Input - ["edstem", "tech"]
// Sample Output - edstem_tech
 

// let array = ["edstem", "tech"];
// let string = "";

// for (let i = 0; i < array.length; i++) {
//   if (i == 0) {
//     string += array[i];
//   } else {
//     string += "_" + array[i];
//   }
// }

// console.log(string);

// 8. Given an 2d Array print the difference of first and second diagonals sum 
// Sample Input - [
// 		[1, 2, 3],
// 		[4, 5, 6],
// 		[7,  8, 9]
// ]
// 	Sample Output - First Diagonal -> 1+5+9 ->  15
// 			Second Diagonal -> 3+5+7 -> 15
// 			Difference => 15-15 -> 0
 

// var mat = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7,  8, 9]
// ]

//  var diagSum1 = 0;
//   var diagSum2 = 0;

//   for (var i = 0; i < mat.length; i++){
//     for (var j = 0; j < mat[i].length; j++){
//         if (i==j) {
//             diagSum1 += mat[i][j];
//         }
//         if (i + j === mat.length - 1) {
//           diagSum2 += mat[i][j];
//         }
//     }
// }
// console.log("Diagonal Difference" + " =" + " " + (diagSum1 - diagSum2));



// 9. Given an array of numbers print the product of all numbers
// Sample Input - [2,3,4]
// Sample Output - 24
 
// var array = [2,3,4];
// var prod = 1;

// for (var i=0; i<array.length; i++){
   
//     prod = prod * array[i];
// }
// console.log(prod);




// 10.Given an 2d array print the mid column
// Sample Input - [
// 		[1, 2, 3],
// 		[4, 5, 6],
// 		[7, 8, 9]
// ]
// 	Sample Output - 2, 5, 8

 
// var mat = [
//     [1, 2, 3], 
//     [4, 5, 6], 
//     [7, 8, 9]
// ];

// for (var i=0; i<mat.length; i++){
//     for(var j=0; j<mat[i].length; j++){
//         if(i == j){
//             console.log(mat[i][mat[i].length-2]);
//         }
//     }
// }

// // --------anothedr method------------
// matrix = [
//     [1, 12, 123, 1232, 12321],
//     [4, 45, 456, 4565, 45654],
//     [7, 78, 789, 7898, 78987],
//     [10, 1011, 101112, 10111211, 1011121110],
//     [12, 1314, 131415, 13141514, 1314151413],
//   ];
  
//   let string = "";
  
//   for (let i = 0; i < matrix.length; i++) {
//     // console.log(matrix[i][(matrix[i].length - 1) / 2]);
//     if (
//       matrix[i][(matrix[i].length - 1) / 2] ==
//       matrix[0][(matrix[i].length - 1) / 2]
//     ) {
//       string += matrix[0][(matrix[i].length - 1) / 2];
//     } else {
//       string += "," + matrix[i][(matrix[i].length - 1) / 2];
//     }
//   }
  
//   console.log(string);