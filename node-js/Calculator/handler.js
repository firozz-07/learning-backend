const {sum}=require('./sum');
const handler=(req,res)=>{
  if(req.url==='/'){
  res.setHeader('Content-type','text/html');
  res.write('<html> <body> <h1>welcome to the home page !!</h1> <a href="/calculator">Go to calculater</a></body></html>');
  return res.end();
  }
  else if(req.url==='/calculator'){
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>calculator</title>');
    res.write('</head>');
    res.write('<body>');
  res.write('<form action="/calculate-result" method="POST">');
    res.write(' <input type="text" placeholder="Enter a num" name="first"><br>');
    res.write(' <input type="text" placeholder="Enter a num" name="second"><br>');
    res.write('<br><button>Sum</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  else if(req.url==='/calculate-result' && req.method==="POST"){
    sum(req,res);
  }

}
exports.handler=handler;