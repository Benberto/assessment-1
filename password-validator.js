const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let storedPassword = 'DevMountain'

reader.question("Hello! Please enter your password. ", function(input){
 data = input.split(' ');

 password = data[0];

 if(password.length < 10 || password != storedPassword){
 console.log('Failure!')
 } else if(password === storedPassword){
   console.log('Success!')

 }



reader.close()



});