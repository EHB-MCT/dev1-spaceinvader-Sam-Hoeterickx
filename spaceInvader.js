"use strict";
import * as Utils from "./scripts/utils.js";
import context from "./scripts/context.js";

alert("Draw your space invader here");

drawBackground();

function drawBackground(){
    context.fillStyle = "Black";
    context.beginPath();
    context.rect(0, 0, 300, 300);
    context.fill();
}
