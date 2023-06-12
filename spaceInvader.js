"use strict";
import * as Utils from "./scripts/utils.js";
import context from "./scripts/context.js";
/* 
alert("Draw your space invader here"); */

drawBackground();
drawAvatar();
function drawBackground(){
    context.fillStyle = "Black";
    context.beginPath();
    context.rect(0, 0, 300, 300);
    context.fill();
}

function drawAvatar(){
    context.fillStyle = "#66ff00";
    //links boven
    context.fillRect(25, 75, 50, 50);
    context.fillRect(75, 25, 50, 50);
    //rechts boven
    context.fillRect(225, 75, 50, 50);
    context.fillRect(175, 25, 50, 50);
    //midden
    context.fillRect(125, 125, 50, 50);
    context.fillRect(75, 125, 50, 50);
    context.fillRect(175, 125, 50, 50);
    context.fillRect(125, 175, 50, 50);
    //links onder
    context.fillRect(25, 175, 50, 50);
    context.fillRect(25, 225, 50, 50);
    context.fillRect(75, 175, 50, 50);
    context.fillRect(75, 225, 50, 50);
    //Rechts onder
    context.fillRect(225, 175, 50, 50);
    context.fillRect(225, 225, 50, 50);
    context.fillRect(175, 175, 50, 50);
    context.fillRect(175, 225, 50, 50);
}