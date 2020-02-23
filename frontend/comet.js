var particlePositionValue;
var trailDistance;
var keyTouched;

const w = 1920;
const h = 1080;



function setup() {
    createCanvas(w, h).parent("comet");
    system = new ParticleSystem(createVector(w / 2, 70));
    systemTrail = new ParticleSystem(createVector(w / 2, 70));
    particlePositionValue = createVector(20, 20); //Just setting
    trailDistance = 0.9;
    keyTouched = "";
}

function draw() {
    background(51);

    

    if (system) {
        document.addEventListener("keypress", function (key) {
            keyTouched = key;
        });

        system.addParticle();
        system.run();
    }


}


//Simple Paticle class
let Particle = function (position) {
    this.acceleration = createVector(0, 0.1);

    //this.velocity = createVector(2, 1);//Angular-V
    //this.position = particlePositionValue;
    this.velocity = createVector(1, 2);
    this.position = particlePositionValue;
    this.lifespan = 255;
}

Particle.prototype.run = function () {
    this.update();
    //this.display();
    this.displayTrail();
    this.display();
}

Particle.prototype.update = function () {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
}

Particle.prototype.display = function () {

    

    switch(keyTouched.key){
        case "q":
            particlePositionValue = createVector(random(0, 99), 20);
            fill(color(0, 0, 255));
        break;
        case "2":
            particlePositionValue = createVector(random(100, 199), 20);
            fill('#fae');
        break;
        case "w":
            particlePositionValue = createVector(random(200, 299), 20);
            fill('rgba(100%,0%,100%,0.5)');
        break;
        case "3":
            particlePositionValue = createVector(random(300, 399), 20);
            fill(240, 128, 128);
        break;
        case "e":
            particlePositionValue = createVector(random(400, 499), 20);
            fill(138, 222, 38);
        break;
        case "4":
            particlePositionValue = createVector(random(500, 599), 20);
            fill(38, 222, 214);
        break;
        case "r":
            particlePositionValue = createVector(random(600, 699), 20);
            fill(38, 222, 122);
        break;
        case "t":
            particlePositionValue = createVector(random(700, 799), 20);
            fill(165, 75, 28);
        break;
        case "6":
            particlePositionValue = createVector(random(800, 899), 20);
            fill(165, 28, 49);
        break;
        case "y":
            particlePositionValue = createVector(random(900, 999), 20);
            fill(165, 50, 28);
        break;
        case "7":
            particlePositionValue = createVector(random(1000, 1099), 20);
            fill(28, 165, 80);
        break;
        case "u":
            particlePositionValue = createVector(random(1100, 1199), 20);
            fill(165, 69, 28);
        break;
        case "8":
            particlePositionValue = createVector(random(1200, 1299), 20);
            fill(158, 116, 146);
        break;
        case "i":
            particlePositionValue = createVector(random(1300, 1399), 20);
            fill(146, 158, 116);
        break;
        case "9":
            particlePositionValue = createVector(random(1400, 1499), 20);
            fill(116, 158, 128);
        break;
        case "o":
            particlePositionValue = createVector(random(1500, 1599), 20);
            fill(114, 159, 227);
        break;
        case "0":
            particlePositionValue = createVector(random(1600, 1699), 20);
            fill(50, 62, 160);
        break;
        case "p":
            particlePositionValue = createVector(random(1700, 1799), 20);
            fill(160, 50, 62);
        break;
        case "-":
            particlePositionValue = createVector(random(1800, 1899), 20);
            fill(50, 62, 160);
        break;
        case "[":
            particlePositionValue = createVector(random(0, 99), 20);
            fill(50, 117, 160);
        break;
        case "]":
            particlePositionValue = createVector(random(100, 199), 20);
            fill(205, 216, 223);
        break;
    }

    stroke(200, this.lifespan);
    strokeWeight(2);
    //fill(127, this.lifespan);

    if (this.position.x > w) {
        this.position.x = 0;
    }
    ellipse(this.position.x, this.position.y, 12, 12);
}

Particle.prototype.displayTrail = function () {
    stroke(255, 170, 0);
    strokeWeight(1);
    fill(255, 170, 0);

    rect(random(this.position.x, this.position.x - 5), this.position.y * 0.98, 7, 7);
    rect(random(this.position.x, this.position.x - 10), this.position.y * 0.97, 6, 6);
    rect(random(this.position.x, this.position.x - 15), this.position.y * 0.96, 5, 5);
    rect(random(this.position.x, this.position.x - 20), this.position.y * 0.95, 4, 4);
    rect(random(this.position.x - 10, this.position.x - 25), this.position.y * 0.94, 4, 4);
    rect(random(this.position.x - 15, this.position.x - 30), this.position.y * 0.93, 4, 4);

}

Particle.prototype.isDead = function () {
    return this.lifespan < 0;
}


let ParticleSystem = function (position) {
    this.origin = position.copy();
    this.particles = [];
}

ParticleSystem.prototype.addParticle = function () {
    this.particles.push(new Particle(this.origin));
}

ParticleSystem.prototype.run = function () {
    for (let i = this.particles.length - 1; i >= 0; i--) {
        let p = this.particles[i];
        p.run();
        if (p.isDead()) {
            this.particles.splice(i, 1);
        }
    }
}


