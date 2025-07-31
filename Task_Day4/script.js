//Task 1

// var arr = [];

// for(var i=0;i<5;i++)
// {
//     var num = parseInt(prompt(`Enter number ${i + 1}:`));
//     arr.push(num);
// }

// //sort descending
// var des = arr.slice().sort(function(a,b){
//     if( a < b ) return -1;
//     if(a > b ) return 1;
//     return 0; 
// });

// //sort ascending
// var asc = arr.slice().sort(function(a,b){
//     if(a < b) return 1;
//     if(a > b) return -1;
//     return 0;
// });

// document.writeln("<h2>Sorting</h2>"+"<hr>")
// document.write("<p><span style='color:red;'> u've entered the values of </span>" + arr.join(" , ") + "</p>");
// document.write("<p><span style='color:red;'> ur values after being sorted ascending </span>" + asc.join(",") + "</p>");
// document.write("<p><span style='color:red;'> ur values after being sorted descending </span>" + des.join(",") + "</p>");

//------------------------------------------------------------------------------------------

//Task 2

// var input = prompt("Enter a string to check if it's a palindrome:");
// var isCaseSensitive = confirm("Do you want to consider case sensitivity?");

// var process = isCaseSensitive ? input : input.toLowerCase();
// var reverse = process.split("").reverse().join("");

// if(process == reverse)
// {
//     alert("Is Palindrome.");
// }
// else
// {
//     alert("Isn't Palindrome.");
// }

//--------------------------------------------------------------------------------------------
//Task 3

// function getLargestWord(str)
// {
//     var words = str.split(" ");

//     var largestWord = "";
//     var maxLength = 0;

//     for(var word of words)
//     {
//         if(word.length > maxLength)
//         {
//             largestWord = word;
//             maxLength = word.length;
//         }
//     }
//     return largestWord;
// }

// var input = prompt("Enter a Sentence");
// var res = getLargestWord(input);
// alert("The largest word is: " + res);

//-------------------------------------------------------------------------------------------------

//Task 4

//area of circle
// var reduis = parseFloat(prompt("Enter the radius of the circle:"));
// if (!isNaN(reduis) && reduis >= 0) 
// {
//     var area = Math.PI * Math.pow(reduis,2);
//     document.write("<p> Total area of the circle is: <strong>" + area.toFixed(2) + "</strong></p>");
// }
// else
// {
//     alert("Invalid radius entered.");
// }

// //sqrt
// var num = parseInt(prompt("Enter a number to calculate its square root:"));
// if(!isNaN(num) && num >= 0)
// {
//     var sqrt = Math.sqrt(num);
//     document.write("<p>Square root of " + num + " is: <strong>" + sqrt+ "</strong></p>");
// }
// else
// {
//     alert("Invalid number for square root.");
// }

// //cosine of an angle
// var angle = parseFloat(prompt("Enter an angle in degrees to calculate its cosine:"));
// if(!isNaN(angle))
// {
//      // Convert degrees to radians
//     var radians = angle * (Math.PI / 180);
//     var cosValue = Math.cos(radians);
//     document.write("<p> Cos " + angle +"is: <strong>" + cosValue + "</strong></p>")
// }