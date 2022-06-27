

    //1.	There is a predefined array of numbers of size 10.

    //2.	All buttons disabled in the beginning
    $(()=>{

      let x = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  
      const msg = $("#wh");

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
        */const t1 = $("#t1");
          t1.blur(() => {
        // console.log("blur event on textbox")
        let numberGiven = t1.val();
        numberGiven = parseInt(numberGiven);
        let found = x.includes(numberGiven);
        console.log(found);
        // console.log(numberGiven)
        if (found) {
          $("#add").prop("disabled",true);
          $("#edit").prop("disabled",false);
          $("#delete").prop("disabled",false);
          $("#viewall").prop("disabled",true);
          $("#viewOddPositions").prop("disabled",true);
          msg.text(" Number is already present");
        } else {
          $("#add").prop("disabled",false);
          $("#edit").prop("disabled",true);
          $("#delete").prop("disabled",true);
          msg.text("Number is not present, you can add this number by using add");
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
        $("#add").click(() => {
        let numberGiven = $("#t1").val();
        numberGiven = parseInt(numberGiven);
        if (!isNaN(numberGiven)){
          x.push(numberGiven);
          console.log(numberGiven +" added to array");
          $("#edit").prop("disabled",true);
          $("#delete").prop("disabled",true);
          $("#add").prop("disabled",true);
          $("#viewall").prop("disabled",false);
          $("#viewOddPositions").prop("disabled",false);
          console.log(x);
          msg.text( "Number is added to array");
        } else {
          msg.text("You can not add anything other than number");
        }
      });
         /*
        c.	When edit button is clicked
        i.	Use a prompt function from window object which will give you a number.
        ii.	Replace the old number with the new number provided new number does not exist
        */
        $("#edit").click(() => {
        let oldNumber = $("#t1").val();
        oldNumber = parseInt(oldNumber);
        let index = x.indexOf(oldNumber);
        let newNumber = prompt("Enter New Number");
        newNumber = parseInt(newNumber);
        let found = x.includes(newNumber);
        if (!found) {
          x[index] = newNumber;
          console.log(newNumber + " added to array at index " + index);
          console.log(x);
          $("#t1").val("");
          $("#edit").prop("disabled",true);
          $("#delete").prop("disabled",true);
          $("#viewall").prop("disabled",false);
          $("#viewOddPositions").prop("disabled",false);
          $("#wh").text(newNumber + " added to array at index " + index);
        }
      });
        /*
        d.When delete button is clicked
        i.Remove the number from the array.
        */
      const delet = $("#delete");
      delet.click(() => {
        let numberToDelete = $("#t1").val();
        numberToDelete = parseInt(numberToDelete);
        let found = x.includes(numberToDelete);
        if (found) {
          let index = x.indexOf(numberToDelete);
          delete x[index];
          console.log(numberToDelete + " is deleted");
          console.log(x);
          $("#wh").text(numberToDelete +
            " deleted from the array from index " +
            index +
            " and elemt at index " +
            index +
            " is " +
            x[index]);
          $("#edit").prop("disabled",true);
          $("#delete").prop("disabled",true);
          $("#viewall").prop("disabled",false);
          $("#viewOddPositions").prop("disabled",false);
        } else {
          msg.text( "Number not found in the array");
          $("#add").prop(disabled , false);
        }
      });
      /*
        e.When view all is clicked
        i.	Show the entire array in the region Y
      */
      const viewall =$("#viewall");
      viewall.click(() => {
        let display = x.toString();
        $("#y").text(display);
      });
      /*
        f. When we click on show odd positions in the array
        i. Show only the numbers which are in odd position 0, 1, 3, 5,7,9
      */
      const viewOddPositions =$("#viewOddPositions");
      viewOddPositions.click(oddFunc);
      function oddFunc(value, index) {
        let output = printOddElemens();
        $("#y").text(output);
        console.log(index + " odd called");
      }
    })
/*
var a = "10" type string
consle.log(parseInt(a)) // 10 type number
var index = arr.indexOf(11)// 0 
arr.indexOf(21)// -1
arr.includes(11)// true
arr.includes(21)// false
delete arr[index]
*/
/*
Learnings :
To check if Its NaN opr Not use function => isNaN(value)
NaN is not equal to itself, NaN != NaN will always return true
console.log(NaN==NaN)//false
console.log(NaN===NaN)//false
console.log(NaN!=NaN)//true
console.log(NaN!==NaN)//true
*/

