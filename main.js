nose_x=0
nose_y=0
function preload(){    
    Mustach =
    loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
    }
}
function draw(){
    image(video, 0, 0, 500, 500 );
   image(Mustach, nose_x -13, nose_y-10, 35, 35);
}
function take_snapshot(){
    save('Filter.png')
}