const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let storedPassword = 'DevMountain23' // added for extra validator. Program will now check for password length and match

const failureArt = `
_____  ____ ____ _     __ __ ____    ___ __ 
|     |/    |    | |   |  |  |    \  /  _|  |
|   __|  o  ||  || |   |  |  |  D  )/  [_|  |
|  |_ |     ||  || |___|  |  |    /|    _|__|
|   _]|  _  ||  ||     |  :  |    \|   [_ __ 
|  |  |  |  ||  ||     |     |  .  |     |  |
|__|  |__|__|____|_____|\__,_|__|\_|_____|__|
                                            
`

const successArt = `
______                                  _ 
/ _____)                                | |
( (____  _   _  ____ ____ _____  ___  ___| |
\____ \| | | |/ ___/ ___| ___ |/___)/___|_|
_____) | |_| ( (__( (___| ____|___ |___ |_ 
(______/|____/ \____\____|_____(___/(___/|_|
                                          
`


reader.question("Hello! Please enter password. ", function(input){
 data = input.split(' ');

 password = data[0];

 if(password.length < 10 || password != storedPassword){
 console.log(failureArt)
 } else if(password.length > 10 || password === storedPassword){
   console.log(successArt)

 }



reader.close()



});