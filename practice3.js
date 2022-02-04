/*for (var a=1; a<=3; a++){
    console.log("Name"); 
} 

for (var i=0; i<=100; i++){
    console.log(i);
}

for (var i=1; i<=100; i++){
    if(i % 2 ===0){
        console.log(i);
    }
}

var sum = 0;

for(var i=1; i<=100; i++){
    sum = sum + i;
}

console.log(sum);

var str = "mujahid";
console.log(str.length);*/



// // Define a variable count Print your name using while loop the 
// // no of times the value assigned to the variable count
// var count = 5;
// while(count >= 0) {
//     console.log("Mujahid"); 
//     count--;
// }


// // Define a variable limit Print your name using for loop the 
// // no of times the value assigned to the variable limit
// for (var i = 1; i<=3; i++) {
//     console.log("Mohammed Mujahid"); 
// }

// Using a while loop print the numbers in descending order 
// from the given starting to ending limit. Start - 20 End - 25
// for (var i = 25; i>=20; i--) {
//     console.log(i); 
// }


// Given a starting number and a decrement value, print all numbers 
// from the starting number till zero deducting the decrement 
// value each time. Starting - 13, Decrement - 4
// 	Output : 
// 	13
// 	9
// 	5
// 	1

// for (var i = 13; i>=0; i = i -4) {
//     console.log(i); 
    
// }


// Print the average of all the numbers from 1 to given limit
// 	Sample Limit - 5, 
// 	Output - 3 (1+2+3+4+5 = 15/5 = 3)
// var count = 0;
// var limit = 5;
// for (var i = 1; i<=limit; i++) {
//     count = count + i 
// }
// console.log(count / limit)




// Find out the average of the first 100 n natural numbers using for loop.
// var count = 0
// var limit = 100;
// for (var i = 1; i<=100; i++) {
//     count = count + i
    
// }
// console.log(count/limit);


// Print all the multiples of 3 till 100 using for loop
// for (var g = 1; g<=100; g++) {
//     console.log(g*3);
// }

//Given a string print all the consonants which are not a,e,i,o,u using for loop.
// Hint: use || operator and !== ‘a’ like this inside a conditional statement.
// var alp = "abcdefghijklmnopqrstuvwxyz";
// for(var i=0; i<alp.length; i++){

//     if (alp[i] !== "a" && alp[i] !== "e"&& alp[i] !== "i" && alp[i] !== "o" && alp[i] !== "u") {
//         console.log(alp[i]);
//     }
// }


//Given a string find out the length of that string
// var letter = "abcdefghijklmnopqrstuvwxyz";
// console.log(letter.length);


// Given a string, print the first character and last character of that string.
// var name = "mujahid";
// console.log(name[0]);
// console.log(name[name.length -1]);


// Given a string print the odd indexes of that string using for loop
// 	Example: ‘edstem’ => print d, t, m
// var str = "edstem";
// var temp = ""
// for (var i=1; i<str.length; i++){
//     if (i % 2 !==0){
//         temp = temp + str[i]
//     }
// }
// console.log(temp)


// Find out the sum of the first 10 natural numbers using for loop
// var sum = 0;
// for (var i=1; i<=10; i++) {
//     sum = sum + i
// }
// console.log(sum);