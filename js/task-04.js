const value = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
btnDecrement.addEventListener('click', setCounterDecrement);
btnIncrement.addEventListener('click', setCounterIncrement);

let counterValue = 0;

function setCounterDecrement() {
    counterValue -= 1;
    value.textContent = counterValue;
}
function setCounterIncrement() {
    counterValue += 1;
    value.textContent = counterValue;
}