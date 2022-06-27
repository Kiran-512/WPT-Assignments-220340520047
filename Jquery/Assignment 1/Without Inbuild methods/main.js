
// window.addEventListener("DOMContentLoaded", => $(

$( () => {
  let addorUpdateorDeletedone = false;

  let x = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  //assume this comes from the server...

  function getArrayContentsFromOdd() {
    let contents = "";
    for (let i = 0; i < x.length; i++) {
      if (i % 2 != 0) contents += " " + x[i];
    }
    return contents;
  }

  function getArrayContents() {
    let contents = "";
    for (let i = 0; i < x.length; i++) {
      contents += " " + x[i];
    }
    return contents;
  }

  function updateArray(numberGiven, replacemenetNumber) {
    let updated = false;
    if (!checkNumberinArray(replacemenetNumber)) {
      for (let i = 0; i < x.length; i++) {
        if (x[i] == numberGiven) {
          x[i] = replacemenetNumber;
          updated = true;
          break;
        }
      }
    }

    return updated;
  }

  function addtoArray(numbergiven) {
    let added = true;
    x.push(numbergiven);
    return added;
  }

  function removeFromArray(numberGiven) {
    let removed = false;
    let index = -1;
    for (let i = 0; i < x.length; i++) {
      if (x[i] == numberGiven) {
        index = i;
        break;
      }
    }
    if (index >= 0) {
      x.splice(index, 1); //index position, how many elements
      //to remove
      removed = true;
    }
    return removed;
  }

  function checkNumberinArray(numbertoCheck) {
    let found = false;
    //dinosaur appraoch there are better approach
    for (let i = 0; i < x.length; i++) {
      if (x[i] == numbertoCheck) {
        found = true;
        break;
      }
    }
    return found;
  }
  
//EVENTS : From here =>

  //setting up blur event on the textbox.
  //get the textbox in your code..
  // const t1 = document.querySelector("#t1");
  $("#t1").blur(() => {
    let numberGiven = $("#t1").val();
    let found = checkNumberinArray(numberGiven);
    if (!found){
      $("#add").prop("disabled",false);
      $("#edit").prop("disabled",true);
      $("#delete").prop("disabled",true);
      $("#viewall").prop("disabled",true);
      $("#viewoddposition").prop("disabled",true);
/*
      document.querySelector("#add").disabled = false;
      document.querySelector("#edit").disabled = true;
      document.querySelector("#delete").disabled = true;
      document.querySelector("#viewall").disabled = true;
      document.querySelector("#viewoddposition").disabled = true;
*/
      $("#wh").text("number is new to be added")
    } else {
      $("#wh").text( "number aleady present");
      $("#add").prop("disabled", true);
      $("#edit").prop("disabled",false);
      $("#delete").prop("disabled",false);
      $("#viewall").prop("disabled",true);
      $("#viewoddposition").prop("disabled",true);
    }

    if (addorUpdateorDeletedone) {
      $("#viewall").prop("disabled",false);
      $("#viewoddposition").prop("disabled",false);
    }
  });

  //add button event handlder
  $("#add").click( () => {
    addorUpdateorDeletedone = true;

    let numberGiven = $("#t1").val();
    let output = addtoArray(numberGiven); // true if added, returns false;

    if (output) $("#wh").text("number added");
    else $("#wh").text("number not added");

    $("#add").prop("disabled",true);
    $("#edit").prop("disabled",true);
    $("#delete").prop("disabled",true);
    $("#viewall").prop("disabled",true);
    $("#viewoddposition").prop("disabled",true);;

    if (addorUpdateorDeletedone) {
      $("#viewall").prop("disabled",false);
      $("#viewoddposition").prop("disabled",false);
    }
  }); //end of add event handler

  $("#delete").click(() => {
    console.log("delte function getting called");
    addorUpdateorDeletedone = true;

    let numberGiven = document.querySelector("#t1").value;
    let output = removeFromArray(numberGiven);
    if (output) $("#wh").text("number removed");
    else $("#wh").text("number not found");

    $("#add").prop("disabled",true);
    $("#edit").prop("disabled",true);
    $("#delete").prop("disabled",true);
    $("#viewall").prop("disabled",true);
    $("#viewoddposition").prop("disabled",true);

    if (addorUpdateorDeletedone) {
      $("#viewall").prop("disabled",false);
      $("#viewoddposition").prop("disabled",false);
    }
  }); //end of delete logic.

  $("#edit").click(() => {
    console.log("modify is it working");
    addorUpdateorDeletedone = true;
    let numberGiven =$("#t1").val();
    let replacemenetNumber = window.prompt("enter new number"); //learn new function on need basis.
    let output = updateArray(numberGiven, replacemenetNumber);
    if (output) $("#wh").text("number modified");
    else $("#wh").text("number not modified");

    $("#add").prop("disabled" , true);
    $("#edit").prop("disabled" , true);
    $("#delete").prop("disabled" , true);
    document.querySelector("#viewall").prop("disabled" , true);
    $("#viewoddposition").prop("disabled" , true);

    if (addorUpdateorDeletedone) {
      $("#viewall").prop("disabled",false);
      $("#viewoddposition").prop("disabled",false);
    }
  }); //end of event handling for update

  $("#viewall").click(() => {
    console.log("view all event handling");
    let output = getArrayContents();

    $("#scontents").text(output);
  });

  $("#viewoddposition").click(() => {
    console.log("view odd position event handling");
    let output = getArrayContentsFromOdd();

    $("#scontents").text(output);
  });
});
