function guessNumber() {

    const random = Math.floor(Math.random() * 100) + 1;
    const number =prompt("Guess a number from 1 to 100:");
    if(number == random) {
        alert('Matched');
    }
    else{
        alert('Not matched')
    }

  }
guessNumber();  
