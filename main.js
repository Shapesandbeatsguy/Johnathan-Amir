var status = '';
var objects =[];
function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Object detecting";
}
function modelLoaded(){
    console.log('model is loaded');
    status = true;
    objectdetector.detect(img,gotResults);
}
function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}
function preload(){
    img = loadImage("bedroom.jpg");
}
function draw(){
    image(img,0,0,500,500);
    if (status != ""){
        for (i = 0;i<objects.length;i++){
            document.getElementById("status").innerHTML = "status : object detected";
            fill('#ffffff00')
            percent = floor(objects[i].confidence*100)
            text(objects[i].label +" "+percent+"%" ,objects[i].x,objects[i].y)
            noFill()
            stroke('magenta')
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}
function back(){
    window.location = 'fruit.html';
}