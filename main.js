function preload()
{
}

function setup()
{
    canvas=createCanvas(550,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modeloaded);
posenet.on('poses',gotPoses);
}


function draw()
    {
image(video,0,0,600,500);
fill('#90ee90');
stroke('#ffb6c1');
    }


    function modeloaded()
    {
        console.log('Posenet is initialized');
    }


    function gotPoses(results)
{
    if(results.length > 0 );
    {
        console.log(results);
        leftwristX=results[0].pose.leftwrist.x;
leftwristY=results[0].pose.leftwrist.y;
console.log("leftwristX = " + leftwristX + "leftwristY = " + leftwristY );
    }
}
