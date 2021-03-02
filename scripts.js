let state = true;
document.querySelector('#example-1 button').addEventListener('click', function () {
    state = !state;
    document.querySelector('#example-1 h1').innerText = state ? "On" : "Off";
});

let counter = 0;
document.querySelector('#example-2 button').addEventListener('click', function () {
    counter++;
    document.querySelector('#example-2 h1').innerText = counter;
});


let name = "";
document.querySelector('#example-3 input').addEventListener('input', function () {
    name = this.value.trim();
    document.querySelector('#example-3 h1').innerText = `Your name is "${name}"`;
});