const input: HTMLInputElement | null = document.querySelector('input');
const button: HTMLButtonElement | null = document.querySelector('button');

const run = (input:HTMLInputElement) => {console.log(input.value)}

// !을 붙여 null이 될 수 있음 방지
button!.addEventListener('click', function() {
    run(input!);
});
