// os module. used to interact with os

const os = require('os') //importing built-in os module

//accesing os module
//user info
const user = os.userInfo()
console.log(user);

console.log(`The system has been up for ${os.uptime()} seconds!`);

const currentOS = {
    type: os.type(),
    release: os.release(),
    totalMen: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);