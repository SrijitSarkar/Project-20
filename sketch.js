var cat1, cat1_Image;
var cat2, cat2_Image;
var cat3, cat3_Image;
var cat4, cat4_Image;

var mouse1, mouse1_Image;
var mouse2, mouse2_Image;
var mouse3, mouse3_Image;
var mouse4, mouse4_Image;

var background, backgroundImage;

function preload() {
    cat1 = loadImage("cat1.png");
    cat2 = loadImage("cat2.png");
    cat3 = loadImage("cat3.png");
    cat4 = loadImage("cat4.png");

    mouse1 = loadImage("mouse1.png");
    mouse2 = loadImage("mouse2.png");
    mouse3 = loadImage("mouse3.png");
    mouse4 = loadImage("mouse4.png");

    background = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    background = createSprite(1000,800);
    background.addImage("garden", backgroundImage);

    cat1 = createSprite(200,200,50,50);
    cat1.scale = 0.3;
    cat1.addImage("cat1",cat1_Image);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
