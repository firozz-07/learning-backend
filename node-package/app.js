const http=require('http');
server=http.createServer((req,res)=>{
console.log("sherr");
});
const Port=3000;
server.listen(Port);