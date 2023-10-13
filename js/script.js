const frigorifero =
[
    'banana',
    'mela',
    'pera',
    'ciliegia',
    'arancia',
    'mandarino',
    'cocomero',
    'limone',
    'fragola'  
];

console.log(frigorifero);

frigorifero.push('pesca');

console.log(frigorifero);

let searchEl = false;

for(let i = 0; i < frigorifero.length; i++)
{
    if(frigorifero[i] === 'cocomero')
    {
        searchEl = true;
    }

};

if(searchEl)
{
    console.log("Trovato! Devo solo preparare il cocktail.")
}
else
{
    console.log("Oh no, devo uscire a comprare il cocomero!")
}


const btn = document.querySelector('button');
const inputEl = document.getElementById('data');
const resultEl = document.querySelector('.alert');

btn.addEventListener('click',
function()
{
    // inputEl.value
});


//utility
function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
  