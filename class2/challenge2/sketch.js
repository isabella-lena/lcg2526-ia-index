let xMax = 400;
let yMax = 600;

let xUFO = xMax/2;
let yUFO = yMax*0.6;

function setup() {
  createCanvas(xMax, yMax);
}

function draw() {
  background("#034a84ff");
  // mostrare un testo bianco che dice le coordinate 
  // del mouse sul foglio da disegno
  fill(250); //bianco
  textSize (15);
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
  for (let i=0; i < 120; i++) {
    let starX = (i*37) % width + (i%3) * 5;
    let starY = ((i*73) % height) + (i*7);
    if (i % 3 == 0){
      // stella tipo a 
      fill(220, 255, 150);
      ellipse(starX, starY, 10);
      strokeWeight (0)
    } else if (i % 2 == 0) {
      //stella b
      fill(255, 200, 155);
      ellipse(starX, starY, 5);
    }else
    {//stella c
      fill(255, 255, 100);
      ellipse(starX, starY, 3);
    }
  }
  pop();
push ();
  fill (220);
  stroke (155);
  strokeWeight(3);
  ellipse (xUFO, yUFO, 190, 80, 10);
  fill(20, 190, 20);
  stroke(155);
  strokeWeight (3);
  ellipse (xUFO, yUFO-30, 90, 60, 30);
  fill (220);
  triangle(xUFO-70,yUFO+60, xUFO-50,yUFO+35, xUFO-40,yUFO+39);
  triangle(xUFO+70,yUFO+60, xUFO+50,yUFO+35, xUFO+40,yUFO+39);
  // finire contesto
  pop ();
// Movimento diagonale
xUFO += 3;      // velocità destra
yUFO -= 3;      // velocità su
// Se la xUFO è > di xMax+100 OPPURE se yUFO < -100
if (xUFO > xMax + 100 || yUFO < -100) { 
  xUFO = -190;            // completamente fuori a sinistra
  yUFO = yMax + 80;       // completamente sotto lo schermo
}

}