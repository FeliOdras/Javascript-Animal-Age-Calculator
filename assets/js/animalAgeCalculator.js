function calculateAge(animal, humanAge) {
    let animalAge;
    if (animal = 'dog') {
        animalAge = humanAge * 7;
    } else if (animal = 'cow') {
        animalAge = humanAge * 14;
    } else if (animal = 'chincilla') {
        animalAge = humanAge * 25;
    }
    let calcResultOutput = `${humanAge} years are ${animalAge} years in a ${animal}'s life`;
    document.getElementById('animalAgeResult').innerHTML = calcResultOutput;

}
calculateAge('dog', 12);
calculateAge('cow', 4);
calculateAge('chinchilla', 2);


// document.getElementById('animalAgeResult').innerHTML = calulateAge();