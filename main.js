noseX=0;
noseY=0;

function preload() {
    hat_head = loadImage('https://i.postimg.cc/Prs7yr0k/99-992230-black-hat-clip-art-at-clipart-fedora-hat-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }
    function gotPoses(results)
    {
        if(results.length > 0)
        {
            noseX = results[0].pose.nose.x-80; 
            noseY = results[0].pose.nose.y-170;
            console.log(results);
            console.log("nose x =" + results[0].pose.nose.x);
            console.log("nose y =" + results[0].pose.nose.y);
        }
    }

function draw(){
    image(video, 0, 0, 300, 300);
    image(hat_head, noseX, noseY, 150, 150);
}

function modelLoaded() {
console.log("PoseNet Is Intialized")
}

function take_snapshot(){
    save('Hatt Filter Image.png');
}