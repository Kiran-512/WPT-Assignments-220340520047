const express = require("express")
const app = express();

app.use(express.static("sf")) //  

app.get("/login",(req,res)=>{

    console.log("Testing.... login URI is requested... ON form submit since action is login and method is get")

    let empid = req.query.empid; // here empid is the name given for an input in the html
    let pass = req.query.password; // here "password" is the name given to the password inpout in html form 

    //So upon requesting this URI, when user submit the form url becomes  "http://localhost:1200/login?empid=11&password=12" and then the params are read by the above statements

    //Some stupid logic here..
    let loginStatus = {status : false, message : "Login failed!" }

    if(empid === pass){
        loginStatus.status =true;
        loginStatus.message = "Login successfull"
    }
    res.send(loginStatus.message) // Login failed!

    // res.send(loginStatus)// {"status":true,"message":"Login successfull"} // Since AJAX is not used this will be directly open up in the new page it will load all the page

    //res.send(JSON.stringify(loginStatus)) NodeJS automatically converts object into JSON string while responding to the request from client

    // console.log("login logic is running.. for the emp with empID " + req.query.empid)
    // res.send("The empID is " + req.query.empid + " The password is " + req.query.password)
    })

app.get("/getEmpDetails",(req,resp)=>{
    let input = req.query.empid; // this input is in the string format 
    let output;
    console.log(input, typeof input)
    input = parseInt(input);
    console.log(input, typeof input)
    switch (input) {
        case 1:
            console.log("its here on 1")
        output = {status:true, empDetails :{empid:1,ename:"Kiran",mobNo:9829398379}};
        break;
        case 2:
            console.log("its here on 2")
            output = {status:true, empDetails :{empid:2,ename:"Akshay",mobNo:9829398379}};
        break;
        case 3:
            output = {status:true, empDetails :{empid:3,ename:"Pranit",mobNo:9829398379}};
        break;
        case 4:
            output = {status:true, empDetails :{empid:4,ename:"Shubham",mobNo:9829398379}};
        break;
        default:
                output = {status:false, empDetails :{empid:0,ename:"",mobNo:0}}
            break;
    }
    resp.send(output.empDetails.empid + "  " + output.empDetails.ename + "  " + output.empDetails.mobNo)

    // resp.send(output) -> sends JSON string of an Object
})    
    //created server with the below syntax :1200 is port_Number
        app.listen(1200,()=>{
            console.log("server is listening at port 1200...")
        })
