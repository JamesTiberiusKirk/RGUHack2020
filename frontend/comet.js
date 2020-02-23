var particlePositionValue;
var trailDistance;

const w = 1920;
const h = 1080;



function setup() {
  createCanvas(w, h).parent("comet");
  system = new ParticleSystem(createVector(w/2, 70));
  systemTrail = new ParticleSystem(createVector(w/2, 70));
  particlePositionValue = createVector(20,20); //Just setting
  trailDistance = 0.9;
}

function draw() {
  background(51);
  
  particlePositionValue = createVector(random(0, w), 20);
  
  if(system){
    document.addEventListener("keypress", function(key) {
        console.log(key);
    });
    system.addParticle();
    system.run();
  }
  

}


//Simple Paticle class
let Particle = function(position){
  this.acceleration = createVector(0, 0.1);

  //this.velocity = createVector(2, 1);//Angular-V
  //this.position = particlePositionValue;
  this.velocity = createVector(1, 2);
  this.position = particlePositionValue;
  this.lifespan = 255;
}

Particle.prototype.run = function(){
  this.update();
  //this.display();
  this.displayTrail();
  this.display();
}

Particle.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
}

Particle.prototype.display = function(){
  stroke(200, this.lifespan);
  strokeWeight(2);
  fill(127, this.lifespan);

  if (this.position.x > w){
    this.position.x = 0;
  }
  ellipse(this.position.x, this.position.y, 12, 12);
}

Particle.prototype.displayTrail = function(){
  stroke(200, this.lifespan);
  strokeWeight(2);
  fill(127, this.lifespan);
  
  rect(random(this.position.x, this.position.x-5), this.position.y * 0.98,7 ,7);
  rect(random(this.position.x, this.position.x -10), this.position.y * 0.97,6 ,6);
  rect(random(this.position.x, this.position.x-15), this.position.y * 0.96,5 ,5);
  rect(random(this.position.x ,this.position.x-20), this.position.y * 0.95,4 ,4);
  rect(random(this.position.x-10 ,this.position.x-25), this.position.y * 0.94,4 ,4);
  rect(random(this.position.x-15,this.position.x-30), this.position.y * 0.93,4 ,4);
  
}

Particle.prototype.isDead = function() {
  return this.lifespan < 0;
}


let ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
}

ParticleSystem.prototype.addParticle = function(){
  this.particles.push(new Particle(this.origin));
}

ParticleSystem.prototype.run = function() {
  for (let i = this.particles.length - 1; i >= 0; i--){
    let p = this.particles[i];
    p.run();
    if(p.isDead()){
      this.particles.splice(i, 1);
    }
  }
}


