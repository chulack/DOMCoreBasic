"use strict";

/* 
    DOMCoreBasic.js
    Original build by Luke Christopher Chulack
    05/09/2021
    v0.1
*/


// num object

const num = {

    // num random method
    random: (aNum) => {

        if (typeof aNum === "number" ) {
            if (Number.isInteger(aNum)) {
                return  Math.floor(Math.random() * aNum) + 1;
            } else {

                console.error("Floats are not an allowed data type to enter in the num random method!");

            }

        } else {

            console.error("An illegal data type was entered into the num random method!");

        }
    },
    cubed: (aNum) => {
        if (typeof aNum === "number" ) {

             return aNum * aNum * aNum;

        } else {
            console.error("An illegal data type was entered into the num cubed method!");
        }
    },
    squared: (aNum) => {
        if (typeof aNum === "number" ) {

            return aNum * aNum;

        } else {
            console.error("An illegal data type was entered into the num squared method!");
        }

    }, 
    add: (aNum, aOtherNum) => {
        if (typeof aNum === "number" && typeof aOtherNum === "number")  {
            return aNum+aOtherNum;
        } else {
            console.error("One or more illegal data types where entered into the num addition method!");
        }
    },
    sub: (aNum, aOtherNum) => {
        if (typeof aNum === "number" && typeof aOtherNum === "number")  {

             return aNum-aOtherNum;

        } else {
            console.error("One or more illegal data types where entered into the num subtraction method!");
        }
        
    },
    mul: (aNum, aOtherNum) => {
        if (typeof aNum === "number" && typeof aOtherNum === "number")  {

         return aNum*aOtherNum;

        } else {
            console.error("One or more illegal data types where entered into the num multiplication method!");
        }
    },
    div: (aNum, aOtherNum) => {

        if (typeof aNum === "number" && typeof aOtherNum === "number")  {

            return aNum/aOtherNum;

        } else {
            console.error("One or more illegal data types where entered into the num division method!");
        }

    },
    absoluteValue: (aNum) =>{ 
        return 0;
    }

}


// theTime object

const theTime = {

    days: {
        toDayInt: new Date().getDay(),
        toDayName: ()=>{

            if(new Date().getDay() =="0") {
                
                return "Sunday";

            } else if(new Date().getDay() =="0") {
                
                return "Sunday";

            }  else if(new Date().getDay() =="1") {
                
                return "Monday ";

            }   else if(new Date().getDay() =="2") {
                
                return "Tuesday";

            }   else if(new Date().getDay() =="3") {
                
                return "Wednesday";

            }   else if(new Date().getDay() =="4") {
                
                return "Thursday";

            }   else if(new Date().getDay() =="5") {
                
                return "Firday";

            }   else if(new Date().getDay() =="6") {
                
                return "Saturday";

            }   else {
                console.error("Unknown error with in theTime toDayName method!");
            }

        }

    }, 
    months: {

        thisMonthInt: ()=>{

        },
        thisMonthName: ()=>{

        }
    },
    yearInt: ()=>{


    }

};


// converter object 
const converter = {


    // converter Binary  method
    strToBin: (text)=>{
        const aa = text.split("");
        let aString = "";
        for (let i in aa) {
            aString += aa[i].charCodeAt(0).toString(2) + " ";

        }
        return aString;
    },

    // converter Hexadecimal   method
    strToHex:(text)=>{

    },
    // converter Word value method
    wordValue: (aChar) => {
        if(typeof aChar === "string" && aChar.length === 1) {

            if(aChar.toLowerCase() == "a") {
                return 1;
            }  else if (aChar.toLowerCase() == "b") {

                return 2;
            }  else if (aChar.toLowerCase() == "c") {
                
                return 3;

            }  else if (aChar.toLowerCase() == "d") {
                
                return 4;

            } else if (aChar.toLowerCase() == "e") {
                
                return 5;
            } else if (aChar.toLowerCase() == "f") {
                
                return 6;

            }  else if (aChar.toLowerCase() == "g") {
                
                return 7;

            } else if (aChar.toLowerCase() == "h") {
                
                return 8;
            } else if (aChar.toLowerCase() == "i") {
                
                return 9;

            } else if (aChar.toLowerCase() == "j") {
                
                return 10;

            } else if (aChar.toLowerCase() == "k") {
                
                return 11;

            } else if (aChar.toLowerCase() == "l") {
                
                return 12;
            } else if (aChar.toLowerCase() == "m") {
                
                return 13;
            } else if (aChar.toLowerCase() == "n") {
                
                return 14;
            } else if (aChar.toLowerCase() == "o") {
                
                return 15;
            } else if (aChar.toLowerCase() == "p") {
                
                return 16;
            } else if (aChar.toLowerCase() == "q") {
                
                return 17;
            } else if (aChar.toLowerCase() == "r") {
                
                return 18;
            } else if (aChar.toLowerCase() == "s") {
                
                return 19;
            } else if (aChar.toLowerCase() == "t") {
                
                return 20;
            } else if (aChar.toLowerCase() == "u") {
                
                return 21;
            } else if (aChar.toLowerCase() == "v") {
                
                return 22;
            }  else if (aChar.toLowerCase() == "w") {
                
                return 23;
            } else if (aChar.toLowerCase() == "x") {
                
                return 24;
            } else if (aChar.toLowerCase() == "y") {
                
                return 25;
            } else if (aChar.toLowerCase() == "z") {
                
                return 26;
            }  else {

                console.error("Non-alphabetical character found while converting.");

            }




        } else {

            console.error("An illegal data type was entered into the converter wordValue method!");

        }
    },
    wordValueSum: (theString) => {

        if(typeof theString === "string") {

            const aa = theString.split(" ").join("").split("");

            let sum = 0; 
            for (let a in aa) {
                sum +=  converter.wordValue(aa[a]);
            }
            return sum;

        } else {

            console.error("A non-string was entered into the converter wordValueSum method!");

        }

    } 

};

// network object

const networking = {

    // network JSON client method
    getJSON: (url,func)=>{


    },

    // network Ping method
    toPing: (ip, callback)=>{

    }

};




// selector function 

const $ = (...e) => { 

    
    if(typeof e[0] === "function") {
        
        document.addEventListener("DOMContentLoaded", e[0]);


    } else if (typeof e[0] === "string")  {

        return document.querySelector(e[0]);

        
    } else {

        console.error("An illegal use of the selector function has occurred!");

    }


};

// onRead document method 

document.onReady = (...e) => {

    if(typeof e[0] === "function") {
        
    addEventListener("DOMContentLoaded", e[0]);

    } else {

        console.error("An illegal use of the onReady document method has occurred!");

    }

} 

// onClick document method 

document.onClick = (...e) => {

    if(typeof e[0] === "function") {
        
    addEventListener("click", e[0]);

    } else {

        console.error("An illegal use of the onClick document method has occurred!");

    }

} 

// dbClick document method 

document.dbClick = (...e) => {

    if(typeof e[0] === "function") {
        
    addEventListener("dblclick", e[0]);

    } else {

        console.error("An illegal use of the dbClick document method has occurred!");

    }

} 

// onTap document method 

document.onTap = (...e) => {

    if(typeof e[0] === "function") {
        
    addEventListener("ontouchstart", e[0]);

    } else {

        console.error("An illegal use of the onTap document method has occurred!");

    }

} 


// onSwipe document method 

document.onSwipe = (...e) => {

    if(typeof e[0] === "function") {
        
    addEventListener("ontouchmove", e[0]);

    } else {

        console.error("An illegal use of the onSwipe document method has occurred!");

    }

} 


// toHide method


// toShow method


// addHTML method


// addText method



// findParent

// findParentId (Parent's Id)


// nextParent ( Parent's Sibling)

// nextParentId (Parent's Sibling Id)


// backParent  ( Parent's back Sibling)

// backParentId  ( Parent's back Sibling Id)


// nextSibling

// nextSiblingId

// backSibling

// backSiblingId


// textRed

// textBlue

// textGreen



// lFlout (float left)

// rFlout (float right)

// toCenter

// onReady

// onClick

// dbClick

// onTouch

// onSwipe