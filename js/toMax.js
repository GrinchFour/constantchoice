function setFontSize() {
    var rng = document.getElementById('fSize');
    var oP = document.getElementById('ourPatient');

    if (rng.value < 8) rng.value = 8;
    if (rng.value > 64) rng.value = 64;

    oP.style.fontSize = rng.value + 'pt';
}

function setFontFamily() {
    var rng = document.getElementById('fFamily');
    var oP = document.getElementById('ourPatient');
    oP.style.fontFamily = rng.value;
}