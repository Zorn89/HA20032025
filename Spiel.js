// 1. Zufallszahl generieren
let zufallszahl = Math.floor(Math.random() * 10) + 1;
let versuche = 0;
let spielverlauf = document.getElementById("spielverlauf");

// 2. Funktion zum Überprüfen der Eingabe
function rateZahl() {
    versuche++;
    let spielerZahl = parseInt(document.getElementById("spielerZahl").value);

    if (isNaN(spielerZahl)) {
        document.getElementById("ergebnis").textContent = "Bitte gib eine gültige Zahl ein.";
        return;
    }

    if (spielerZahl > zufallszahl) {
        document.getElementById("ergebnis").textContent = "Die Zahl ist zu hoch :(!";
        spielverlauf.innerHTML += `<p>Versuch ${versuche}: ${spielerZahl} ist zu hoch.</p>`;
    } else if (spielerZahl < zufallszahl) {
        document.getElementById("ergebnis").textContent = "Die Zahl ist zu niedrig :(!";
        spielverlauf.innerHTML += `<p>Versuch ${versuche}: ${spielerZahl} ist zu niedrig.</p>`;
    } else {
        document.getElementById("ergebnis").textContent = `Hurra :)! Du hast die Zahl ${zufallszahl} in ${versuche} Versuchen erraten!`;
        spielverlauf.innerHTML += `<p>Hurra :)! Du hast die Zahl ${zufallszahl} in ${versuche} Versuchen erraten!</p>`;
        document.getElementById("rateButton").disabled = true;
    }

    document.getElementById("spielerZahl").value = "";
}

document.getElementById("rateButton").addEventListener("click", rateZahl);

document.getElementById("neuesSpielButton").addEventListener("click", function() {
    zufallszahl = Math.floor(Math.random() * 10) + 1;
    versuche = 0;
    document.getElementById("ergebnis").textContent = "";
    spielverlauf.innerHTML = "";
    document.getElementById("rateButton").disabled = false;
});