const os = require('os')

const user = os.userInfo()
console.log(`Current user info:`)
console.log(user)

console.log(`The current user id is ${user.uid}`)

// method return system uptime in secs
console.log(`The system uptime is ${os.uptime}`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)
console.log(os.hostname())