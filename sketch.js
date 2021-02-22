var dog,happydog;
var database
var foodS
var foodStock

function preload()
{
	dogImage=loadImage("dogImg.png")
  background(46,139,87)
}

function setup() {
	createCanvas(500, 500);
  
}


function draw() {  
  var dog = createSprite(200,300)
  

  if(KeyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(doghappy);
  }
  
  drawSprites();
  text(arial)
  textSize(15)
  fill(black)
}

function readStock(data){
  foodS=data.val();
}


function writeStock(x){
  database.ref("/").update({
   if(x<=0){
     x=0;
   }else{
     x=x-1
   }
   

    Food:x
  })
}



