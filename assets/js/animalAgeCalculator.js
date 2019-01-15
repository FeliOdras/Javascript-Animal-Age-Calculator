function calc() {
    let animal = document.getElementById('animalType').value;
    let humanAge = document.getElementById('humanAge').value;
    let animalAge;
    if (animal == 'dog') {
        animalAge = humanAge * 7;
    } else if (animal == 'cow') {
        animalAge = humanAge * 14;
    } else if (animal == 'chinchilla') {
        animalAge = humanAge * 25;
    } else {
        alert("You need to select your pet")
    }

    if (humanAge <= 0 || humanAge == '') {
        alert("Please type your pet's age in human years");
    }
    document.getElementById('animalAgeResult').innerHTML = `${humanAge} years are ${animalAge} years in a ${animal}'s life`;
}