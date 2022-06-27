/*
Learnings :
To check if Its NaN opr Not use function => isNaN(value)
NaN is not equal to itself, NaN != NaN will always return true

*/

console.log(NaN==NaN)//false
console.log(NaN===NaN)//false
console.log(NaN!=NaN)//true
console.log(NaN!==NaN)//true

    //1.	There is a predefined array of numbers of size 10.

    //2.	All buttons disabled in the beginning
        let x = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  
        const msg = document.getElementById("wh");
  
        function printOddElemens() {
          let content = "";
          x.forEach((value, ind) => {
            if (ind % 2 !== 0) {
              content += value + " ";
            }
          });
          return content;
        }
  
        //setting up the blur event on textbox
          /*
          a.	On blur on the textbox 
          i.	Check the number whether it is present in the array or not
          ii.	If present
          1.	Enable the buttons
          a.	Edit
          b.	Delete
          2.	Disable the button
          a.	Add
          b.	View all
          c.	Show odd positions.
          iii.	If not present
          1.	Enable only add button
          */
        const t1 = document.querySelector("#t1");
        t1.addEventListener("blur", () => {
          // console.log("blur event on textbox")
          let numberGiven = document.getElementById("t1").value;
          numberGiven = parseInt(numberGiven);
          let found = x.includes(numberGiven);
          console.log(found);
          // console.log(numberGiven)
          if (found) {
            document.querySelector("#add").disabled = true;
            document.querySelector("#edit").disabled = false;
            document.querySelector("#delete").disabled = false;
            document.querySelector("#viewall").disabled = true;
            document.querySelector("#viewOddPositions").disabled = true;
            msg.innerText = " Number is already present";
          } else {
            document.querySelector("#add").disabled = false;
            document.querySelector("#edit").disabled = true;
            document.querySelector("#delete").disabled = true;
            msg.innerText =
              "Number is not present, you can add this number by using add";
          }
        });
        /*
              b.	When add button is clicked
              i.	Check in the array if number is present or not present
              ii.	If not present
              1.	Add to the array
              2.	Disable all the buttons
              iii.	If present
              1.	Don’t add to the array
              2.	Disable all buttons 
          */
        const add = document.querySelector("#add");
        add.addEventListener("click", () => {
          let numberGiven = document.getElementById("t1").value;
          numberGiven = parseInt(numberGiven);
          if (!isNaN(numberGiven)){
            x.push(numberGiven);
            console.log(numberGiven + " added to array");
            document.querySelector("#edit").disabled = true;
            document.querySelector("#delete").disabled = true;
            document.querySelector("#add").disabled = true;
            document.querySelector("#viewall").disabled = false;
            document.querySelector("#viewOddPositions").disabled = false;
            console.log(x);
            msg.innerText = "Number is added to array";
          } else {
            msg.innerText = "You can not add anything other than number";
          }
        });
           /*
          c.	When edit button is clicked
          i.	Use a prompt function from window object which will give you a number.
          ii.	Replace the old number with the new number provided new number does not exist
          */
  
        const edit = document.querySelector("#edit");
        edit.addEventListener("click", () => {
          let oldNumber = document.querySelector("#t1").value;
          oldNumber = parseInt(oldNumber);
          let index = x.indexOf(oldNumber);
          let newNumber = prompt("Enter New Number");
          newNumber = parseInt(newNumber);
          let found = x.includes(newNumber);
          if (!found) {
            x[index] = newNumber;
            console.log(newNumber + " added to array at index " + index);
            console.log(x);
            document.getElementById("t1").value = "";
            document.querySelector("#edit").disabled = true;
            document.querySelector("#delete").disabled = true;
            document.querySelector("#viewall").disabled = false;
            document.querySelector("#viewOddPositions").disabled = false;
            document.getElementById("wh").innerText =
              newNumber + " added to array at index " + index;
          }
        });
          /*
          d.When delete button is clicked
          i.Remove the number from the array.
          */
        const delet = document.querySelector("#delete");
        delet.addEventListener("click", () => {
          let numberToDelete = document.getElementById("t1").value;
          numberToDelete = parseInt(numberToDelete);
          let found = x.includes(numberToDelete);
          if (found) {
            let index = x.indexOf(numberToDelete);
            delete x[index];
            console.log(numberToDelete + " is deleted");
            console.log(x);
            document.getElementById("wh").innerText =
              numberToDelete +
              " deleted from the array from index " +
              index +
              " and elemt at index " +
              index +
              " is " +
              x[index];
            document.querySelector("#edit").disabled = true;
            document.querySelector("#delete").disabled = true;
            document.querySelector("#viewall").disabled = false;
            document.querySelector("#viewOddPositions").disabled = false;
          } else {
            msg.innerText = "Number not found in the array";
            document.querySelector("#add").disabled = false;
          }
        });
        /*
          e.When view all is clicked
          i.	Show the entire array in the region Y
        */
        const viewall = document.querySelector("#viewall");
        viewall.addEventListener("click", () => {
          var dis = x.toString();
          document.getElementById("y").innerText = dis;
        });
  
        /*
          f. When we click on show odd positions in the array
          i. Show only the numbers which are in odd position 0, 1, 3, 5,7,9
  
        */
        const viewOddPositions = document.querySelector("#viewOddPositions");
        viewOddPositions.addEventListener("click", oddFunc);
  
        function oddFunc(value, index) {
          let output = printOddElemens();
          document.getElementById("y").innerText = output;
          console.log(index + " odd called");
        }

/*
var a = "10" type string
consle.log(parseInt(a)) // 10 type number

var index = arr.indexOf(11)// 0 

arr.indexOf(21)// -1

arr.includes(11)// true

arr.includes(21)// false

delete arr[index]

*/

