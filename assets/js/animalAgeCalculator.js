function calculateAge(animal, age) {
    let animalType = 'cow';
    let humanAge = 3;
    let animalAge;
    if (animal = 'dog') {
        animalAge = humanAge * 7;
    } else if (animal = 'cow') {
        animalAge = humanAge * 14;
    } else if (animal = 'chincilla') {
        animalAge = humanAge * 25;
    }
    console.log(`Animal: ${animalType}`);
    console.log(`Human Age: ${humanAge}`);
    console.log(`Animal Age: ${animalAge}`);
}
calculateAge('cow', 3)


// document.getElementById('animalAgeResult').innerHTML = calulateAge();