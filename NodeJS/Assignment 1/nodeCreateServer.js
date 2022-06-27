/*
Read the parameters from the https request and show back the params in response
params are 
empno
empname
deptid
*/

const xhttp = require('http');
let xurl = require("url")

xhttp.createServer((req,res)=>{
//this function will get called when th e request is made from the client side on port no 99
    console.log("Server i listening at port 120...")    
    let params = xurl.parse(req.url,true).query // conversion of requested URL by client from string to object, so that we can read the properties of that object for our logic on server side

    console.log(params , typeof params) // object

    let msg = params.empno + " " + params.ename + " "+params.deptid
    //some logic goes here...

    res.write("Kiran")
    res.end()
}).listen(120);

//http://localhost:120/?empno=101&ename=Kiran&deptid=10 

//101 Kiran 10
