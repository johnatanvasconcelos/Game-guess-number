const lowerValue = 1;
const higherValue = 100;
const drawnNumber = generateRandomNumber();
console.log(drawnNumber);

function generateRandomNumber(){
    return parseInt(Math.random() * higherValue + 1);
}

const elementHigherValue = document.getElementById('higherValue');
elementHigherValue.innerHTML = higherValue;

const elementLowerValue = document.getElementById('lowerValue');
elementLowerValue.innerHTML = lowerValue;
