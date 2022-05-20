function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(160,160);
    canvas = createCanvas(550,500);
    canvas.position(860,160);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw(){
    background("#2bd6d6");
}
function modelLoaded(){
    console.log("pose net is initialised");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}