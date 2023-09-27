const input = document.querySelector("#input");
const counter = document.querySelector(".counter");
const toggleButton = document.querySelector("#toggle");

let mode = "characters";

toggleButton.addEventListener("click", () => {

    if (mode === "characters") {

        mode = "words";
        toggleButton.textContent = "Contar Caracteres"
        counter.textContent = "0 Palavra."
        input.value = ""

    } else if (mode === "words") {
        mode = "characters"
        toggleButton.textContent = "Contar Palavras"
        counter.textContent = "0 Caractere."
        input.value = ""
    }

})

input.addEventListener("input", () => {

    let count = 0;

    if (mode === "characters") {

        count = input.value.length;

        counter.textContent = (count === 0 || count === 1) ? `${count} Caractere.` : `${count} Caracteres.`

    }  else if (mode === "words") {
        let words = input.value.trim().split(/\s+/)
        let countWords = input.value.trim() === "" ? 0 : words.length

        counter.textContent = (countWords === 0 || countWords === 1) ? `${countWords} Palavra.` : `${countWords} Palavras.`
    }

})