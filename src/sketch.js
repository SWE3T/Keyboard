function setup() {
    getAudioContext().suspend();
    userStartAudio();
    createCanvas(windowWidth, windowHeight);
    oscA = new p5.Oscillator('triangle');
    oscA.freq(82);
    oscS = new p5.Oscillator('triangle');
    oscS.freq(110);
    oscD = new p5.Oscillator('triangle');
    oscD.freq(146);
    oscJ = new p5.Oscillator('triangle');
    oscJ.freq(196);
    oscK = new p5.Oscillator('triangle');
    oscK.freq(246);
    oscL = new p5.Oscillator('triangle');
    oscL.freq(329);

    env = new p5.Envelope();

    a = document.getElementById("a");
    s = document.getElementById("s");
    d = document.getElementById("d");
    j = document.getElementById("j");
    k = document.getElementById("k");
    l = document.getElementById("l");
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }

    ellipse(mouseX, mouseY, 80, 80);
}

function keyPressed() {
    if (keyCode == 65) {
        oscA.amp(1);
        a.style.animation = "rise 1s infinite";
        playOscillator(oscA);
    }
    if (keyCode == 83) {
        oscS.amp(1);
        s.style.animation = "rise 1s infinite";
        playOscillator(oscS);
    }
    if (keyCode == 68) {
        oscD.amp(1);
        d.style.animation = "rise 1s infinite";
        playOscillator(oscD);
    }
    if (keyCode == 74) {
        oscJ.amp(1);
        j.style.animation = "rise 1s infinite";
        playOscillator(oscJ);
    }
    if (keyCode == 75) {
        oscK.amp(1);
        k.style.animation = "rise 1s infinite";
        playOscillator(oscK);
    }
    if (keyCode == 76) {
        oscL.amp(1);
        l.style.animation = "rise 1s infinite";
        playOscillator(oscL);
    }
    
    return false;
}

function keyReleased() {
    if (keyCode == 65) {
        a.style.webkitAnimationPlayState = "paused";
        oscA.amp(0, 1.5);
    }
    if (keyCode == 83) {
        s.style.webkitAnimationPlayState = "paused";
        oscS.amp(0, 1.25);
    }
    if (keyCode == 68) {
        d.style.webkitAnimationPlayState = "paused";
        oscD.amp(0, 1);
    }
    if (keyCode == 74) {
        j.style.webkitAnimationPlayState = "paused";
        oscJ.amp(0, 0.75);
    }
    if (keyCode == 75) {
        k.style.webkitAnimationPlayState = "paused";
        oscK.amp(0, 0.5);
    }
    if (keyCode == 76) {
        l.style.webkitAnimationPlayState = "paused";
        oscL.amp(0, 0.5);
    }
}

function playOscillator(osc) {
    osc.start();
    playing = true;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
