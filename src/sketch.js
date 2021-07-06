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

    a = document.getElementById("a");
    s = document.getElementById("s");
    d = document.getElementById("d");
    j = document.getElementById("j");
    k = document.getElementById("k");
    l = document.getElementById("l");



    if (keyIsDown(65)) {
        a.style.animation = "rise 1s infinite";
    }
    else {
        a.style.webkitAnimationPlayState = "paused";
    }

    if (keyIsDown(83)) {
        s.style.animation = "rise 1s infinite";
    }
    else {
        s.style.webkitAnimationPlayState = "paused";
    }

    if (keyIsDown(68)) {
        d.style.animation = "rise 1s infinite";
    }
    else {
        d.style.webkitAnimationPlayState = "paused";
    }

    if (keyIsDown(74)) {
        j.style.animation = "rise 1s infinite";
    }
    else {
        j.style.webkitAnimationPlayState = "paused";
    }
    
    if (keyIsDown(75)) {
        k.style.animation = "rise 1s infinite";
    }
    else {
        k.style.webkitAnimationPlayState = "paused";
    }
    
    if (keyIsDown(76)) {
        l.style.animation = "rise 1s infinite";
    }
    else {
        l.style.webkitAnimationPlayState = "paused";
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

