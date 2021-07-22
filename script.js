//TO DO LIST AREA START

//VARIABLE AREA

let emptyInput1 = document.getElementById("emptyInput1");
let writeButton1 = document.getElementById("write-button1");
let checkButton1 = document.getElementById("check-button1");

let emptyInput2 = document.getElementById("emptyInput2");
let writeButton2 = document.getElementById("write-button2");
let checkButton2 = document.getElementById("check-button2");

let emptyInput3 = document.getElementById("emptyInput3");
let writeButton3 = document.getElementById("write-button3");
let checkButton3 = document.getElementById("check-button3");

let emptyInput4 = document.getElementById("emptyInput4");
let writeButton4 = document.getElementById("write-button4");
let checkButton4 = document.getElementById("check-button4");

let emptyInput5 = document.getElementById("emptyInput5");
let writeButton5 = document.getElementById("write-button5");
let checkButton5 = document.getElementById("check-button5");

let emptyInput6 = document.getElementById("emptyInput6");
let writeButton6 = document.getElementById("write-button6");
let checkButton6 = document.getElementById("check-button6");

let emptyInput7 = document.getElementById("emptyInput7");
let writeButton7 = document.getElementById("write-button7");
let checkButton7 = document.getElementById("check-button7");

//EVENT LISTENERS

emptyInput1.addEventListener("click",fillLine1);
writeButton1.addEventListener("click",writeLine1);
checkButton1.addEventListener("click",resetLine1)

emptyInput2.addEventListener("click",fillLine2);
writeButton2.addEventListener("click",writeLine2);
checkButton2.addEventListener("click",resetLine2)

emptyInput3.addEventListener("click",fillLine3);
writeButton3.addEventListener("click",writeLine3);
checkButton3.addEventListener("click",resetLine3)

emptyInput4.addEventListener("click",fillLine4);
writeButton4.addEventListener("click",writeLine4);
checkButton4.addEventListener("click",resetLine4)

emptyInput5.addEventListener("click",fillLine5);
writeButton5.addEventListener("click",writeLine5);
checkButton5.addEventListener("click",resetLine5)

emptyInput6.addEventListener("click",fillLine6);
writeButton6.addEventListener("click",writeLine6);
checkButton6.addEventListener("click",resetLine6)

emptyInput7.addEventListener("click",fillLine7);
writeButton7.addEventListener("click",writeLine7);
checkButton7.addEventListener("click",resetLine7)

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
   emptyInput1.value="";
};
function resetLine1(){
   emptyInput1.style.display ="block";
   emptyInput1.style.width ="100%";
   document.getElementById("filled-line1").style.display = "none"
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
   emptyInput2.value="";
};
function resetLine2(){
   emptyInput2.style.display ="block";
   emptyInput2.style.width ="100%";
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
   emptyInput3.value="";
};
function resetLine3(){
   emptyInput3.style.display ="block";
   emptyInput3.style.width ="100%";
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
   emptyInput4.value="";
};
function resetLine4(){
   emptyInput4.style.display ="block";
   emptyInput4.style.width ="100%";
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
   emptyInput5.value="";
};
function resetLine5(){
   emptyInput5.style.display ="block";
   emptyInput5.style.width ="100%";
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
   emptyInput6.value="";
};
function resetLine6(){
   emptyInput6.style.display ="block";
   emptyInput6.style.width ="100%";
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
   emptyInput7.value="";
};
function resetLine7(){
   emptyInput7.style.display ="block";
   emptyInput7.style.width ="100%";
   document.getElementById("filled-line7").style.display = "none"
   document.getElementById("filled-text7").innerHTML=emptyInput7.value;
}
   
//TO DO LIST END

//5 THINGS GRATEFUL FOR

let gratefulEmptyInput1 = document.getElementById("gratefulEmptyInput1");
let gratefulWriteButton1 = document.getElementById("grateful-write-button1");
let gratefulCheckButton1 = document.getElementById("grateful-check-button1");

let gratefulEmptyInput2 = document.getElementById("gratefulEmptyInput2");
let gratefulWriteButton2 = document.getElementById("grateful-write-button2");
let gratefulCheckButton2 = document.getElementById("grateful-check-button2");

let gratefulEmptyInput3 = document.getElementById("gratefulEmptyInput3");
let gratefulWriteButton3 = document.getElementById("grateful-write-button3");
let gratefulCheckButton3 = document.getElementById("grateful-check-button3");

let gratefulEmptyInput4 = document.getElementById("gratefulEmptyInput4");
let gratefulWriteButton4 = document.getElementById("grateful-write-button4");
let gratefulCheckButton4 = document.getElementById("grateful-check-button4");

let gratefulEmptyInput5 = document.getElementById("gratefulEmptyInput5");
let gratefulWriteButton5 = document.getElementById("grateful-write-button5");
let gratefulCheckButton5 = document.getElementById("grateful-check-button5");



gratefulEmptyInput1.addEventListener("click",gratefulFillLine1);
gratefulWriteButton1.addEventListener("click",gratefulWriteLine1);
gratefulCheckButton1.addEventListener("click",gratefulResetLine1)

gratefulEmptyInput2.addEventListener("click",gratefulFillLine2);
gratefulWriteButton2.addEventListener("click",gratefulWriteLine2);
gratefulCheckButton2.addEventListener("click",gratefulResetLine2)

gratefulEmptyInput3.addEventListener("click",gratefulFillLine3);
gratefulWriteButton3.addEventListener("click",gratefulWriteLine3);
gratefulCheckButton3.addEventListener("click",gratefulResetLine3)

gratefulEmptyInput4.addEventListener("click",gratefulFillLine4);
gratefulWriteButton4.addEventListener("click",gratefulWriteLine4);
gratefulCheckButton4.addEventListener("click",gratefulResetLine4)

gratefulEmptyInput5.addEventListener("click",gratefulFillLine5);
gratefulWriteButton5.addEventListener("click",gratefulWriteLine5);
gratefulCheckButton5.addEventListener("click",gratefulResetLine5)


function gratefulFillLine1(){
   gratefulEmptyInput1.style.width = "90%";
   gratefulWriteButton1.style.display = "block";
};
function gratefulWriteLine1(){
   gratefulWriteButton1.style.display = "none";
   gratefulEmptyInput1.style.display ="none";
   document.getElementById("grateful-filled-line1").style.display = "flex";
   document.getElementById("grateful-filled-text1").innerHTML=gratefulEmptyInput1.value;
   gratefulEmptyInput1.value="";
};
function gratefulResetLine1(){
   gratefulEmptyInput1.style.display ="block";
   gratefulEmptyInput1.style.width ="100%";
   document.getElementById("grateful-filled-line1").style.display = "none"
   document.getElementById("grateful-filled-text1").innerHTML=gratefulEmptyInput1.value;
}


function gratefulFillLine2(){
   gratefulEmptyInput2.style.width = "90%";
   gratefulWriteButton2.style.display = "block";
};
function gratefulWriteLine2(){
   gratefulWriteButton2.style.display = "none";
   gratefulEmptyInput2.style.display ="none";
   document.getElementById("grateful-filled-line2").style.display = "flex";
   document.getElementById("grateful-filled-text2").innerHTML=gratefulEmptyInput2.value;
   gratefulEmptyInput2.value="";
};
function gratefulResetLine2(){
   gratefulEmptyInput2.style.display ="block";
   gratefulEmptyInput2.style.width ="100%";
   document.getElementById("grateful-filled-line2").style.display = "none"
   document.getElementById("grateful-filled-text2").innerHTML=gratefulEmptyInput2.value;
}


function gratefulFillLine3(){
   gratefulEmptyInput3.style.width = "90%";
   gratefulWriteButton3.style.display = "block";
};
function gratefulWriteLine3(){
   gratefulWriteButton3.style.display = "none";
   gratefulEmptyInput3.style.display ="none";
   document.getElementById("grateful-filled-line3").style.display = "flex";
   document.getElementById("grateful-filled-text3").innerHTML=gratefulEmptyInput3.value;
   gratefulEmptyInput3.value="";
};
function gratefulResetLine3(){
   gratefulEmptyInput3.style.display ="block";
   gratefulEmptyInput3.style.width ="100%";
   document.getElementById("grateful-filled-line3").style.display = "none"
   document.getElementById("grateful-filled-text3").innerHTML=gratefulEmptyInput3.value;
}


function gratefulFillLine4(){
   gratefulEmptyInput4.style.width = "90%";
   gratefulWriteButton4.style.display = "block";
};
function gratefulWriteLine4(){
   gratefulWriteButton4.style.display = "none";
   gratefulEmptyInput4.style.display ="none";
   document.getElementById("grateful-filled-line4").style.display = "flex";
   document.getElementById("grateful-filled-text4").innerHTML=gratefulEmptyInput4.value;
   gratefulEmptyInput4.value="";
};
function gratefulResetLine4(){
   gratefulEmptyInput4.style.display ="block";
   gratefulEmptyInput4.style.width ="100%";
   document.getElementById("grateful-filled-line4").style.display = "none"
   document.getElementById("grateful-filled-text4").innerHTML=gratefulEmptyInput4.value;
}


function gratefulFillLine5(){
   gratefulEmptyInput5.style.width = "90%";
   gratefulWriteButton5.style.display = "block";
};
function gratefulWriteLine5(){
   gratefulWriteButton5.style.display = "none";
   gratefulEmptyInput5.style.display ="none";
   document.getElementById("grateful-filled-line5").style.display = "flex";
   document.getElementById("grateful-filled-text5").innerHTML=gratefulEmptyInput5.value;
   gratefulEmptyInput5.value="";
};
function gratefulResetLine5(){
   gratefulEmptyInput5.style.display ="block";
   gratefulEmptyInput5.style.width ="100%";
   document.getElementById("grateful-filled-line5").style.display = "none"
   document.getElementById("grateful-filled-text5").innerHTML=gratefulEmptyInput5.value;
}

// GRATEFUL SECTION END

