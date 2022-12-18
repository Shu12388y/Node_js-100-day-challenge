const hhtp=require('http')



const server=hhtp.createServer((req,rep)=>{
    console.log(req)
})

server.listen(3000)