function calculateAge(animal, humanAge) {
    let animalAge;
    if (animal = 'dog') {
        animalAge = humanAge * 7;
    } else if (animal = 'cow') {
        animalAge = humanAge * 14;
    } else if (animal = 'chincilla') {
        animalAge = humanAge * 25;
    }
    console.log(`Animal: ${animal}`);
    console.log(`Human Age: ${humanAge}`);
    console.log(`Animal Age: ${animalAge}`);
}
calculateAge('dog', 6)


// document.getElementById('animalAgeResult').innerHTML = calulateAge();