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

// app.post("/getdata",())
app.get("/getdata",(req,resp)=>{
let datafound={status:false,data:[]};
    let pincode=req.query.pincode;
    console.log(pincode);
con.query("select areaname ,pincode from pinarea where pincode=?",[pincode],(err,rows)=>{
    if(err){
        console.log("Error Occured");
    }else{
        if(rows.length>0){
            console.log("Hello here I am");
            console.log(rows[0].areaname+" "+rows[0].pincode+" ");
        datafound.status=true;
        datafound.data=rows; 
    }  
    }
    console.log(datafound.status)
    resp.send(datafound);
});

    //   console.log("Working");  resp.send("working");

});
app.listen(900,function(){
    console.log("server running at port 900")
});