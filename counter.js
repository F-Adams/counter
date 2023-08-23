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