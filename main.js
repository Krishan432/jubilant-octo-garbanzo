difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(450, 250);
    canvas = createCanvas(900, 500);
    canvas.position(560, 119);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#800000');
    textSize(difference)
    fill("green")
    text("Krishan", 15, 400);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized.')
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX --> " + leftWristX + "rightWristX -->" + rightWristX + "difference --> " + difference);
    }
}