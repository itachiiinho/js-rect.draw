function setup() {
    createCanvas(800, 800);
     background("black");
  
  }
  
  function draw() {
  
  
    stroke("vine");
    fill("blue");
  
    //console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 50, 80);
    }
  }
  