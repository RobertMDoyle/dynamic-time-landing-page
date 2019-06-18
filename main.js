// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

// Option for Showing AM or PM
const showAnPm = true;

// Show Time
function showTime() {
    //let today = new Date(2019, 06, 10, 08, 33, 30),
    let today = new Date(),
        year = today.getFullYear(),
        month = today.getMonth(),
        day = today.getDay(),
        monthNum = today.getDate(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Get Month Name from Month Index Number in Date Object
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Get Week Day Name from Day Index Number in Date Object
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output Time
    time1.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAnPm ? amPm : ''}`;
    time2.innerHTML = `${dayNames[day]} `;
    time3.innerHTML = `${monthNames[month]} ${monthNum}`;
    time4.innerHTML = `${year}`;

    setTimeout(showTime, 1000);

}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
    //let today = new Date(2019, 06, 10, 15, 33, 30),
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('img/morning.jpg')";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good Morning';
    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('img/afternoon.jpg')";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good Afternoon';
        document.body.style.color = 'white';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('img/night.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "right top";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}


// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

// Listen on Name
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

// Listen on Focus
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);




// Run
showTime();
setBgGreet();
getName();
getFocus();