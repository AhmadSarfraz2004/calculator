let input = document.getElementById('inpBx');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }

    })
})

document.addEventListener('keydown', (e) => {
    const allowedKeys = '0123456789+-*/.%';

    if (allowedKeys.includes(e.key)) {
        string += e.key;
        input.value = string;
    } 
    else if (e.key === 'Enter') {
        try {
            string = eval(string);
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    } 
    else if (e.key === 'Backspace') {
        string = string.slice(0, -1);
        input.value = string;
    } 
    else if (e.key === 'Escape') {
        string = "";
        input.value = string;
    }
});
