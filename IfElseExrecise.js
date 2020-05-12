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
    /*1.	Write a console app that takes 2 numbers entered by the user and prints the larger number to the console
2.	Write a console app that takes 2 numbers entered by the user and prints them to the console in order from largest to smallest
3.	Same as 2 but from smallest to largest.
*/
    let userInput1 = await askQuestion("Enter the first number: ");
    let number1 = parseInt(userInput1);
    let userInput2 = await askQuestion("Enter the second number: ");
    let number2 = parseInt(userInput2);
   
    console.log("the greater number among both is");
    if(number1>number2){
        console.log(number1);
    }else{
        console.log(number2);
    }
    
    let userInput3 = await askQuestion("Enter the  number: ");
    let number3 = parseInt(userInput3);
    let userInput4 = await askQuestion("Enter the  number: ");
    let number4 = parseInt(userInput4);
        if(number3>number4){
        console.log("the greater number to smaller number among both is");
        console.log(number3);
        console.log(number4);

    }else{
        console.log("the Big number to smaller number among both is");
        console.log(number4);
        console.log(number3);
    }
   

    let userInput5 = await askQuestion("Enter the  number: ");
    let number5 = parseInt(userInput5);
    let userInput6 = await askQuestion("Enter the  number: ");
    let number6 = parseInt(userInput6);
    
    if(number5<number6){
        console.log("the smaaller number to greater number among both is");
        console.log(number5);
        console.log(number6);

    }else{
        console.log("the Smaller number to greater number among both is");
        console.log(number6);
        console.log(number5);
    
    }
}

Program().then(() => {
    process.exit(0);
});
