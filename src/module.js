console.log('Module.js')

async function start() {
    return await Promise.resolve('async worki ')
}

start().then(console.log)