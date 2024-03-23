// input btn for clear statement 
document.getElementById("clearInputBtn").onclick = function(){
    document.getElementById("input-box").innerHTML = " "
}

// clear output box 
document.getElementById("clearOutputBtn").onclick = function(){
    document.getElementById("output-box").innerHTML = " "
}

// concatenation 
document.getElementById("concatenation").onclick = function () {
    let userName = prompt("Please enter your name:");
    let userLocation = prompt("Please enter your location:");

    if (userName && userLocation) {
        let welcomeMessage = "Welcome, " + userName + "! We're glad to have you here in " + userLocation + ".";
        document.getElementById("output-box").innerHTML = welcomeMessage;
    } else {
        document.getElementById("output-box").innerHTML = "Invalid input. Please enter both your name and location.";
    }
}

// ask name from user 
document.getElementById("askName").onclick = function(){
    let firstName = prompt("please enter your first name")
    let lastName = prompt("please enter your last name")
    let fullName = `${firstName} ${lastName}`
    document.getElementById("input-box").innerHTML = `first name = ${firstName} <br> last name = ${lastName} <br> full name = first name + last name`
    document.getElementById("output-box").innerHTML = `full name = ${fullName}`
}


document.getElementById("comparisonOperator").onclick = function () {
    let num1 = parseFloat(prompt("Please enter the first number:"));
    let num2 = parseFloat(prompt("Please enter the second number:"));

    if (!isNaN(num1) && !isNaN(num2)) {
        if (num1 > num2) {
            document.getElementById("input-box").innerHTML = `Comparison: ${num1} > ${num2}`;
            document.getElementById("output-box").innerHTML = "<span class='text-success'>The first number is greater than the second one &#128077;</span>";
        } else if (num1 < num2) {
            document.getElementById("input-box").innerHTML = `Comparison: ${num1} < ${num2}`;
            document.getElementById("output-box").innerHTML = "<span class='text-success'>The first number is less than the second one &#128078;</span>";
        } else {
            document.getElementById("input-box").innerHTML = `Comparison: ${num1} === ${num2}`;
            document.getElementById("output-box").innerHTML = "<span class='text-warning'>Both numbers are equal &#128528;</span>";
        }
    } else {
        document.getElementById("output-box").innerHTML = "<span class='text-danger'>Invalid input. Please enter valid numbers.</span>";
    }
}

// if else if
document.getElementById("ifElseIf").onclick = function (){
    document.getElementById("input-box").innerHTML = " ";
    let marks = +prompt("please enter your marks")
    if (marks >= 90){
        document.getElementById("output-box").innerHTML = "<span class='text-success'>Congratulations! you got A+ Grade</span> "
    }
    else if (marks >=80){
        document.getElementById("output-box").innerHTML = "<span class='text-success'>Congratulations! you got A Grade</span>"
    }
    else if (marks >=70){
        document.getElementById("output-box").innerHTML = "<span class='text-warning'>you got B Grade</span>"
    }
    else {
        document.getElementById("output-box").innerHTML = "<span class='text-danger'>You Are Fail. &#128554;</span>"
    }
}


document.getElementById("setsOfConditions").onclick = function (){
    let temperature = parseFloat(prompt("Please enter the current temperature in Celsius:"));
    let isRaining = confirm("Is it raining? (Press OK for Yes, Cancel for No)");

    if (!isNaN(temperature)) {
        if (temperature < 0) {
            document.getElementById("output-box").innerHTML = "It's freezing outside!";
        } else if (temperature >= 0 && temperature < 10) {
            if (isRaining) {
                document.getElementById("output-box").innerHTML = "It's cold and raining. Better take an umbrella!";
            } else {
                document.getElementById("output-box").innerHTML = "It's cold outside, but it's not raining.";
            }
        } else if (temperature >= 10 && temperature < 20) {
            if (isRaining) {
                document.getElementById("output-box").innerHTML = "It's cool, and it's raining. Don't forget your jacket!";
            } else {
                document.getElementById("output-box").innerHTML = "It's cool outside. Enjoy the weather!";
            }
        } else {
            if (isRaining) {
                document.getElementById("output-box").innerHTML = "It's warm, and it's raining. Enjoy the rain!";
            } else {
                document.getElementById("output-box").innerHTML = "It's warm outside. Perfect weather!";
            }
        }
    } else {
        document.getElementById("output-box").innerHTML = "Invalid input. Please enter a valid temperature.";
    }
}

document.getElementById("ifStatementNested").onclick = function(){
    let totalAmount = prompt("Please enter the total amount of your purchase:");
    if(totalAmount !== null){
        totalAmount = parseFloat(totalAmount); // Convert input to floating point number
        if(!isNaN(totalAmount) && totalAmount > 0){
            let discount;
            if(totalAmount >= 100 && totalAmount < 200){
                discount = 10;
            } else if(totalAmount >= 200 && totalAmount < 500){
                discount = 20;
            } else if(totalAmount >= 500){
                discount = 30;
            } else {
                discount = 0;
            }
            let discountedAmount = totalAmount - (totalAmount * discount / 100);
            document.getElementById("output-box").innerHTML = "<span style='color:green;'>After a " + discount + "% discount, your total amount is $" + discountedAmount.toFixed(2) + ".</span>";
        } else {
            document.getElementById("output-box").innerHTML = "<span style='color:red;'>Invalid input. Please enter a valid positive number for the total amount.</span>";
        }
    } else {
        document.getElementById("output-box").innerHTML = "<span style='color:red;'>Invalid input. Please enter a valid total amount.</span>";
    }
}



// login 
document.getElementById("login").onclick = function (){
    document.getElementById("input-box").innerHTML = " ";
    let userName = prompt("please enter username")
    let passWord = +prompt("please enter password")
    if (userName === "armughan" && passWord === 123 ){
        document.getElementById("input-box").innerHTML = `<span style='color:green; font-weight:bold;'>${userName}</span>`
        document.getElementById("output-box").innerHTML = `<span style='color:green; text-transform:capitalize;'>you are successfully logged in</span>`
    }
    else {
        document.getElementById("output-box").innerHTML =`<span style='color:red;'>Try using "armughan" as username and "123" as a password</span>`
    }

}
// check
document.getElementById("check").onclick = function (){
    document.getElementById("input-box").innerHTML = " ";
    let number = prompt("Please enter a number:");
    number = parseInt(number); // Convert input to an integer

    if (!isNaN(number)) { // Check if the input is a valid number
        let result = (number % 2 === 0) ? "even" : "odd";
        document.getElementById("input-box").innerText =`${number}` // Set input box value
        document.getElementById("output-box").innerText = "The number is " + result + ".";
    } else {
        document.getElementById("output-box").innerText = "Invalid input. Please enter a valid number.";
    }
}

