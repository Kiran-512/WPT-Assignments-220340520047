let dbparams =
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'pleasework',
    port: 3306
};

const mysql = require('mysql2'); //fate
const con = mysql.createConnection(dbparams);//fate  

const express = require('express');
const app = express();
app.use(express.static("sf"));

app.get("/getItem", (req, resp) => {
    let input = req.query.itemno;
    console.log(input);
    let output = { itemnofoundstatus: false, itemdetails: {itemno:-1,itemname:"default",price:0 } };

    //single select query as itemno is primary key in table
    con.query('select * from item where itemno =?', [input], 
    (error, row) => {
        if(error){
            console.log(error)
        }
        else{//[{itemno:1,itemname:"coffe bag",price:100}]
            if (row.length == 1) {
                output.itemnofoundstatus = true;
                output.itemdetails = row[0];
            }
            console.log(output,typeof output);
            resp.send(output);
        }
    }
    );
});

app.get("/addItem", (req, resp) => {

    //temporary
    //later on we will see how to read the complete item object itself from http request
    let input = { itemno: req.query.x, itemname: req.query.y, price: req.query.z };
    console.log(input);
    let output = false;

    con.query('insert into item(itemno,itemname,price) values (?,?,?)',
        [input.itemno, input.itemname, input.price],
        (error, whathappenedtoinsert) => {
            if (error) {
                console.log(error);
            }
            else if (whathappenedtoinsert.affectedRows > 0) {
                output = true;
            }
            resp.send(output);
        }
    );

});

app.get("/updateitem", (req, resp) => {

    let output = false;
    let input = {
        itemno: req.query.itemno,
        itemname: req.query.itemname, 
        price: req.query.price
    };
    console.log(input)
    con.query('update item set itemname = ?,price =? where itemno=?',
        [input.itemname, input.price, input.itemno],
        (error, whathappenedtoinsert) => {
            if (error) {
                console.log(error)
                //when you dont have data why problem is there collect data first.
            }
            else if(whathappenedtoinsert.affectedRows == 0){
                console.log("ERROR update statement failed due to some reason..")
            }
            else if (whathappenedtoinsert.affectedRows > 0)
                output = true;
                console.log(output)
            resp.send(output);
        }
    );
});

app.get("/getAllItems", (req, resp) => {

    con.query('select * from item', [], (error, rows) => {
        resp.send(rows);//this will return all the rows of the table
    }
    );
});

app.listen(900,  ()=>{
    console.log("server listening at port 900...");
});