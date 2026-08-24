const http=require('http');
const server=http.createServer((req,res)=>{
  res.setHeader('Content-type','text/html');
  res.write(`<html><head><title>sherrrr</title></head><body><h1>first response</h1></body></html>`);
  res.end();
});
const PORT=3000;
server.listen(PORT,()=>{console.log("server started");});
