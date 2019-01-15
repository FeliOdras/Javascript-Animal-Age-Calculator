function calc() {
    let animal = document.getElementById('animalType').value;
    let humanAge = document.getElementById('humanAge').value;

    // calculate result
    let animalAge;
    if (animal == 'dog') {
        animalAge = humanAge * 7;
    } else if (animal == 'cow') {
        animalAge = humanAge * 14;
    } else if (animal == 'chinchilla') {
        animalAge = humanAge * 25;
    } else {
        animal = 'empty';
    }

    let errorMessage;
    if (humanAge < 1 || animal == 'empty') {
        calcOutput = `<p class="error">You need to fill all the fields to calculate your pet's age.</p>`;
    } else {
        calcOutput = `<p class="result">${humanAge} years are ${animalAge} years in a ${animal}'s life</p>`;
    }

    document.getElementById('animalAgeResult').innerHTML = calcOutput;
}