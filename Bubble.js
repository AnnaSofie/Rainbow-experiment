
class Bubble {

  constructor(){
    this.x = random(0, width);
    this.y = random(height + 400, height + 25);

}

update(){
  this.x += random(-1, 1);
  this.y -= 1;

/*if (this.y < -25){
  this.y = random(height + 400, height + 25);
  this.x = random(0, width);
}*/

}

show(){

  noFill();
  stroke(255);
  ellipse(this.x, this.y, 50, 50);

}
}
