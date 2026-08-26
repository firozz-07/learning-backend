const sum=(req,res)=>{
  const body=[];
req.on('data',(chunk)=>{
  body.push(chunk);
});
req.on('end',()=>{
  const bodystr=Buffer.concat(body).toString();
  const params=new URLSearchParams(bodystr);
  const data=Object.fromEntries(params);
  const result=Number(data.first)+Number(data.second);
  res.setHeader('Content-type','text/html');
  res.write(`<html> <body> <h1>your result is ${result} !!</h1> <a href="/">Go to home</a></body></html>`);
  return res.end();
});

}
exports.sum=sum;