function calculateAge(animal, humanAge) {
    let animalAge;
    if (animal = 'dog') {
        animalAge = humanAge * 7;
    } else if (animal = 'cow') {
        animalAge = humanAge * 14;
    } else if (animal = 'chincilla') {
        animalAge = humanAge * 25;
    }
    console.log(`${humanAge} years are ${animalAge} years in a ${animal}'s life`);
}
calculateAge('dog', 6)


// document.getElementById('animalAgeResult').innerHTML = calulateAge();