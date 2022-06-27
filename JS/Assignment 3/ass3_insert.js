let datab={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"Wpt",
    port:3306
};
const mysql=require("mysql2");
const con=mysql.createConnection(datab);
let resourceId=111;
let resourcename="done";
let status=true;
con.query("insert into resource (resourceId,resourcename,status) values (?,?,?)",[resourceId,resourcename,status],(err,res)=>{
    if(err){
        console.log("Error while inserting");
    }else{
        console.log("Rows Inserted");
    }
});