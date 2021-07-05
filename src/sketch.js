function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

var square;

function keyPressed() {
    if (keyIsDown(65)) {
        square = document.getElementById("a");
        square.style.animation = "rise 1s 1";
    } 
    if (keyIsDown(83)) {
        square = document.getElementById("s");
        square.style.animation = "rise 1s 1";
    }
    if (keyIsDown(68)) {
        square = document.getElementById("d");
        square.style.animation = "rise 1s infinite";
    }
    if (keyIsDown(74)) {
        square = document.getElementById("j");
        square.style.animation = "rise 1s infinite";
    }
    if (keyIsDown(75)) {
        square = document.getElementById("k");
        square.style.animation = "rise 1s infinite";
    }
    if (keyIsDown(76)) {
        square = document.getElementById("l");
        square.style.animation = "rise 1s infinite";
    }
    else if (keyCode === RIGHT_ARROW) {
        background(155);
    }
}

function keyReleased() {
    square.style.animation = "still 0.1s 1";
    return false; // prevent any default behavior
}

