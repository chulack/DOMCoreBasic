
"use strict";

/* 
    DOMCoreBasic.js
    Original build by Luke Christopher Chulack
    05/09/2021
    v0.1
*/


// converter object 
const converter = {

    
    // converter hash  method
    toHash: (text)=>{

    },

    // converter Binary  method
    toBin: (text)=>{

    },

    // converter Hexadecimal   method
    toHex:(text)=>{

    },
    // converter Word value method
    wordValue: (aChar) => {

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

// onTouch document method 

document.onTouch = (...e) => {

    if(typeof e[0] === "function") {
        
    addEventListener("ontouchstart", e[0]);

    } else {

        console.error("An illegal use of the onTouch document method has occurred!");

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


// onClick

// dbClick

// onTouch

// onSwipe