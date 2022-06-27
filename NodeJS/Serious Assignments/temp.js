let dbparams =
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'test',
    port: 3306
};

const mysql = require('mysql2'); 
const con = mysql.createConnection(dbparams);//connection set

const express = require('express');
const app = express();
app.use(express.static("sf"));

app.get('/getALL',(req,resp)=>{

    con.query("select * from items",[],
    (err,rows)=>{
    if(err){
        console.log(err)
    }else{
        console.log(rows)
        resp.send(rows)
    }
})    

})


app.listen(8081,()=>{
console.log("server is listening at port 8081...")
})