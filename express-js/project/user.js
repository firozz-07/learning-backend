const express=require('express');
const user = express.Router();
user.use((req,res,next)=>{
res.send(`
    <html>
        <body>
            <h1>Add Two Numbers</h1>

            <form action="/sum" method="POST">
                <input type="number" name="num1" placeholder="Enter first number">
                <br><br>

                <input type="number" name="num2" placeholder="Enter second number">
                <br><br>

                <button type="submit">Add</button>
                <button type="submit" formaction="/substract">substract</button>
            </form>
        </body>
    </html>
`);
})
module.exports = user;