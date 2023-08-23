document.getElementById("increase").addEventListener("click", increase);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("decrease").addEventListener("click", decrease);

function increase() {
    let currentCount = document.getElementById('output').textContent;
    document.getElementById('output').textContent = Number(currentCount) + 1;
};

function decrease() {
    let currentCount = document.getElementById('output').textContent;
    document.getElementById('output').textContent = Number(currentCount) - 1;
};

function reset() {
    let currentCount = 0;
    document.getElementById('output').textContent = currentCount;
};

