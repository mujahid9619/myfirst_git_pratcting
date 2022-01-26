// Session-2 Assign-1

year = 2024;

if ((year % 4==0 && year % 100 !=0) || year % 400==0){
    console.log("This is Leap Year");

} else {console.log("This is Not Leap Year")};

// Session-2 Assign-2

var age = 18;

if (age >= 18) {
    console.log("Yes You can Vote");

} else {
    console.log("No You can't Vote");
}

// Session-2 Assign-3

var alp = "u";

if (alp == "a" || alp == "e" || alp == "i" || alp == "o" || alp == "u") {
    
    console.log(alp + " is Vowel");
   
} else {
    console.log(alp + " is Constant");
}

// Session-2 Assign-4

var pin = "500027";

if (pin.length == 6) {
    
    console.log (pin + " This is valid pin");

} else {console.log (pin + " This is Not valid pin");}


// Session-2 Assign-5

var state = "Gujarat";
switch (true) {

    case (state == "Kerala"):
    console.log (state + " is in SOUTH")
    break;

    case (state == "Gujarat"):
    console.log (state + " is in WEST")
    break;

    case (state == "Assam"):
    console.log (state + " is in EAST")
    break;

    case (state == "Haryana"):
    console.log (state + " is in NORTH")
    break;

    default: 
    console.log("Not Mentioned");
}

// Session-2 Assign-6

var num = 124;

(num % 2 == 0) ? console.log("This is Even Number") : console.log("This is Odd number");

// Session-2 Assign-7

var a = 40;
var b = 30;

(a > b)? console.log ("A > B") 
: (a < b)? console.log ("A < B")
: console.log ("A = B");

// Session-2 Assign-8

var shirtcode = "L";
switch (true) {

    case (shirtcode == "S"):
    console.log (shirtcode + " " + "= Shirt Code is for small")
    break;

    case (shirtcode == "M"):
    console.log (shirtcode + " " + "= Shirt Code is for Middle")
    break;

    case (shirtcode == "L"):
    console.log (shirtcode + " " + "= Shirt Code is for Large")
    break;

    case (shirtcode == "XL"):
    console.log (shirtcode + " " + "= Shirt Code is for Extra Large")
    break;

    default: 
    console.log("Put Valued Shirt Code");
}