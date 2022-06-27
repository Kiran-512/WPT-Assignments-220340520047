const express = require("express")
let app = express();

app.use(express.static("staticResource"));

//URI - Unifrom resource  Identifier
//URL - Unifrom resource  locator
app.get("/login",(req,resp)=>{

    let username = req.query.username;
    console.log(username, typeof username)

    let password = req.query.pass;
    console.log(password,typeof password)

    let output = { status:false, message : "login failed"}

    if(username == password ){
        output.status = true;
        output.message ="Login Successfull";
    }
    console.log(output)
    resp.send(output);
})

app.get("/MathOperations",(req,res)=>{

    console.log("MathOperations working fine too..!")

    let num1 = req.query.num1;
    console.log(num1,typeof num1)

    let num2 = req.query.num2;
    console.log(num2,typeof num2)

    let symbol = req.query.symbol;
    console.log(symbol,typeof symbol)

    let output = {status:false , result : 0}

    if(symbol == "+"){
        output.status = true;
        output.result = parseInt(num1) + parseInt(num2);
        console.log("Addition done " +output.result)
    }else if(symbol == "-"){
        output.status = true;
        output.result = parseInt(num1) - parseInt(num2);
        console.log("substraction done" + output.result)
    }
    res.send(output) // this output is passed as argument in success in ajax to OPfromServer variable
})

app.listen(1000,()=>{

    console.log("Server is listening at port no 1000....")
})

