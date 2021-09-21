//TO DO LIST AREA START

//VARIABLE AREA

let emptyInput1 = document.getElementById("emptyInput1");
let writeButton1 = document.getElementById("write-button1");
let checkButton1 = document.getElementById("check-button1");
let editButton1 = document.getElementById("edit-button1");

let emptyInput2 = document.getElementById("emptyInput2");
let writeButton2 = document.getElementById("write-button2");
let checkButton2 = document.getElementById("check-button2");
let editButton2 =document.getElementById("edit-button2");

let emptyInput3 = document.getElementById("emptyInput3");
let writeButton3 = document.getElementById("write-button3");
let checkButton3 = document.getElementById("check-button3");
let editButton3 = document.getElementById("edit-button3");

let emptyInput4 = document.getElementById("emptyInput4");
let writeButton4 = document.getElementById("write-button4");
let checkButton4 = document.getElementById("check-button4");
let editButton4 = document.getElementById("edit-button4");

let emptyInput5 = document.getElementById("emptyInput5");
let writeButton5 = document.getElementById("write-button5");
let checkButton5 = document.getElementById("check-button5");
let editButton5 = document.getElementById("edit-button5");

let emptyInput6 = document.getElementById("emptyInput6");
let writeButton6 = document.getElementById("write-button6");
let checkButton6 = document.getElementById("check-button6");
let editButton6 = document.getElementById("edit-button6");

let emptyInput7 = document.getElementById("emptyInput7");
let writeButton7 = document.getElementById("write-button7");
let checkButton7 = document.getElementById("check-button7");
let editButton7 = document.getElementById("edit-button7");

//EVENT LISTENERS

emptyInput1.addEventListener("click",fillLine1);
writeButton1.addEventListener("click",writeLine1);
checkButton1.addEventListener("click",resetLine1);
editButton1.addEventListener("click",editLine1);

emptyInput2.addEventListener("click",fillLine2);
writeButton2.addEventListener("click",writeLine2);
checkButton2.addEventListener("click",resetLine2);
editButton2.addEventListener("click",editLine2);

emptyInput3.addEventListener("click",fillLine3);
writeButton3.addEventListener("click",writeLine3);
checkButton3.addEventListener("click",resetLine3);
editButton3.addEventListener("click",editLine3);

emptyInput4.addEventListener("click",fillLine4);
writeButton4.addEventListener("click",writeLine4);
checkButton4.addEventListener("click",resetLine4);
editButton4.addEventListener("click",editLine4);

emptyInput5.addEventListener("click",fillLine5);
writeButton5.addEventListener("click",writeLine5);
checkButton5.addEventListener("click",resetLine5);
editButton5.addEventListener("click",editLine5);

emptyInput6.addEventListener("click",fillLine6);
writeButton6.addEventListener("click",writeLine6);
checkButton6.addEventListener("click",resetLine6);
editButton6.addEventListener("click",editLine6);

emptyInput7.addEventListener("click",fillLine7);
writeButton7.addEventListener("click",writeLine7);
checkButton7.addEventListener("click",resetLine7);
editButton7.addEventListener("click",editLine7);

//FUNCTIONS

function fillLine1(){
   emptyInput1.style.width = "90%";
   writeButton1.style.display = "block";
};
function writeLine1(){
   writeButton1.style.display = "none";
   emptyInput1.style.display ="none";
   document.getElementById("filled-line1").style.display = "flex";
   document.getElementById("filled-text1").innerHTML=emptyInput1.value;
};
function resetLine1(){
   emptyInput1.style.display ="block";
   emptyInput1.style.width ="100%";
   document.getElementById("filled-line1").style.display = "none"
   emptyInput1.value="";
   document.getElementById("filled-text1").innerHTML=emptyInput1.value;
}
function editLine1(){
   emptyInput1.style.display ="block";
   writeButton1.style.display="block";
   emptyInput1.style.width ="100%";
   document.getElementById("filled-line1").style.display = "none";
   document.getElementById("filled-text1").innerHTML=emptyInput1.value;
}

function fillLine2(){
   emptyInput2.style.width = "90%";
   writeButton2.style.display = "block";
};
function writeLine2(){
   writeButton2.style.display = "none";
   emptyInput2.style.display ="none";
   document.getElementById("filled-line2").style.display = "flex";
   document.getElementById("filled-text2").innerHTML=emptyInput2.value;
};
function resetLine2(){
   emptyInput2.style.display ="block";
   emptyInput2.style.width ="100%";
   document.getElementById("filled-line2").style.display = "none"
   document.getElementById("filled-text2").innerHTML=emptyInput2.value;
   emptyInput2.value="";
}
function editLine2(){
   emptyInput2.style.display ="block";
   emptyInput2.style.width ="100%";
   writeButton2.style.display="block";
   document.getElementById("filled-line2").style.display = "none"
   document.getElementById("filled-text2").innerHTML=emptyInput2.value;
}


function fillLine3(){
   emptyInput3.style.width = "90%";
   writeButton3.style.display = "block";
};
function writeLine3(){
   writeButton3.style.display = "none";
   emptyInput3.style.display ="none";
   document.getElementById("filled-line3").style.display = "flex";
   document.getElementById("filled-text3").innerHTML=emptyInput3.value;
};
function resetLine3(){
   emptyInput3.style.display ="block";
   emptyInput3.style.width ="100%";
   document.getElementById("filled-line3").style.display = "none"
   document.getElementById("filled-text3").innerHTML=emptyInput3.value;
   emptyInput3.value="";
};
function editLine3(){
   emptyInput3.style.display ="block";
   emptyInput3.style.width ="100%";
   writeButton3.style.display="block";
   document.getElementById("filled-line3").style.display = "none"
   document.getElementById("filled-text3").innerHTML=emptyInput3.value;
}
function fillLine4(){
   emptyInput4.style.width = "90%";
   writeButton4.style.display = "block";
};
function writeLine4(){
   writeButton4.style.display = "none";
   emptyInput4.style.display ="none";
   document.getElementById("filled-line4").style.display = "flex";
   document.getElementById("filled-text4").innerHTML=emptyInput4.value;
};
function resetLine4(){
   emptyInput4.style.display ="block";
   emptyInput4.style.width ="100%";
   document.getElementById("filled-line4").style.display = "none"
   document.getElementById("filled-text4").innerHTML=emptyInput4.value;
   emptyInput4.value="";
}
function editLine4(){
   emptyInput4.style.display ="block";
   emptyInput4.style.width ="100%";
   writeButton4.style.display="block";
   document.getElementById("filled-line4").style.display = "none"
   document.getElementById("filled-text4").innerHTML=emptyInput4.value;
}
function fillLine5(){
   emptyInput5.style.width = "90%";
   writeButton5.style.display = "block";
};
function writeLine5(){
   writeButton5.style.display = "none";
   emptyInput5.style.display ="none";
   document.getElementById("filled-line5").style.display = "flex";
   document.getElementById("filled-text5").innerHTML=emptyInput5.value;
};
function resetLine5(){
   emptyInput5.style.display ="block";
   emptyInput5.style.width ="100%";
   document.getElementById("filled-line5").style.display = "none"
   document.getElementById("filled-text5").innerHTML=emptyInput5.value;
   emptyInput5.value="";
}
function editLine5(){
   emptyInput5.style.display ="block";
   emptyInput5.style.width ="100%";
   writeButton5.style.display="block";
   document.getElementById("filled-line5").style.display = "none"
   document.getElementById("filled-text5").innerHTML=emptyInput5.value;
}

function fillLine6(){
   emptyInput6.style.width = "90%";
   writeButton6.style.display = "block";
};
function writeLine6(){
   writeButton6.style.display = "none";
   emptyInput6.style.display ="none";
   document.getElementById("filled-line6").style.display = "flex";
   document.getElementById("filled-text6").innerHTML=emptyInput6.value;
};
function resetLine6(){
   emptyInput6.style.display ="block";
   emptyInput6.style.width ="100%";
   document.getElementById("filled-line6").style.display = "none"
   document.getElementById("filled-text6").innerHTML=emptyInput6.value;
   emptyInput6.value="";
}
function editLine6(){
   emptyInput6.style.display ="block";
   emptyInput6.style.width ="100%";
   writeButton6.style.display="block";
   document.getElementById("filled-line6").style.display = "none"
   document.getElementById("filled-text6").innerHTML=emptyInput6.value;
}

function fillLine7(){
   emptyInput7.style.width = "90%";
   writeButton7.style.display = "block";
};
function writeLine7(){
   writeButton7.style.display = "none";
   emptyInput7.style.display ="none";
   document.getElementById("filled-line7").style.display = "flex";
   document.getElementById("filled-text7").innerHTML=emptyInput7.value;
};
function resetLine7(){
   emptyInput7.style.display ="block";
   emptyInput7.style.width ="100%";
   document.getElementById("filled-line7").style.display = "none"
   document.getElementById("filled-text7").innerHTML=emptyInput7.value;
   emptyInput7.value="";
}
function editLine7(){
   emptyInput7.style.display ="block";
   emptyInput7.style.width ="100%";
   writeButton7.style.display="block";
   document.getElementById("filled-line7").style.display = "none"
   document.getElementById("filled-text7").innerHTML=emptyInput7.value;
}
   
//TO DO LIST END

//5 THINGS GRATEFUL FOR

//VARIABLE AREAS

let gratefulEmptyInput1 = document.getElementById("gratefulEmptyInput1");
let gratefulWriteButton1 = document.getElementById("grateful-write-button1");
let gratefulCheckButton1 = document.getElementById("grateful-check-button1");
let gratefulEditButton1 = document.getElementById("grateful-edit-button1");

let gratefulEmptyInput2 = document.getElementById("gratefulEmptyInput2");
let gratefulWriteButton2 = document.getElementById("grateful-write-button2");
let gratefulCheckButton2 = document.getElementById("grateful-check-button2");
let gratefulEditButton2 = document.getElementById("grateful-edit-button2");

let gratefulEmptyInput3 = document.getElementById("gratefulEmptyInput3");
let gratefulWriteButton3 = document.getElementById("grateful-write-button3");
let gratefulCheckButton3 = document.getElementById("grateful-check-button3");
let gratefulEditButton3 = document.getElementById("grateful-edit-button3");

let gratefulEmptyInput4 = document.getElementById("gratefulEmptyInput4");
let gratefulWriteButton4 = document.getElementById("grateful-write-button4");
let gratefulCheckButton4 = document.getElementById("grateful-check-button4");
let gratefulEditButton4 = document.getElementById("grateful-edit-button4");

let gratefulEmptyInput5 = document.getElementById("gratefulEmptyInput5");
let gratefulWriteButton5 = document.getElementById("grateful-write-button5");
let gratefulCheckButton5 = document.getElementById("grateful-check-button5");
let gratefulEditButton5 = document.getElementById("grateful-edit-button5");

//EVENT LISTENERS

gratefulEmptyInput1.addEventListener("click",gratefulFillLine1);
gratefulWriteButton1.addEventListener("click",gratefulWriteLine1);
gratefulCheckButton1.addEventListener("click",gratefulResetLine1);
gratefulEditButton1.addEventListener("click",gratefulEditLine1);

gratefulEmptyInput2.addEventListener("click",gratefulFillLine2);
gratefulWriteButton2.addEventListener("click",gratefulWriteLine2);
gratefulCheckButton2.addEventListener("click",gratefulResetLine2);
gratefulEditButton2.addEventListener("click",gratefulEditLine2);

gratefulEmptyInput3.addEventListener("click",gratefulFillLine3);
gratefulWriteButton3.addEventListener("click",gratefulWriteLine3);
gratefulCheckButton3.addEventListener("click",gratefulResetLine3);
gratefulEditButton3.addEventListener("click",gratefulEditLine3);

gratefulEmptyInput4.addEventListener("click",gratefulFillLine4);
gratefulWriteButton4.addEventListener("click",gratefulWriteLine4);
gratefulCheckButton4.addEventListener("click",gratefulResetLine4);
gratefulEditButton4.addEventListener("click",gratefulEditLine4);

gratefulEmptyInput5.addEventListener("click",gratefulFillLine5);
gratefulWriteButton5.addEventListener("click",gratefulWriteLine5);
gratefulCheckButton5.addEventListener("click",gratefulResetLine5);
gratefulEditButton5.addEventListener("click",gratefulEditLine5);

//FUNCTIONS

function gratefulFillLine1(){
   gratefulEmptyInput1.style.width = "90%";
   gratefulWriteButton1.style.display = "block";
};
function gratefulWriteLine1(){
   gratefulWriteButton1.style.display = "none";
   gratefulEmptyInput1.style.display ="none";
   document.getElementById("grateful-filled-line1").style.display = "flex";
   document.getElementById("grateful-filled-text1").innerHTML=gratefulEmptyInput1.value;
};
function gratefulResetLine1(){
   gratefulEmptyInput1.style.display ="block";
   gratefulEmptyInput1.style.width ="100%";
   document.getElementById("grateful-filled-line1").style.display = "none"
   document.getElementById("grateful-filled-text1").innerHTML=gratefulEmptyInput1.value;
   gratefulEmptyInput1.value="";
}
function gratefulEditLine1(){
   gratefulWriteButton1.style.display = "block";
   gratefulEmptyInput1.style.display ="block";
   gratefulEmptyInput1.style.width ="100%";
   document.getElementById("grateful-filled-line1").style.display = "none"
   document.getElementById("grateful-filled-text1").innerHTML=gratefulEmptyInput1.value;
};

function gratefulFillLine2(){
   gratefulEmptyInput2.style.width = "90%";
   gratefulWriteButton2.style.display = "block";
};
function gratefulWriteLine2(){
   gratefulWriteButton2.style.display = "none";
   gratefulEmptyInput2.style.display ="none";
   document.getElementById("grateful-filled-line2").style.display = "flex";
   document.getElementById("grateful-filled-text2").innerHTML=gratefulEmptyInput2.value;
};
function gratefulResetLine2(){
   gratefulEmptyInput2.style.display ="block";
   gratefulEmptyInput2.style.width ="100%";
   document.getElementById("grateful-filled-line2").style.display = "none"
   document.getElementById("grateful-filled-text2").innerHTML=gratefulEmptyInput2.value;
   gratefulEmptyInput2.value="";
};
function gratefulEditLine2(){
   gratefulWriteButton2.style.display = "block";
   gratefulEmptyInput2.style.display ="block";
   gratefulEmptyInput2.style.width ="100%";
   document.getElementById("grateful-filled-line2").style.display = "none"
   document.getElementById("grateful-filled-text2").innerHTML=gratefulEmptyInput2.value;
};

function gratefulFillLine3(){
   gratefulEmptyInput3.style.width = "90%";
   gratefulWriteButton3.style.display = "block";
};
function gratefulWriteLine3(){
   gratefulWriteButton3.style.display = "none";
   gratefulEmptyInput3.style.display ="none";
   document.getElementById("grateful-filled-line3").style.display = "flex";
   document.getElementById("grateful-filled-text3").innerHTML=gratefulEmptyInput3.value;
};
function gratefulResetLine3(){
   gratefulEmptyInput3.style.display ="block";
   gratefulEmptyInput3.style.width ="100%";
   document.getElementById("grateful-filled-line3").style.display = "none"
   document.getElementById("grateful-filled-text3").innerHTML=gratefulEmptyInput3.value;
   gratefulEmptyInput3.value="";
}
function gratefulEditLine3(){
   gratefulWriteButton3.style.display = "block";
   gratefulEmptyInput3.style.display ="block";
   gratefulEmptyInput3.style.width ="100%";
   document.getElementById("grateful-filled-line3").style.display = "none"
   document.getElementById("grateful-filled-text3").innerHTML=gratefulEmptyInput3.value;
};


function gratefulFillLine4(){
   gratefulEmptyInput4.style.width = "90%";
   gratefulWriteButton4.style.display = "block";
};
function gratefulWriteLine4(){
   gratefulWriteButton4.style.display = "none";
   gratefulEmptyInput4.style.display ="none";
   document.getElementById("grateful-filled-line4").style.display = "flex";
   document.getElementById("grateful-filled-text4").innerHTML=gratefulEmptyInput4.value;
};
function gratefulResetLine4(){
   gratefulEmptyInput4.style.display ="block";
   gratefulEmptyInput4.style.width ="100%";
   document.getElementById("grateful-filled-line4").style.display = "none"
   document.getElementById("grateful-filled-text4").innerHTML=gratefulEmptyInput4.value;
   gratefulEmptyInput4.value="";
}
function gratefulEditLine4(){
   gratefulWriteButton4.style.display = "block";
   gratefulEmptyInput4.style.display ="block";
   gratefulEmptyInput4.style.width ="100%";
   document.getElementById("grateful-filled-line4").style.display = "none"
   document.getElementById("grateful-filled-text4").innerHTML=gratefulEmptyInput4.value;
};


function gratefulFillLine5(){
   gratefulEmptyInput5.style.width = "90%";
   gratefulWriteButton5.style.display = "block";
};
function gratefulWriteLine5(){
   gratefulWriteButton5.style.display = "none";
   gratefulEmptyInput5.style.display ="none";
   document.getElementById("grateful-filled-line5").style.display = "flex";
   document.getElementById("grateful-filled-text5").innerHTML=gratefulEmptyInput5.value;
};
function gratefulResetLine5(){
   gratefulEmptyInput5.style.display ="block";
   gratefulEmptyInput5.style.width ="100%";
   document.getElementById("grateful-filled-line5").style.display = "none"
   document.getElementById("grateful-filled-text5").innerHTML=gratefulEmptyInput5.value;
   gratefulEmptyInput5.value="";
}
function gratefulEditLine5(){
   gratefulWriteButton5.style.display = "block";
   gratefulEmptyInput5.style.display ="block";
   gratefulEmptyInput5.style.width ="100%";
   document.getElementById("grateful-filled-line5").style.display = "none"
   document.getElementById("grateful-filled-text5").innerHTML=gratefulEmptyInput5.value;
};

// GRATEFUL SECTION END

//NOTES SECTION

let noteWriteBtn =document.getElementById("notes-write-btn");
let noteTrashBtn =document.getElementById("notes-trash-btn");
let noteBox = document.getElementById("notes-box");
let noteBoxText = document.getElementById("note-box-text");
let filledNoteBox =document.getElementById("filled-notes-box");
let filledNoteBoxText = document.getElementById("filled-note-box-text");


noteWriteBtn.addEventListener("click", writeNote);
noteTrashBtn.addEventListener("click", trashNote);

function writeNote(){
   filledNoteBoxText.value=noteBoxText.value;
   noteBoxText.value="";
   noteBox.style.display = "none";
   filledNoteBox.style.display = "block";
};

function trashNote(){
   filledNoteBoxText.value="";
   filledNoteBox.style.display ="none";
   noteBox.style.display ="block";
}

//DAILY SECTION
let monEmptyCon = document.getElementById("mon-empty-day-input");
let monEmptyInput = document.getElementById("mon-empty-input");
let monWriteBtn = document.getElementById("mon-write-btn");
let monFilledDayCon =document.getElementById("mon-filled-day");
let monFilledInput = document.getElementById("mon-filled-text");
let monCheckBtn = document.getElementById('mon-check-btn');
let monEditBtn = document.getElementById("mon-edit-btn");

monEmptyInput.addEventListener("click",toggleMonWrite);
monWriteBtn.addEventListener("click",toggleMonFilledDay)
monCheckBtn.addEventListener("click",toggleMonEmptyInput);
monEditBtn.addEventListener("click",toggleMonEditLine);

function toggleMonWrite(){
   monEmptyInput.style.width ="90%";
   monWriteBtn.style.display="block";
};
function toggleMonFilledDay(){
   monEmptyInput.style.width="100%";
   monWriteBtn.style.display="none";
   monEmptyCon.style.display="none";
   monFilledDayCon.style.display="flex";
   monFilledInput.value=monEmptyInput.value;
};
function toggleMonEmptyInput(){
   monEmptyCon.style.display="flex";
   monFilledInput.value="";
   monEmptyInput.value="";
   monFilledDayCon.style.display="none";
};
function toggleMonEditLine(){
   monEmptyCon.style.display="flex";
   monFilledInput.value="";
   monFilledDayCon.style.display="none";
   monWriteBtn.style.display="block";
};

let tuesEmptyCon = document.getElementById("tues-empty-day-input");
let tuesEmptyInput = document.getElementById("tues-empty-input");
let tuesWriteBtn = document.getElementById("tues-write-btn");
let tuesFilledDayCon =document.getElementById("tues-filled-day");
let tuesFilledInput = document.getElementById("tues-filled-text");
let tuesCheckBtn = document.getElementById('tues-check-btn');
let tuesEditBtn = document.getElementById("tues-edit-btn");

tuesEmptyInput.addEventListener("click",toggleTuesWrite);
tuesWriteBtn.addEventListener("click",toggleTuesFilledDay);
tuesCheckBtn.addEventListener("click",toggleTuesEmptyInput);
tuesEditBtn.addEventListener("click",toggleTuesEditLine);

function toggleTuesWrite(){
   tuesEmptyInput.style.width ="90%";
   tuesWriteBtn.style.display="block";
};
function toggleTuesFilledDay(){
   tuesEmptyInput.style.width="100%";
   tuesWriteBtn.style.display="none";
   tuesEmptyCon.style.display="none";
   tuesFilledDayCon.style.display="flex";
   tuesFilledInput.value=tuesEmptyInput.value;
};
function toggleTuesEmptyInput(){
   tuesEmptyCon.style.display="flex";
   tuesFilledInput.value="";
   tuesEmptyInput.value="";
   tuesFilledDayCon.style.display="none";
};
function toggleTuesEditLine(){
   tuesEmptyCon.style.display="flex";
   tuesFilledInput.value="";
   tuesFilledDayCon.style.display="none";
   tuesWriteBtn.style.display="block";
};


let wedEmptyCon = document.getElementById("wed-empty-day-input");
let wedEmptyInput = document.getElementById("wed-empty-input");
let wedWriteBtn = document.getElementById("wed-write-btn");
let wedFilledDayCon =document.getElementById("wed-filled-day");
let wedFilledInput = document.getElementById("wed-filled-text");
let wedCheckBtn = document.getElementById('wed-check-btn');
let wedEditBtn = document.getElementById("wed-edit-btn");

wedEmptyInput.addEventListener("click",toggleWedWrite);
wedWriteBtn.addEventListener("click",toggleWedFilledDay);
wedCheckBtn.addEventListener("click",toggleWedEmptyInput);
wedEditBtn.addEventListener("click",toggleWedEditLine);

function toggleWedWrite(){
   wedEmptyInput.style.width ="90%";
   wedWriteBtn.style.display="block";
};
function toggleWedFilledDay(){
   wedEmptyInput.style.width="100%";
   wedWriteBtn.style.display="none";
   wedEmptyCon.style.display="none";
   wedFilledDayCon.style.display="flex";
   wedFilledInput.value=wedEmptyInput.value;
};
function toggleWedEmptyInput(){
   wedEmptyCon.style.display="flex";
   wedFilledInput.value="";
   wedEmptyInput.value="";
   wedFilledDayCon.style.display="none";
};
function toggleWedEditLine(){
   wedEmptyCon.style.display="flex";
   wedFilledInput.value="";
   wedFilledDayCon.style.display="none";
   wedWriteBtn.style.display="block";
};


let thursEmptyCon = document.getElementById("thurs-empty-day-input");
let thursEmptyInput = document.getElementById("thurs-empty-input");
let thursWriteBtn = document.getElementById("thurs-write-btn");
let thursFilledDayCon =document.getElementById("thurs-filled-day");
let thursFilledInput = document.getElementById("thurs-filled-text");
let thursCheckBtn = document.getElementById('thurs-check-btn');
let thursEditBtn = document.getElementById("thurs-edit-btn");

thursEmptyInput.addEventListener("click",toggleThursWrite);
thursWriteBtn.addEventListener("click",toggleThursFilledDay)
thursCheckBtn.addEventListener("click",toggleThursEmptyInput);
thursEditBtn.addEventListener("click",toggleThursEditLine);

function toggleThursWrite(){
   thursEmptyInput.style.width ="90%";
   thursWriteBtn.style.display="block";
};
function toggleThursFilledDay(){
   thursEmptyInput.style.width="100%";
   thursWriteBtn.style.display="none";
   thursEmptyCon.style.display="none";
   thursFilledDayCon.style.display="flex";
   thursFilledInput.value=thursEmptyInput.value;
};
function toggleThursEmptyInput(){
   thursEmptyCon.style.display="flex";
   thursFilledInput.value="";
   thursEmptyInput.value="";
   thursFilledDayCon.style.display="none";
};
function toggleThursEditLine(){
   thursEmptyCon.style.display="flex";
   thursFilledInput.value="";
   thursFilledDayCon.style.display="none";
   thursWriteBtn.style.display="block";
};


let friEmptyCon = document.getElementById("fri-empty-day-input");
let friEmptyInput = document.getElementById("fri-empty-input");
let friWriteBtn = document.getElementById("fri-write-btn");
let friFilledDayCon =document.getElementById("fri-filled-day");
let friFilledInput = document.getElementById("fri-filled-text");
let friCheckBtn = document.getElementById('fri-check-btn');
let friEditBtn = document.getElementById("fri-edit-btn");

friEmptyInput.addEventListener("click",toggleFriWrite);
friWriteBtn.addEventListener("click",toggleFriFilledDay)
friCheckBtn.addEventListener("click",toggleFriEmptyInput);
friEditBtn.addEventListener("click",toggleFriEditLine);

function toggleFriWrite(){
   friEmptyInput.style.width ="90%";
   friWriteBtn.style.display="block";
};
function toggleFriFilledDay(){
   friEmptyInput.style.width="100%";
   friWriteBtn.style.display="none";
   friEmptyCon.style.display="none";
   friFilledDayCon.style.display="flex";
   friFilledInput.value=friEmptyInput.value;
};
function toggleFriEmptyInput(){
   friEmptyCon.style.display="flex";
   friFilledInput.value="";
   friEmptyInput.value="";
   friFilledDayCon.style.display="none";
};
function toggleFriEditLine(){
   friEmptyCon.style.display="flex";
   friFilledInput.value="";
   friFilledDayCon.style.display="none";
   friWriteBtn.style.display="block";
};


let satEmptyCon = document.getElementById("sat-empty-day-input");
let satEmptyInput = document.getElementById("sat-empty-input");
let satWriteBtn = document.getElementById("sat-write-btn");
let satFilledDayCon =document.getElementById("sat-filled-day");
let satFilledInput = document.getElementById("sat-filled-text");
let satCheckBtn = document.getElementById('sat-check-btn');
let satEditBtn = document.getElementById("sat-edit-btn");

satEmptyInput.addEventListener("click",toggleSatWrite);
satWriteBtn.addEventListener("click",toggleSatFilledDay);
satCheckBtn.addEventListener("click",toggleSatEmptyInput);
satEditBtn.addEventListener("click",toggleSatEditLine);

function toggleSatWrite(){
   satEmptyInput.style.width ="90%";
   satWriteBtn.style.display="block";
};
function toggleSatFilledDay(){
   satEmptyInput.style.width="100%";
   satWriteBtn.style.display="none";
   satEmptyCon.style.display="none";
   satFilledDayCon.style.display="flex";
   satFilledInput.value=satEmptyInput.value;
};
function toggleSatEmptyInput(){
   satEmptyCon.style.display="flex";
   satFilledInput.value="";
   satEmptyInput.value="";
   satFilledDayCon.style.display="none";
};
function toggleSatEditLine(){
   satEmptyCon.style.display="flex";
   satFilledInput.value="";
   satFilledDayCon.style.display="none";
   satWriteBtn.style.display="block";
};


let sunEmptyCon = document.getElementById("sun-empty-day-input");
let sunEmptyInput = document.getElementById("sun-empty-input");
let sunWriteBtn = document.getElementById("sun-write-btn");
let sunFilledDayCon =document.getElementById("sun-filled-day");
let sunFilledInput = document.getElementById("sun-filled-text");
let sunCheckBtn = document.getElementById('sun-check-btn');
let sunEditBtn = document.getElementById("sun-edit-btn");

sunEmptyInput.addEventListener("click",toggleSunWrite);
sunWriteBtn.addEventListener("click",toggleSunFilledDay);
sunCheckBtn.addEventListener("click",toggleSunEmptyInput);
sunEditBtn.addEventListener("click",toggleSunEditLine);

function toggleSunWrite(){
   sunEmptyInput.style.width ="90%";
   sunWriteBtn.style.display="block";
};
function toggleSunFilledDay(){
   sunEmptyInput.style.width="100%";
   sunWriteBtn.style.display="none";
   sunEmptyCon.style.display="none";
   sunFilledDayCon.style.display="flex";
   sunFilledInput.value=sunEmptyInput.value;
};
function toggleSunEmptyInput(){
   sunEmptyCon.style.display="flex";
   sunFilledInput.value="";
   sunEmptyInput.value="";
   sunFilledDayCon.style.display="none";
};
function toggleSunEditLine(){
   sunEmptyCon.style.display="flex";
   sunFilledInput.value="";
   sunFilledDayCon.style.display="none";
   sunWriteBtn.style.display="block";
};