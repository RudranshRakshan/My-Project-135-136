function preload(){

}

function setup(){
canvas=createCanvas(500,380);
canvas.center();

video=createCapture(VIDEO);
video.size(500,380);
video.hide();
}

function draw(){
image(video,0,0,500,380);
}

function start(){
    document.getElementById("Dstatus").innerHTML="Detection Status: In Progress";
    objectDetect=ml5.objectDetector('cocossd',modelLoaded);
}

function modelLoaded(){
    console.log('model is loaded');
    
}