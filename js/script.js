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
]

console.log(frigorifero)



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
  