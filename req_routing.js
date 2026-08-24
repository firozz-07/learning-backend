const http=require('http');
const server=http.createServer((req,res)=>{
  if(req.url==='/'){
  res.setHeader('Content-type','text/html');
  res.write(`<html><head><title>sherrrr</title></head><body><h1>welcome to the home</h1></body></html>`);
  return res.end();
  }
  else if(req.url==='/products'){
  res.setHeader('Content-type','text/html');
  res.write(`<html><head><title>sherrrr</title></head><body><h1>browse our products</h1></body></html>`);
  return res.end();
  }
  else{
     res.setHeader('Content-type','text/html');
  res.write(`<html><head><title>sherrrr</title></head><body><h1>404</h1></body></html>`);
  return res.end();
  }
});
const PORT=3000;
server.listen(PORT,()=>{console.log("server started");});
