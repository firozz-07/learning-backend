const {handler}=require('./handler');
const {sum}=require('./sum');
const http=require('http');
const server=http.createServer(handler);
const port=3001;
server.listen(port,()=>{
  console.log("server is running ");
});