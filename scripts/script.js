let numbersElement = document.querySelector(".numbers");
let numberBoxElement = document.querySelectorAll(".number-box");
let numberElement = document.querySelector(".number");
let btnElement = document.querySelector("#generate");

btnElement.addEventListener("click", () => {

    let numberList = generateNumbers();

    assignElementsInFrontView(numberList);

})

function generateNumbers() {

    let numberList = [];

    for (let i = 0; i < 6; i++) {

        let randomNumber = callMathToNewNumber();

        if (i > 0 && numberList.includes(randomNumber)) {
            randomNumber = callMathToNewNumber();
        }

        numberList.push(randomNumber)

    }

    numberList.sort((a, b) => a - b)
    numberList = normalizeNumbers(numberList);

    return numberList;
}

function callMathToNewNumber() {
    return Math.floor(Math.random() * 60) + 1;
}

function normalizeNumbers(list) {

    let normalizedList = [];

    list.forEach(element => {
        element = String(element).padStart(2, "0");
        normalizedList.push(element)
    });

    return normalizedList;

}

function assignElementsInFrontView(numberList) {

    for (let i = 0; i < numberList.length; i++) {
        numberBoxElement[i].innerHTML = ""
        let newRandomNumber = document.createElement("p");

        newRandomNumber.textContent = numberList[i];
        newRandomNumber.className = "number";

        numberBoxElement[i].appendChild(newRandomNumber);
    }

}