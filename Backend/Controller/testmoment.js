const moment = require('moment'); // Assuming you've installed moment.js

// Parse a date string
const someDate = moment("2024-07-19");

// Format the date
const formattedDate = someDate.format("DD-MM-YYYY"); // Output: 19-07-2024

// Add 3 days
const threeDaysFromNow = someDate.add(3, 'days');

// Calculate the difference between dates
const daysSince = moment().diff(someDate, 'days'); // Calculates the number of days between today and someDate

// Display a date in relative format
const timeLeft = moment().add(1, 'hour').fromNow(); // Output: "in 1 hour"
