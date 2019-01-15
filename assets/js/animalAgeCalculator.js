/*function calculateAge(animal, humanAge) {
    let animalAge;
    if (animal = 'dog') {
        animalAge == humanAge * 7;
    } else if (animal == 'cow') {
        animalAge = humanAge * 14;
    } else if (animal == 'chinchilla') {
        animalAge = humanAge * 25;
    }
    let calcResultOutput = `${humanAge} years are ${animalAge} years in a ${animal}'s life`;
    document.getElementById('animalAgeResult').innerHTML = calcResultOutput;

}
calculateAge('dog', 12);
calculateAge('cow', 4);
calculateAge('chinchilla', 2);*/
function calc() {
    let animal = document.getElementById('animalType').value;
    let humanAge = document.getElementById('humanAge').value;
    console.log(animal);
    console.log(humanAge);
    let animalAge;
    if (animal == 'dog') {
        animalAge = humanAge * 7;
    } else if (animal == 'cow') {
        animalAge = humanAge * 14;
    } else if (animal == 'chinchilla') {
        animalAge = humanAge * 25;
    }
    console.log(animalAge);
    document.getElementById('animalAgeResult').innerHTML = `${humanAge} years are ${animalAge} years in a ${animal}'s life`;
}

// document.getElementById('animalAgeResult').innerHTML = calulateAge();