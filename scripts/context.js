"use strict";

/** @type {CanvasRenderingContext2D} */
let context;


getCanvasContext();

export default context;
//belangrijk dat deze export na de functie opvraag komt zodat de opgevraagde functie wordt geexporteerd

function getCanvasContext(){
    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext('2d');
}