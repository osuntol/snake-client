const net = require("net");

const connect =  function(){
 
  const conn =  net.createConnection({
    host: '165.227.47.243',
    port: 50541
})

conn.on('connect',()=>{
  console.log('welcome to the server!')
})

conn.on('timeout',()=>{
  console.log('you ded cuz you idled')
})

conn.setEncoding('utf8')

return conn
}

console.log('connecting....')
connect()