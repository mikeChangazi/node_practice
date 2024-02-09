//asynchronous

const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf8', (err, result )=>{
    if(err){
        console.log(err)
    }
    const first = result //stores rresult of first file into variable 'first'
    //reading the second file. has to be done inside the first callback 
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        //check for error
        if(err){
            console.log(err)
        }
        const second = result // stores result of second file into variable 'second'
        //writing to the file.. has to be done inside the read callback function
        writeFile('./content/resultAsync.txt', `Here is the result: ${first}, ${second}`,
         (err, result )=>{
            //checks for error
            if(err){
                console.log(err)
            }
            console.log(result)
        }) 
    })
    
})