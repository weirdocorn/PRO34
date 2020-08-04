var dog, happyDog, database, foodS, foodStock;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  dogImg2 = loadImage("image/dogImg2.png");
}

function setup() {
  createCanvas(500,500);
  dog = createSprite(250,475);
  dog.addImage(dogImg);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87);
  
  if(KeyWentDown){
    writeStock(foodS);
    dog.addImage(dogImg2);
  }

  drawSprites();

  strokeWeight(225,225,225);
  text("Bottles left = "+foodStock,250,100);
  //add styles here
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}