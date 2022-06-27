const express=require("express");
const app=express();
app.use(express.static("cf"));
let datab={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"Wpt",
    port:3306
};
const mysql=require("mysql2");
const con=mysql.createConnection(datab);
app.get("/Accdetails",(req,res)=>{
    let input=req.query.accno;
    let datafound={status:false,data:[]};

    con.query("select * from bank where accno=?",[input],(err,rows)=>{
        if(err){
            console.log("error occured while fetching database");
        }else{
            if(rows.length>0){
                console.log("Hello here I am");
                // console.log(rows[0].accno+" "+rows[0].balance+" ");
            datafound.status=true;
            datafound.data=rows; 
             }
        }
        res.send(datafound);
    });
});
app.listen(900,function(){
    console.log("server running at port 900")
});