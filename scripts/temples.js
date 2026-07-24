const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").innerHTML = document.lastModified; 'Last Modified: ${document.lastModified}';

const navigation = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEvenListener('click', () => {
    navigation.classList.toggle('close');
    hambutton.classList.toggle('close');
})