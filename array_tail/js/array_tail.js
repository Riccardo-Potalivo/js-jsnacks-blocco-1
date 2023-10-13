let arrayContainer = [];

const btn = document.querySelector('button');
const inputEl = document.getElementById('data');
const resultEl = document.querySelector('.alert');

btn.addEventListener('click',
function()
{
    resultEl.className = 'alert d-none';

    arrayContainer = [];

    let numeroInserito = parseInt(inputEl.value);
    // let numeroInserito = parseInt(inputEl);
    
    
    for(let i = 0; i < numeroInserito; i++)
    {
        let randomNumber = getRndInteger(1, 100);
        
        arrayContainer.push(randomNumber);
        console.log(randomNumber)
    };

    console.log(arrayContainer);

    console.log(arrayContainer.slice(-5))

    resultEl.innerText = arrayContainer.slice(-5);
    resultEl.classList.remove('d-none');

    
});





//utility
function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
  