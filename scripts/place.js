const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").innerHTML = document.lastModified; 'Last Modified: ${document.lastModified}';

let temp = 30;
let speed = 8;
let windChillDisplay;

if (temp <= 10 && speed > 4.8) {
    windChillDisplay = calculateWindChill(temp, speed);
} else {
    windChillDisplay = 'N/A';
}
console.log(windChillDisplay);