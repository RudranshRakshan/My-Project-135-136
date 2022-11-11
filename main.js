objects = [];
Status = "";
input = "";

function preload() {
    sound = loadSound("alarm.wav");
}

function setup() {
    canvas = createCanvas(500, 380);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(500, 380);
    video.hide();
}

function draw() {
    image(video, 0, 0, 500, 380);
    if(Status){
    objectDetect.detect(video, gotResult);
    for (let i = 0; i < objects.length; i++) {
        if (objects[i].label == input) {
            fill("red")
            text(objects[i].label, 0, 0, 15);
            noFill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
    document.getElementById("Dstatus").innerHTML = "Detection Status: Completed";
            sound.play();
        }
        else {
            sound.stop();
        }
    }
    }
}

function start() {
    document.getElementById("Dstatus").innerHTML = "Detection Status: In Progress";
    objectDetect = ml5.objectDetector('cocossd', modelLoaded);
    input = document.getElementById("inp").value;
}

function modelLoaded() {
    Status=true;
    console.log('model is loaded');
    objectDetect.detect(video, gotResult);
    document.getElementById("Dstatus").innerHTML = "Detection Status: Detecting Objects";

}


function gotResult(error, result) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(result);
        objects = result;
    }
}