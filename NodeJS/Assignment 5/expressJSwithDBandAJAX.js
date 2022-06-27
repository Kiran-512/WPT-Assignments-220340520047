//import express module after installation
const Xexpress = require("express")
let app = Xexpress();

//import mysql2 module after installation
const xmysql = require("mysql2")

//static folder
app.use(Xexpress.static("sf"));

let dbParams ={ //hudappa
    host : 'localhost',
    user :'root',
    database:'pleasework',
    port:'3306',
    password:'cdac',
}

const conn = xmysql.createConnection(dbParams) // database connection established

//create server with express JS
app.listen(909,()=>{
    console.log("Server is listening at port no 909...")
})

//login URI without AJAX 
app.get("/login",(req,res)=>{

    let uid = req.query.userid;
    let pass = req.query.password;

    let loginstatusOP = { status: false, message: "Invalid userID or Password!" };

    conn.query("select * from cusers where userid=? and password =?",[uid,pass],
    (err,rows)=>{
        if(err){
            console.log("ERROR occured")
            console.log(err)
        }
        else{
            if(rows.length>0){
                loginstatusOP.status = true;
                loginstatusOP.message="Login Successfull!"
            }
        }
        res.send(loginstatusOP.message)// as its used without ajax so response will be send on new page and page will refresh at client machine
    })
})

//Update Password with AJAX in jquery
app.get("/updatePass",(req,res)=>{

    let oldPass = req.query.oldpass;
    let uid = req.query.userID;
    let newPass = req.query.newpass;

    let loginstatusOP = { status: false, message: "Invalid Password, Please enter the correct one!" };

    conn.query("update cusers set password=? where userid =? and password =?",[newPass,uid,oldPass],
    (err,res1)=>{
        if(err){
            console.log("ERROR occured")
            console.log(err)
        }
        else{
            if(res1.affectedRows===1){
                loginstatusOP.status = true;
                loginstatusOP.message="PassWord Updated Successfully!"
            }
        }
        res.send(loginstatusOP)// as its used without ajax so response will be send on new page and page will refresh at client machine
    })
})



