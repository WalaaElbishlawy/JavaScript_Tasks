//task 1

// var message = prompt("Enter a message");

// for(var i = 1;i<= 6;i++){
//     document.writeln(`<h${i}>${message}</h${i}>`);
// }


//task 2

// var sum =0;

// while(true)
// {

//     var input = prompt("Enter a number and 0 to stop:");
//     var num = parseInt(input);

//     if (num == 0) 
//     {
//         break;
//     }

//     if (isNaN(num)) 
//     {
//         alert("Please enter a numeric value.");
//         continue;
//     }

//     sum += num;

//     if(sum > 100)
//     {
//         alert("Number is greater than 100.");
//          break;
//     }

// }
//     console.log("Sum = ",sum);
    


//task 3

// function checkDevisible(x,y,z)
// {
//     if (arguments.length !== 3) 
//     {
//         console.log("Error: requires 3 arguments(x,y,z)");
//         return;
//     }
//     if(x % y == 0 && x % z == 0)
//         console.log(`${x} is divisible by both ${y} and ${z}.`);
//     else if(x % y == 0)
//         console.log(`${x} is divisible by ${y} only`);
//     else if(x % z == 0)
//         console.log(`${x} is divisible by ${z} only`);
//     else
//         console.log(`${x} is not divisible by either ${y} or ${z}`);
// }

// let x = parseInt(prompt("Enter value x:"));
// let y = parseInt(prompt("Enter value y:"));
// let z = parseInt(prompt("Enter value z:"));

// if (isNaN(x) || isNaN(y) || isNaN(z)) 
//     alert("Invalid input! Please enter numeric values.");
// else
//     checkDevisible(x,y,z);



//task 4

function rangeDisplay(x, y, z)
{
    if (arguments.length !== 3) 
    {
        console.log("Error: requires 3 arguments(x,y,z).");
        return;
    }
    var sum = 0;
    var numbers = [];

    if(x <= y)
    {
        for(var i = x; i <= y; i++)
        {
            if(z == "odd" && i % 2 != 0)
            {
                numbers.push(i);
                sum += i;
            }
            else if (z == "even" && i % 2 == 0) 
            {
                numbers.push(i);
                sum += i;
            } 
            else if (z == "no") 
            {
                numbers.push(i);
                sum += i;
            }
        }
    }
    else
    {
        for (let i = x; i >= y; i--)
        {
            if (z === "odd" && i % 2 !== 0) 
            {
                numbers.push(i);
                sum += i;
            } 
            else if (z == "even" && i % 2 == 0) 
            {
                numbers.push(i);
                sum += i;
            }
            else if (z == "no") 
            {
                numbers.push(i);
                sum += i;
            }
        }
    }

    console.log("numbers: ",numbers.join(","));
    console.log("sum: ",sum);
}

let x = parseInt(prompt("Enter value x:"));
let y = parseInt(prompt("Enter value y:"));
let z = prompt("Enter 'odd', 'even', or 'no':").toLowerCase();

rangeDisplay(x, y, z);
    