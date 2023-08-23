// function increase() {
//     let currentCount = document.getElementById('output').textContent;
//     document.getElementById('output').textContent = Number(currentCount) + 1;
// };

// function decrease() {
//     let currentCount = document.getElementById('output').textContent;
//     document.getElementById('output').textContent = Number(currentCount) - 1;
// };

// function reset() {
//     let currentCount = 0;
//     document.getElementById('output').textContent = currentCount;
// };

let currentCount = Number(document.getElementById('output').textContent);

const counter = {
    add: function () {
        document.getElementById('output').textContent++;
    },
    subtract: function () {
        document.getElementById('output').textContent--;
    },
    reset: function () {
        document.getElementById('output').textContent = 0;
    }
}

document.getElementById("add").addEventListener("click", counter.add);
document.getElementById("reset").addEventListener("click", counter.reset);
document.getElementById("subtract").addEventListener("click", counter.subtract);