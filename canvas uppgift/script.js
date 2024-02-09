const fishBodyColors = ["#31c4a0", "#ffcc00", "#ad33b9"];
const fishTailColors = ["#FF5733", "#48d1c4", "#79b7cd"];

let randomBodyColor = 0;
let randomTailColor = 0;
let randomFishSpeed = 2;
let randomFishY = 450;
let randomKelpLayer = 0;

const timeRef = null;
let fishBodyX = 120;
let fishBodyY = 450;
let fishEyeX = 170;
let fishTailX = -20;




//fishtail = 450
//fishbody = 450
//fisheye = 450 - 15

let cx = document.querySelector("canvas").getContext("2d");

animateFish();

function animateFish(){

    drawBackground();

    if(randomKelpLayer === 0){
        //KELP LAYER BEHIND
        drawKelp();
    }

    drawFish();

    if(randomKelpLayer === 1){
        //KELPLAYER FRONT
        drawKelp();
    }

    fishBodyX = fishBodyX + randomFishSpeed;
    fishEyeX = fishEyeX + randomFishSpeed;   
    fishTailX = fishTailX + randomFishSpeed;

    if(fishBodyX>1400){
        fishBodyX = -170;
        fishEyeX = -120;
        fishTailX = -310;
        randomBodyColor = Math.floor(Math.random()*3);
        randomTailColor = Math.floor(Math.random()*3);
        randomFishSpeed = Math.floor(Math.random()*3) + 2;
        randomFishY = Math.floor(Math.random()*500);
        randomKelpLayer = Math.floor(Math.random()*2);
        console.log(randomFishSpeed);
    }

    drawFrame();
}

setInterval(animateFish, 10);


function drawBackground(){
    //BACKGROUND
    cx.fillStyle = "#8090c2";
    cx.beginPath();
    cx.fillRect(50, 50, 1269, 600);
    cx.closePath();

    cx.beginPath();
    cx.fillStyle = "#c2b280";
    cx.fillRect(50, 600, 1270, 100);
    cx.closePath();

    cx.beginPath();
    cx.moveTo(0, 600);
    cx.lineTo(1370,600);
    cx.stroke();
    cx.closePath();
}

function drawFrame(){
    //UPPER FRAME
    cx.fillStyle = "#A1662F";
    cx.beginPath();
    cx.fillRect(0, 0, 1368, 50);
    cx.closePath();

    //BOTTOM FRAME
    cx.fillStyle = "#A1662F";
    cx.beginPath();
    cx.fillRect(0, 700, 1368, 50);
    cx.closePath();

    //LEFT FRAME
    cx.fillStyle = "#A1662F";
    cx.beginPath();
    cx.fillRect(0, 0, 50, 1368);
    cx.closePath();

    //RIGHT FRAME
    cx.fillStyle = "#A1662F";
    cx.beginPath();
    cx.fillRect(1318, 0, 50, 1368);
    cx.closePath();

    //INNER TOP LINE
    cx.beginPath();
    cx.moveTo(50, 50);
    cx.lineTo(1318, 50);
    cx.stroke();
    cx.closePath();

    //INNER RIGHT LINE
    cx.beginPath();
    cx.moveTo(1318, 50);
    cx.lineTo(1318, 700);
    cx.stroke();
    cx.closePath();

    //INNER BOTTOM LINE
    cx.beginPath();
    cx.moveTo(1318, 700);
    cx.lineTo(50, 700);
    cx.stroke();
    cx.closePath();

    //INNER LEFT LINE
    cx.beginPath();
    cx.moveTo(50, 700);
    cx.lineTo(50, 50);
    cx.stroke();
    cx.closePath();

    //OUTER TOP LINE
    cx.beginPath();
    cx.moveTo(0, 1);
    cx.lineTo(1368, 1);
    cx.stroke();
    cx.closePath();

    //OUTER RIGHT LINE
    cx.beginPath();
    cx.moveTo(1368, 1);
    cx.lineTo(1368, 750);
    cx.stroke();
    cx.closePath();

    //OUTER BOTTOM LINE
    cx.beginPath();
    cx.moveTo(1358, 749);
    cx.lineTo(1, 749);
    cx.stroke();
    cx.closePath();

    //OUTER LEFT LINE
    cx.beginPath();
    cx.moveTo(1, 749);
    cx.lineTo(1, 1);
    cx.stroke();
    cx.closePath();

    //SLANTED TOP LEFT
    cx.beginPath();
    cx.moveTo(0, 0);
    cx.lineTo(50, 50);
    cx.stroke();
    cx.closePath();

    //SLANTED TOP RIGHT
    cx.beginPath();
    cx.moveTo(1368, 0);
    cx.lineTo(1318, 50);
    cx.stroke();
    cx.closePath();

    //SLANTED BOTTOM RIGHT
    cx.beginPath();
    cx.moveTo(1368, 750);
    cx.lineTo(1318, 700);
    cx.stroke();
    cx.closePath();

    //SLANTED BOTTOM RIGHT
    cx.beginPath();
    cx.moveTo(0, 750);
    cx.lineTo(50, 700);
    cx.stroke();
    cx.closePath();
}

function drawFish(){
    //FISHBODY
    cx.fillStyle = fishBodyColors[randomBodyColor];
    cx.beginPath();
    cx.ellipse(fishBodyX, randomFishY, 50, 100, 4.7, 0, 10);
    cx.fill();
    cx.closePath();

    cx.fillStyle = fishBodyColors[randomBodyColor];
    cx.beginPath();
    cx.ellipse(fishBodyX, randomFishY, 50, 100, 4.7, 0, 10);
    cx.stroke();
    cx.closePath();

    //FISHHEADLINE
    cx.beginPath();
    cx.arc(fishBodyX + 50, randomFishY, 43, 0.5 * Math.PI, 1.5 * Math.PI);
    cx.stroke();
    cx.closePath();
    
    //FISHFINLOW
    cx.fillStyle = fishTailColors[randomTailColor];
    cx.beginPath();
    cx.ellipse(fishBodyX, randomFishY + 40, 15, 35, 4.3, 0, 10);
    cx.fill();
    cx.closePath();

    cx.beginPath();
    cx.ellipse(fishBodyX, randomFishY + 40, 15, 35, 4.3, 0, 10);
    cx.stroke();
    cx.closePath();

    //FISHFINHIGH
    cx.fillStyle = fishTailColors[randomTailColor];
    cx.beginPath();
    cx.ellipse(fishBodyX, randomFishY - 55, 5, 35, 4.9, 0, 10);
    cx.fill();
    cx.closePath();

    cx.beginPath();
    cx.ellipse(fishBodyX, randomFishY - 55, 5, 35, 4.9, 0, 10);
    cx.stroke();
    cx.closePath();

    //GILL1
    cx.beginPath();
    cx.arc(fishBodyX - 5, randomFishY - 5, 17, 0.5 * Math.PI, 1.5 * Math.PI);
    cx.stroke();
    cx.closePath();

    //GILL2
    cx.beginPath();
    cx.arc(fishBodyX + 5, randomFishY - 5, 16, 0.5 * Math.PI, 1.5 * Math.PI);
    cx.stroke();
    cx.closePath();

    //FISHTAIL
    cx.fillStyle = fishTailColors[randomTailColor];
    cx.beginPath();
    cx.ellipse(fishTailX, randomFishY, 50, 50, Math.PI * 0.5, 0, Math.PI, true);
    cx.fill();
    cx.closePath();
    
    cx.beginPath();
    cx.ellipse(fishTailX, randomFishY, 50, 50, Math.PI * 0.5, 0, Math.PI, true);
    cx.stroke();
    cx.closePath();

    //FISHEYE
    cx.beginPath();
    cx.arc(fishEyeX, randomFishY - 15, 10, 0, 2 * Math.PI);
    cx.fillStyle = "#FFFFFF";
    cx.fill();
    cx.closePath();
    
    cx.beginPath();
    cx.arc(fishEyeX, randomFishY - 15, 10, 0, 2 * Math.PI);
    cx.fillStyle = "#FFFFFF";
    cx.stroke();
    cx.closePath();

    cx.beginPath();
    cx.arc(fishEyeX, randomFishY - 15, 6, 0, 2 * Math.PI);
    cx.fillStyle = "black";
    cx.fill();
    cx.closePath();
}

function drawKelp(){
    cx.beginPath();
    cx.fillStyle = "#283B1F";
    cx.ellipse(200, 440, 25, 200, 0, 0, Math.PI * 2, false);
    cx.fill();
    cx.closePath();

    cx.beginPath();
    cx.fillStyle = "#FFFFFF";
    cx.ellipse(200, 440, 25, 200, 0, 0, Math.PI * 2, false);
    cx.stroke();
    cx.closePath();

    cx.beginPath();
    cx.fillStyle = "#283B1F";
    cx.ellipse(400, 420, 20, 200, 0, 0, Math.PI * 2, false);
    cx.fill();
    cx.closePath();

    cx.beginPath();
    cx.fillStyle = "#FFFFFF";
    cx.ellipse(400, 420, 20, 200, 0, 0, Math.PI * 2, false);
    cx.stroke();
    cx.closePath();

    cx.beginPath();
    cx.fillStyle = "#283B1F";
    cx.ellipse(250, 480, 25, 200, 0, 0, Math.PI * 2, false);
    cx.fill();
    cx.closePath();

    cx.beginPath();
    cx.fillStyle = "#FFFFFF";
    cx.ellipse(250, 480, 25, 200, 0, 0, Math.PI * 2, false);
    cx.stroke();
    cx.closePath();

    cx.beginPath();
    cx.fillStyle = "#283B1F";
    cx.ellipse(700, 470, 20, 200, 0, 0, Math.PI * 2, false);
    cx.fill();
    cx.closePath();

    cx.beginPath();
    cx.fillStyle = "#FFFFFF";
    cx.ellipse(700, 470, 20, 200, 0, 0, Math.PI * 2, false);
    cx.stroke();
    cx.closePath();
}

function drawHook(){
    cx.beginPath();

}

