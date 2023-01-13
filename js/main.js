console.log("script loaded");

// On récupère les éléments de notre calculatrice

const buttons = document.querySelectorAll("button");
console.log("buttons => ", buttons);

const screen = document.querySelector(".screen");
console.log("screen => ", screen);

const history = document.querySelector(".history");
console.log("history => ", history);

// On définit les variables utiles

let firstOperand = "";
let lastOperand = "";
let operator = "";

//  On ajoute un écouteur d'évènement à chaque bouton

// buttons.forEach()

buttons.forEach((button) => {
    // Boucle, button prend chaque valeur du tableau
    button.addEventListener("click", (e) => {
        // On récupère le contenu du bouton
        const buttonContent = e.target.innerText;

        if (!isNaN(buttonContent) || buttonContent === ".") {
            if (operator === "") {
                firstOperand += buttonContent;
                screen.innerText = firstOperand;
            } else {
                lastOperand += buttonContent;
                screen.innerText = lastOperand;
            }
        }

        if (
            buttonContent === "+" ||
            buttonContent === "-" ||
            buttonContent === "/" ||
            buttonContent === "*"
        ) {
            operator = buttonContent;
        }
        if (buttonContent === "=") {
            screen.innerText = eval(
                ` ${firstOperand} ${operator} ${lastOperand}`
            );
        }
        if (buttonContent === "C") {
            reset()
        }
        
    });
});

function reset() {
 { 
    lastOperand = ''
    firstOperand = ''
    operator = ''
    screen.innerText = ''
 } }

