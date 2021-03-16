const input = document.querySelector('input');
const button = document.querySelector('button');

const run = (input) => {console.log(input.value)}

button.addEventListener('click', function() {
    run(input);
});