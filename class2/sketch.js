let xMax = 400;
let yMax = 600;

let xRocket = xMax/2;
let yRocket = yMax*0.6;

let table;
let star_img;

function preload () {
  table = loadTable("stars.csv", "csv", "header");
  star_img = loadImage("star.jpeg");
}

function setup() {
  createCanvas(xMax, yMax);
}

function drawSingleStarFromFile (index, posX, posY) {
  let starSize = table.getNum(index, "starSize")
  image(star_img, posX, posY, starSize, starSize);
}

function drawStarsFromFile() {
  for(let k = 0; k < table.getRowCount(); k++) {
    let starX = (k*37) % width + (k%3) * 5;
    let starY = (k*73) % height + (k%7);

    drawSingleStarFromFile(k, starX, starY);
  }
  }

function drawStar(i, starX, starY, random_transparency, random_size) {
  if (i % 3 == 0){
      // stella tipo a 
      fill(255, 255, 150, random_transparency);
      ellipse(starX, starY, random_size);
    } else if (i % 2 == 0) {
      //stella b
      fill(255, 200, 155, random_transparency);
      ellipse(starX, starY, random_size);
    }else
    {//stella c
      fill(255, 255, 100, random_transparency);
      ellipse(starX, starY, random_size);
    }
    return;
}

function drawStars(num_stars=120) {
  for(let i=0; i<num_stars; i++) {
    let starX = (i*37) % width + (i%3) *5;
    let starY = (i*73) % height + (i%7);

    let random_transparency = random (150, 255);
    let random_size = random (0, 0, 15.0);
  }
}
function drawRocket(xRocket, yRocket) {
  fill (220);
  stroke (155);
  strokeWeight(3);
  rectMode (CENTER)
  rect (xRocket, yRocket, 80, 180, 20);
  // pop();
  //triangolo
  fill(200, 100, 20);
  stroke(155);
  strokeWeight (3);
  triangle(xRocket-40,yRocket -90, xRocket+40,yRocket-90, xRocket,yRocket-150);
  //cerchio
  fill (40, 150, 230);
  stroke(255);
  strokeWeight(3);
  ellipse(xRocket, yRocket-30, 48, 48);
  fill(200, 100, 20);
  stroke(155);
  strokeWeight (3);
  triangle(xRocket-70,yRocket+150, xRocket-20,yRocket+90, xRocket-40,yRocket+50);
  triangle(xRocket+70,yRocket+150, xRocket+20,yRocket+90, xRocket+40,yRocket+50);
  strokeWeight(0);
  fill("#fcd90eff")
  triangle(xRocket+60,yRocket+150, xRocket+20,yRocket+90, xRocket+10,yRocket+90);
  triangle(xRocket-60,yRocket+150, xRocket-20,yRocket+90, xRocket-10,yRocket+90);
  fill("#1ec6f0ff")
  triangle(xRocket-40,yRocket+170, xRocket, yRocket+90, xRocket-10,yRocket+90);
  triangle(xRocket+40,yRocket+170, xRocket, yRocket+90, xRocket+10,yRocket+90);
  fill("#291cdcff")
  triangle(xRocket-10,yRocket+200, xRocket+5, yRocket+90, xRocket-5,yRocket+90);
  triangle(xRocket+10,yRocket+200, xRocket-5, yRocket+90, xRocket+5,yRocket+90);
}

function moveRocket (yRocket, step=1) {
  yRocket = yRocket -step;
  let soglia =-(yMax * 0.5);
  if (yRocket < soglia) {
    yRocket = yMax;
  }
  return yRocket;
}

function draw() {
  background("#00203aff");
  // mostrare un testo bianco che dice le coordinate 
  // del mouse sul foglio da disegno
  fill(250); //bianco
  textSize (20);
  //stringa, x, y
  text ("mouseX: " + mouseX + ",  mouseY: " + mouseY, 20, 20);
  // aprire contesto di disegno
  
  //disegnare le stelle
  //120
  // tre tipi di stelle a, b, c
  //fino a che abbiamo 120 stelle
  //stelle ellipse
  push();
  //un unico ciclo 
  // creare una sequenza per fare a, b, c
  /*for (let i=0; i < 120; i++) {
    let starX = (i*37) % width + (i%3) * 5;
    let starY = ((i*73) % height) + (i*7);

    let random_x = random(0,width);
    let random_y = random(0,height);

    random_transparency = random(150, 255);
    random_size = random (2.0, 5.0)
  
    drawStar(i, starX, starY, random_transparency, random_size)
  }*/
 //drawStars(100)
 drawStarsFromFile();
  pop();
  drawRocket(xRocket, yRocket);
  /*yRocket = (yRocket -1) % yMax;
  // quando yRocket sarà oltre una certa
  //soglia allora dovremo resettare la y
  // del razzo
  let soglia = - yMax * 0.6; 
  if (yRocket < soglia )
    yRocket = yMax;*/
  yRocket = moveRocket(yRocket,1)
}