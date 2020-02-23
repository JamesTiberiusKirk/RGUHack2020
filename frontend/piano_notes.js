var synth = new Tone.Synth().toMaster()

synth.oscillator.type = "sine";
synth.toMaster();

document.addEventListener("keydown", keyBinds, false);
document.addEventListener("keyUp", e => {
    switch(e.key) {
        case "q":
        case "2":
        case "w":
        case "3":
        case "e":
        case "4":
        case "r":
        case "t":
        case "6":
        case "y":
        case "7":
        case "u":
        case "8":
        case "i":
        case "9":
        case "o":
        case "0":
        case "p":
        case "-":
        case "[":
        case "]":
            synth.triggerRelease();
            break;
    }
});


function keyBinds(key) {
    var notes = [
        "F4",
        "F4SH",
        "G4",
        "G4SH",
        "A4",
        "A4SH",
        "B4",
        "C5",
        "C5SH",
        "D5",
        "D5SH",
        "E5",
        "F5",
        "F5SH",
        "G5",
        "G5SH",
        "A5",
        "A5SH",
        "B5",
        "C6"
    ];

    if (key.keyCode == "81") {
        synth.triggerAttack(notes[0]);
    } else if (key.keyCode == "50") {
        synth.triggerAttack(notes[1]);
    } else if (key.keyCode == "87") {
        synth.triggerAttack(notes[2]);
    } else if (key.keyCode == "51") {
        synth.triggerAttack(notes[3]);
    } else if (key.keyCode == "69") {
        synth.triggerAttack(notes[4]);
    } else if (key.keyCode == "52") {
        synth.triggerAttack(notes[5]);
    } else if (key.keyCode == "82") {
        synth.triggerAttack(notes[6]);
    } else if (key.keyCode == "84") {
        synth.triggerAttack(notes[7]);
    } else if (key.keyCode == "54") {
        synth.triggerAttack(notes[8]);
    } else if (key.keyCode == "y") {
        synth.triggerAttack(notes[9]);
    } else if (key.keyCode == "55") {
        synth.triggerAttack(notes[10]);
    } else if (key.keyCode == "85") {
        synth.triggerAttack(notes[11]);
    } else if (key.keyCode == "73") {
        synth.triggerAttack(notes[12]);
    } else if (key.keyCode == "57") {
        synth.triggerAttack(notes[13]);
    } else if (key.keyCode == "79") {
        synth.triggerAttack(notes[14]);
    } else if (key.keyCode == "48") {
        synth.triggerAttack(notes[15]);
    } else if (key.keyCode == "80") {
        synth.triggerAttack(notes[16]);
    } else if (key.keyCode == "189") {
        synth.triggerAttack(notes[17]);
    } else if (key.keyCode == "219") {
        synth.triggerAttack(notes[18]);
    } else if (key.keyCode == "221") {
        synth.triggerAttack(notes[19]);
    } else if (key.keyCode == false) {
        return;
    }
}

