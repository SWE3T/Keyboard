function setup() {
    context = new AudioContext();
    createCanvas(windowWidth, windowHeight);
    osc = new p5.TriOsc();
    env = new p5.Envelope();
    osc.start();
    osc.amp(0);
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
        context.resume().then(() => {
            console.log('Playback resumed successfully');
        });
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
        playNote(90);
    }
    else {
        a.style.webkitAnimationPlayState = "paused";
        stopNote();
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

// function keyPressed() {
//     switch (keyCode) {
//         case 65:
//             playNote(30);
//             console.log("a");
//             break;
//         case 83:
//             playNote(45);
//             break;
//         case 68:
//             playNote(60);
//             break;
//     }
// }


function playNote(note) {
    osc.freq(note);
}

function stopNote() {
    osc.fade(0, 0.5);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

