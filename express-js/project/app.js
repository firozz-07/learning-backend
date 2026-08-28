const express=require('express');
const user=require('./user');
const sum=require('./sum');
const substract=require('./substract');
const app=express();
app.use(express.urlencoded({ extended: true }));
app.use('/user',user);
app.use('/sum',sum);
app.use('/substract',substract);

app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to my calculator</h1>
        <a href='/user'>Go to /user to use the calculator</a>
    `);
});

const port=3000;
app.listen(port);