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
Write a console app that counts the number of times an element appears in an array.
*/
   let Array1=["me","you","i","we","we","me"];
   console.log(Array1);
   for(let i=0;i<Array1.length;i++)
   {
    let ArrayValue=Array1[i];
     for(j=1;j<Array1.length;j++){
         let M=0;
         if(ArrayValue == Array1[j]){
            M++;
            console.log(`The element ${Array1[j]} appears ${M} times in this Array`)
         }else{

         }
     }

    }
}


Program().then(() => {
    process.exit(0);
});
