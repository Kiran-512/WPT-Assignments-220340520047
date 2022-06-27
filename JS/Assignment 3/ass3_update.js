let datab={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"Wpt",
    port:3306
};
const mysql=require("mysql2");
const con=mysql.createConnection(datab);
let status=false;
let resourcename="ok";
con.query("update resource set status=? where resourcename=?",[status,resourcename],(err,res)=>{
    if(err){
        console.log("Erroe while updating");
    }else{
        if(res.affectedRows===0){
            console.log("Zero rows affeted update failed");
        }else{
            console.log("Update successfull");
        }
    }
});