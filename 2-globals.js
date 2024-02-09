// __dirname -path to current directory
// __filename -file name 
// require -function to use modules
// module -info about current module(file)
// process -info about env where the app is being executed

console.log(__filename);
setInterval(()=>{
    console.log('hello')
}, 1000);

// const calPower = (power)=>{
//     return power**2;
// }

// console.log(calPower(3));