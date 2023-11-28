# projects related to DOM

## projet link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## project 1
```javascript
console.log("kushal")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey')
    {
      body.style.backgroundColor = e.target.id; // 'grey'
    }
    if(e.target.id === 'white')
    {
      body.style.backgroundColor = e.target.id; // 'white'
    }
    if(e.target.id === 'blue')
    {
      body.style.backgroundColor = e.target.id; // 'gbluerey'
    }
    if(e.target.id === 'yellow')
    {
      body.style.backgroundColor = e.target.id; // 'yellow'
    }
    if(e.target.id === 'purple')
    {
      body.style.backgroundColor = e.target.id; // 'purple'
    }
  });
});
```

## project 2 solution
```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const hight = parseInt(document.querySelector('#hight').value)

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const hight = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (hight === '' || hight < 0 || isNaN(hight)){
    results.innerHTML = `please give a valid hight ${hight}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((hight * hight)/10000)).toFixed(2)
    // show the result
    results.innerHTML = `<span>${bmi}</span>`
  }
  
  const bmi = (weight / ((hight * hight)/10000)).toFixed(2)
  const sugg = document.querySelector('#suggetion');
  if ( bmi < 18.6){
    sugg.innerHTML = 'under weight';
  } else if ( bmi < 24.9)
  {
    sugg.innerHTML = 'normal range';
  } else {
    sugg.innerHTML = 'over weight';
  }
});

```

## project 3 solution
```javascript
const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```

## project 4 solution

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const UserInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevguess = []
let numGuess = 1

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(UserInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a valid number')
  } else if(guess < 1){
    alert('please enter a number more then 1')
  } else if(guess > 100){
    alert('please enter a number less then 100')
  } else {
    prevguess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`game Over. random number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`you guessed it right`)
  } else if (guess < randomNumber){
    displayMessage(`number is TOOO low`)
  } else if (guess > randomNumber){
    displayMessage(`number is TOOO high`)
  }
}

function displayGuess(guess){
  UserInput.value = ''
  guessSlot.innerHTML += `${guess},`
  numGuess ++;
  remaining.innerHTML = `${12 - numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  UserInput.value = '';
  UserInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newgame">Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newgame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess}`;
    UserInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  })
}

```