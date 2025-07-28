let adviceText = document.querySelector(".advice");
let btn = document.querySelector(".next");
let adNumber = document.querySelector(".ad-number");

let adviceBank = [
    "Learn as if you were to live forever.",
    "You must be the change you wish to see in the world.",
    "Education is the most powerful weapon which you can use to change the world.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Stay hungry, stay foolish.",
    "Do what you can, with what you have, where you are.",
    "Don’t let yesterday take up too much of today."
]
// let i =0

btn.addEventListener("click", () => {
    // Get a random number
    let i = Math.floor(Math.random() * adviceBank.length);
    
    // Update the advice text and number
    adviceText.textContent = adviceBank[i];
    adNumber.textContent = i + 1;
})

setInterval(() =>{
    // get a random number
    let i = Math.trunc(Math.random()* adviceBank.length)

    // change the txt content to the array index number
    adviceText.textContent = adviceBank[i]

    // chane the advice number using the index value plus 1
    addNumber.textContent = i +1
}, 2000);
