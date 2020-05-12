
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question){
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program(){
    /*Write a console app that takes strings from the user and
    Adds them to an array until the user enters a duplicate entry. 
     Then stop accepting user input and print each element in the array to the console
*/ 
let Students=["Andy","Lisa","Charles","David"];
let NewStudent=await askQuestion("Input a New Student to add to Array Students:  ");
let i=0;
  while(i<Students.length)
  {
      for(let j=0;j<Students.length;j++)
      {
   if(NewStudent == Students[j])
   {
     console.log("This student Already exists");
     
   }         else
       {
           Students.push(NewStudent);
           console.log("New students added below:");
           console.log(Students);
       }
       i++;
   }}
   
}

Program().then(() => {
    process.exit(0);
});