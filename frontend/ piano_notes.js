var synth = new Tone.Synth().toMaster()




document.addEventListener("keypress", keyBinds, false);
//document.addEventListener("keydown", keyRelease)


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
        return synth.triggerRelease(notes[0]);
    } else if (key.keyCode == "50") {
        return synth.triggerAttackRelease(notes[1]);
    } else if (key.keyCode == "87") {
        return synth.triggerAttackRelease(notes[2]);
    } else if (key.keyCode == "51") {
        return synth.triggerAttackRelease(notes[3]);
    } else if (key.keyCode == "69") {
        return synth.triggerAttackRelease(notes[4]);
    } else if (key.keyCode == "52") {
        return synth.triggerAttackRelease(notes[5]);
    } else if (key.keyCode == "82") {
        return synth.triggerAttackRelease(notes[6]);
    } else if (key.keyCode == "84") {
        return synth.triggerAttackRelease(notes[7]);
    } else if (key.keyCode == "54") {
        return synth.triggerAttackRelease(notes[8]);
    } else if (key.keyCode == "89") {
        return synth.triggerAttackRelease(notes[9]);
    } else if (key.keyCode == "55") {
        return synth.triggerAttackRelease(notes[10]);
    } else if (key.keyCode == "85") {
        return synth.triggerAttackRelease(notes[11]);
    } else if (key.keyCode == "73") {
        return synth.triggerAttackRelease(notes[12]);
    } else if (key.keyCode == "57") {
        return synth.triggerAttackRelease(notes[13]);
    } else if (key.keyCode == "79") {
        return c(notes[14]);
    } else if (key.keyCode == "48") {
        return synth.triggerAttackRelease(notes[15]);
    } else if (key.keyCode == "80") {
        return synth.triggerAttackRelease(notes[16]);
    } else if (key.keyCode == "189") {
        return synth.triggerAttackRelease(notes[17]);
    } else if (key.keyCode == "219") {
        return synth.triggerAttackRelease(notes[18]);
    } else if (key.keyCode == "221") {
        return synth.triggerAttackRelease(notes[19]);
    } else  if(key.keyCode == "222"){
        return null;
    }
}




