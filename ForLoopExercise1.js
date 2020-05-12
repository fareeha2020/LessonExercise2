
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
    /*
1.	Write a console app that writes the numbers from 1 to 7 to the console
2.	Write a console app that writes even numbers from 2 to 8 (inclusive) to the console (hint, you will need to not use the increment operator)

*/
    // Your Code Goes Here...
    console.log("For loop numbers 1 to 7");
   for(let Num=1;Num<8;Num++)
   {
       console.log(Num);
}
let Num=1;
console.log("While loop numbers 1 to 7");
while(Num<8){
console.log(Num);
Num++;
}
console.log("FOR LOOP even numbers from 2 to 8");
for (let i=1;i<10;i++)
{
 if(i%2 === 0){
    console.log(i);
    }
   }
   console.log("WHILE LOOP even numbers from 2 to 8");
   let j=1;
while(j<10)
{
 if(j%2 === 0){
    console.log(j);
    }
    j++;
   }

}
Program().then(() => {
    process.exit(0);
});

