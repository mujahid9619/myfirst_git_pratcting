// Session4__Arrays__Assignments

// 1. Given an array of strings count all the vowel characters
// Sample Input - [‘edstem’, ‘react’, ‘javascript’, ‘html’, ‘css’ ]
// Sample Output - 7

// var names = ['edstem', 'react', 'javascript', 'html', 'css'];
// var count = 0;

// for (var i=0; i<names.length; i++){
//     for(var j=0; j<names[i].length; j++){
//         if (names[i][j] === 'a' || names[i][j] === 'e' || names[i][j] === 'i' || names[i][j] === 'o' || names[i][j] === 'u' ){
//         count++;

//         }
//     }
// }
// console.log(count);

 


// 2. Given a string print "YES" if it is a palindrome "NO" if it is not one
// A palindrome is a word which reads the same backward as forward, such as madam, bob
// Strings Problem

// let string = "palindromeemordnilap";
// const length = string.length;
// let reversedString = "";

// for (let i = length - 1; i >= 0; i--) {
//   reversedString += string[i];
// }

// if (string === reversedString) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }





// 3. Given an array of marks, find out the Average
// Sample Input: [95, 86, 66, 94, 58]
// Sample Output: 79.8
// Hint: use arr.length

// var marks = [95, 86, 66, 94, 58];
// var total = 0;

// for(var i=0; i<marks.length; i++){
//     total = total + marks[i]
// }
// console.log(total/marks.length);



// 4. Given an array of strings, remove all the odd length strings from it
// Sample Input: [‘edstem’, ‘react’, ‘html’, ‘foodie’, ‘coder’’  ]
// Sample Output: [ ‘edstem’, ‘html’, ‘foodie’ ]

// var names = ['edstem', 'react','html','foodie','coder']

// let newNames = []

// for (var i=0; i<names.length; i++){
//     if(names[i].length % 2 ===0){
//         newNames.push(names[i])
//     }
// }
// names = newNames;
// console.log(names);
 




// 5. Given an array of numbers, change the multiples of 3 to ‘multiple’
// Sample Input: [5, 9, 8, 12, 22, 18]
// Sample Output: [5, ‘multiple’, 8, ‘multiple’, 22, ‘multiple’ ]

// var ary = [5, 9, 8, 12, 22, 18];

// for(var i=0; i<ary.length; i++){
//     if(ary[i] % 3 === 0) {
//         ary[i] = "multiple";
//     }
// }

// console.log(ary);




// 6. Given an empty array fill that array with first 10 natural numbers
// Sample Input: []
// Sample Output: [1,2,3,4,5,6,7,8,9,10]

// let array = [];
// let limit = 10;

// for (let i = 1; i <= limit; i++) {
//   array.push(i);
// }

// console.log(array);
 



// 7. Given a string split it into an array of words
// Sample Input - "Edstem Technologies"
// Sample Output - ["Edstem", "Technologies"]
// Hint: Use push method

// var string = "Edstem Technologies";
// var usingSplit = string.split(" ");
// console.log(usingSplit)
 

// let str = "Edstem Technologies";
// let word = "";
// let result = [];

// for (let i = 0; i < str.length; i++) {
//   if (str[i] == " ") {
//     result.push(word);
//     word = "";
//   } else {
//     word += str[i];
//   }
// }

// result.push(word);

// console.log(result);




// 8. Given a string print all the Characters in the odd position (Start counting with 0)
// Sample Input - ‘Edstem’
// Sample Output: dtm
 
// var str = "edstem";
// var temp = ""
// for (var i=0; i<str.length; i++){
//     if (i % 2 !==0){
//         temp = temp + str[i]
//     }
// }
// console.log(temp)


// let string = "Edstem";

// for (let i = 1; i < string.length; i += 2){
//     console.log(string[i]);
// }



// 9. Given a sentence print the count of words (Separated by a space character)
// Input - "Coding is Easy"
// Output - 3

// var sentence = ["Coding", "is", "Easy"];
// console.log(sentence.length);
 

// let str = "Coding is Easy";

// let word = "";
// let result = [];

// for (let i = 0; i < str.length; i++) {
//   if (str[i] == " ") {
//     result.push(word);
//     word = " ";
//   } else {
//     word += str[i];
//   }
// }

// result.push(word);

// console.log(result.length);



// 10. Given an Array of names find out if edstem is there or not, if edstem is there print true or else print false
// Sample Input: [‘react’, ‘html’, ‘edstm’]
// Sample Output: false => edstm spelling mistake :) 

let array = ["react", "html", "edstm"];
let flag = "false";
let word = "edstem";

for (let i = 0; i < array.length; i++) {
  if (word === array[i]) {
    flag = "true";
  }
}
if (flag === "true") {
  console.log("true");
} else {
  console.log("false");
}