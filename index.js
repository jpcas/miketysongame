let  readlineSync  =  require('readline-sync');

let userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + ' Welcome to Mike Tyson KO!');

const player = () => {
   
let playerOptions = ["Ernie", "Will", "Sara", "Katie", "Daniel", "Cece" ];
let option = readlineSync.keyInSelect( playerOptions,"Who would you like to pick to box Mike Tyson?" );
}

const test = () => {
    let option = readlineSync.question( "Which punch would you like to go with? options: bolo punch, jab, hook, uppercut, cross, special punch, overhand, magic combo, time out: [Type in lowercase your punch] " );

    switch(option) {
        case "magic combo":
            console.log( "ouch man! That hurt a lot!" );
            return test()
        break;
        case "bolo punch":
            console.log( "that felt like a tickle....." );
            return test()
        break;
        case "overhand":
            console.log( "that felt like a tickle....." );
            return test()
        break;
        case "special punch":
            console.log( "zzzzzz1,2,3,4,5,6,7,8,9 and.......... he is up!" );
            return test()
        break;
        case "jab":
            console.log( "whoooop! Missed! 🙈" );
            return test()
        break;
        case "hook":
            console.log( "BOOM, 1,2,3,4........ Mike is up!" );
            return test()
        break;
        case "uppercut":
            console.log( "My abuela is faster than you 👵" );
            return test()
        break;
        case "cross": 
            console.log( "🥊zzzzzzzzzzzzzz KO! YOU WIN! " )
        case "time out":
            console.log( "Fool! There are no time outs in Boxing! You lose!" ); 
        case "special punch":
            console.log( "Booooommmmmm 🌙😴 You got KO'd! You Lose!" );  
        }
}

const playAgain = () => {
    let playAgain = readlineSync.question('Do you want to play again? y || n \n');
    playAgain = playAgain.toLocaleLowerCase();
    if (playAgain === 'y') {
       let option = readlineSync.question( "May I have your name?" );
       console.log('Hi ' + userName + ' Welcome to Mike Tyson KO!');
       player();
       test();


    }
    else (playAgain === 'n'); {
       let option = readlineSync.question( 'Thanks for playing! Bye!' );
    }
    }


     

player()
test()
playAgain()




