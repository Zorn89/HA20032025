// 1. Zufallszahl generieren
let zufallszahl = Math.floor(Math.random() * 10) + 1;
let versuche = 0;

// 2. Funktion zum Überprüfen der Eingabe
function rateZahl() {
  versuche++;
  // Eingabe des Spielers abrufen
  let spielerZahl = parseInt(document.getElementById("spielerZahl").value);

  // Überprüfen, ob die Eingabe eine Zahl ist
  if (isNaN(spielerZahl)) {
    document.getElementById("ergebnis").textContent = "Bitte gib eine gültige Zahl ein.";
    return;
  }

  // 3. Überprüfen, ob die Zahl zu hoch, zu niedrig oder richtig ist
  if (spielerZahl > zufallszahl) {
    document.getElementById("ergebnis").textContent = "Die Zahl ist zu hoch!";
  } else if (spielerZahl < zufallszahl) {
    document.getElementById("ergebnis").textContent = "Die Zahl ist zu niedrig!";
  } else {
    // 4. Glückwunsch-Nachricht anzeigen
    document.getElementById("ergebnis").textContent = `Herzlichen Glückwunsch! Du hast die Zahl ${zufallszahl} in ${versuche} Versuchen erraten!`;
  }
}