const buttons = document.querySelectorAll('button')

const input = document.querySelector('input.a')
const input1 = document.querySelector('input.b')
const input2 = document.querySelector('input.c')
const input3 = document.querySelector('input.d')

const kh = ""
let a = 0;
let b = 0;


for(button of buttons){
    button.addEventListener('click',(e) => {
        const abc = e.target.innerText

        if(abc != '+','-','X','/','='){
            input.value = abc;
            input2.value = abc;
        }

        if(abc === 'C'){
            input.value = kh;
            input2.value = kh;
            input1.value = kh;
            input3.value = kh;
        }

        else if(abc === '+' || abc === '-' || abc === 'X' || abc === '/' ){
            input1.value = abc ;
        } 

        else if(abc === '='){
            if(input1.value === '+'){
                a = parseFloat(input.value);
                b = parseFloat(input2.value);

                let c = a+b;
                input3.value = c ;

            }
            else if(input1.value === '/'){
                a = parseFloat(input.value);
                b = parseFloat(input2.value);

                let c = parseFloat(a/b);
                input3.value = c ;

            }
            else if(input1.value === '-'){
                a = parseFloat(input.value);
                b = parseFloat(input2.value);

                let c = parseFloat(a-b);
                input3.value = c ;

            }
            else if(input1.value === 'X'){
                a = parseFloat(input.value);
                b = parseFloat(input2.value);

                let c = parseFloat(a*b);
                input3.value = c ;

            }

        }

    })
}




