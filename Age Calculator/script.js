let userInput = document.querySelector('#date')
const calculateBtn = document.querySelector('button')
let result = document.querySelector('#result')

// Set the maximum allowed date in the input to the current date
userInput.max = new Date().toISOString().split("T")[0];

// Define a function to calculate the age
function calculateAge(){
    // Get the birthdate from the user input
    let birthDate = new Date(userInput.value)

    // Extract day, month, and year from the birthdate
    let d1 = birthDate.getDate()
    let m1 = birthDate.getMonth() + 1
    let y1 = birthDate.getFullYear()

    // Get the current date
    let today = new Date()

    // Extract day, month, and year from the current date
    let d2 = today.getDate()
    let m2 = today.getMonth() + 1
    let y2 = today.getFullYear()

    // Variables to store the age in years, months, and days
    let d3, m3, y3;

    // Calculate the age in years
    y3 = y2 - y1

    // Check if the current month is greater than or equal to the birth month
    if(m2 >= m1){
        // If true, calculate the age in months
        m3 = m2 - m1
    } else {
        // If false, adjust the year and calculate the age in months
        y3--;
        m3 = 12 + m2 - m1
    }

    // Check if the current day is greater than or equal to the birth day
    if(d2 >= d1){
        // If true, calculate the age in days
        d3 = d2 - d1
    } else {
        // If false, adjust the month and calculate the age in days
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1
    }

    // If the calculated months are negative, adjust the values
    if(m3 < 0){
        m3 = 11;
        y3--;
    }

    // Display the calculated age in the result element
    result.innerText = `You are ${y3} years, ${m3} months and ${d3} days old`
}

// Define a function to get the number of days in a specific month
function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate()
}

// Add a click event listener to the button, which will call the calculateAge function
calculateBtn.addEventListener("click", calculateAge)
