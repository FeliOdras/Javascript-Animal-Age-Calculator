"use strict"

function calc() {
    let animal = document.getElementById('animalType').value;
    let humanAge = document.getElementById('humanAge').value;

    // calculate result
    let animalAge;
    let animalPic;
    if (animal == 'dog') {
        animalAge = humanAge * 7;
        animalPic = './assets/images/dog.jpg';
    } else if (animal == 'cow') {
        animalAge = humanAge * 14;
        animalPic = './assets/images/cow.jpg';
    } else if (animal == 'chinchilla') {
        animalAge = humanAge * 25;
        animalPic = './assets/images/chinchilla.jpg';
    } else {
        animal = 'empty';
    }

    let calcOutput;
    if (humanAge < 1 || animal == 'empty') {
        calcOutput = `<p class="error">ERROR! <br />You need to fill all the fields to calculate your pet's age.</p>`;
    } else {
        calcOutput = `<img src=${animalPic} alt=${animal} class="animalPic" /><p class="result">${humanAge == 1 ? 'One human year' : humanAge+ ' human years'} are ${animalAge} years in a ${animal}'s life.</p>`;
    }

    document.getElementById('animalAgeResult').innerHTML = calcOutput;
}