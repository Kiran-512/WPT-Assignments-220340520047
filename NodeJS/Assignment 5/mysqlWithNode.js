const xmysql = require("mysql2")

let dbparams = { //hudappa
    host : 'localhost',
    user :'root',
    database:'pleasework',
    port:'3306',
    password:'cdac',
}

const conn = xmysql.createConnection(dbparams); // Connection established

//assuming these values are coming from client
let userid = 'Kundan';
let password = 'myPass';

//to insert the user id and password in cusers table 
conn.query('insert into cusers(userid,password) values (?,?);',[userid,password],
(err,res1)=>{
    if(err){
        console.log("Error has occured, Let's C")
        console.log(err)
    }
    else{
        console.log(res1.affectedRows)    
    }
})

userid = "a";
password ="Welcome@123" // update successfull for user id 'a'
// password ="b" // update successfull for user id 'a'

// userid ="U101" //Update failed as no such userID exists in the table so the affectedRows === 0

conn.query("update cusers set password=? where userid=?",[password,userid],
(err,res1)=>{
    if(err){
        console.log("Error has occured")
    }else{
        console.log(res1)
        if(res1.affectedRows === 0){
            console.log("Update failed")
        }else{
            console.log("Update successfull!")
        }
    }
})

/* ==> console.log(res1)

ResultSetHeader {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  info: 'Rows matched: 1  Changed: 1  Warnings: 0',
  serverStatus: 2,
  warningStatus: 0,
  changedRows: 1
}
Update successfull!

*/

// Query on primary key is single select and query not on primary key is multiselect 

//SINGLE SELECT 

userid = 'a'
conn.query("select * from cusers where userid =?",[userid],
    (err,row)=>{
        if(err){
            console.log(err)
        }
        else{
            if(row.length>0){
                console.log(row[0].userid + " " + row[0].password) // a d
            }
            else{
                console.log("No such user with userid : " + userid) 
            }
        }
    }
)

password = "d";
conn.query("select * from cusers where password = ?",[password],
    (err,rows)=>{
        if(err){
            console.log("Failed to reach database")
        }
        else{
            console.log(rows) // [ { userid: 'c', password: 'd' } ]
        }
})

// MULTI SELECT

//lets make two USER-ids having same password to demonstrate the multi select
userid = "a"
password = "d"

conn.query("update cusers set password=? where userid=?",[password,userid],
(err,res1)=>{
    if(err){
        console.log("Error has occured")
    }else{
        console.log(res1)
        if(res1.affectedRows === 0){
            console.log("Update failed")
        }else{
            console.log("Update successfull!")
        }
    }
})

// cusers table is 
/*
mysql> select * from cusers;
+--------+----------+
| userid | password |
+--------+----------+
| a      | d        |
| c      | d        |
| e      | f        |
| x      | z        |
+--------+----------+
4 rows in set (0.00 sec)

*/
password= "d";

conn.query("select * from cusers where password=?",[password],
(err,rows)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(rows)
        console.log(rows[0]) // { userid: 'a', password: 'd' }
        console.log(rows[1]) // { userid: 'c', password: 'd' }
        console.log(rows[2]) // undefined
    }
})
/*
[ { userid: 'a', password: 'd' }, { userid: 'c', password: 'd' } ]
*/


//Multi select with the for loop
//BDW using for loop in node is pathetic job ..just give the op to the presentation layers for processing and let them use for loop

conn.query("select * from cusers where password=?",[password],
(err,rows)=>{
    if(err){
        console.log(err)
    }
    else{
        if(rows.length>0){
            console.log("userid  password")                
            for (let index = 0; index < rows.length; index++) {
                console.log(rows[index].userid+"        " +rows[index].password)                
            }
        }
        else{
            console.log("no rows fetched from Database")
        }
    }
})
/*
userid  password
a        d
c        d
*/


// We can do the delete also in the same way but delete is not recommended as we update the status to inactive instead of deleting any record

