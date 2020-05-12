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
    /* 3.	Write a console app that prints the elements of an array in reverse.
    4.	Write a console app that prints the elements of an array that begin with the letter a
     (hint, a string is an array of characters 
        so you can access the first character the same way you would access the first 
        element in an array)*/
        let Students=["dave","chris","tom","Jill","anna","alison","Alison"];
        console.log("PRINTING REVERSE ARRAY USING FOR LOOP");
        for (let i=Students.length-1;i>=0;i--)
        {
            console.log(Students[i]);
              }
              console.log("PRINTING REVERSE ARRAY USING WHILE LOOP");
              let j=Students.length-1;
        while(j>=0)
        {
            console.log(Students[j]);
            j--;
              }

console.log("PRINTING ARRAY ELEMENTS STARTING WITH LETTER A,a USING FOR LOOP");
for(let k=0;k<Students.length;k++)
{
    let eachStudent=Students[k];
    if(eachStudent[0]=="a")
    {
    console.log(eachStudent);
    }else{}
    if(eachStudent[0]=="A")
    {console.log(eachStudnet);
    }else{}
}



}

Program().then(() => {
    process.exit(0);
});



