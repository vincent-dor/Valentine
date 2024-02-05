const phrases = [
  "Tu es sûre?",
  "Vraiment sûre?",
  "Réfléchis encore!",
  "Dernière chance!",
  "Vraiment pas?",
  "Tu vas le regretter!",
  "Penses-y encore!",
  "Es-tu vraiment certaine?",
  "C'est probablement une erreur!",
  "Sois honnête!",
  "Ne sois pas froide!",
  "Change d'avis!",
  "Peux-tu y repenser?",
  "C'est ta réponse finale?",
  "Tu me fends le coeur ;(",
];

let noButtonClickCount = 0;

function changeNoButtonText() {
  const noButton = document.getElementById("noButton");
  noButton.innerText = phrases[noButtonClickCount];
  noButtonClickCount = (noButtonClickCount + 1) % phrases.length;

  const yesButton = document.getElementById("yesButton");
  enlargeYesButton(yesButton);
}
function celebrateYes() {
  const body = document.body;
  body.innerHTML = "";

  const newGif = document.createElement("img");
  newGif.id = "valentineImage";
  newGif.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
  newGif.alt = "Youpi Gif";
  body.appendChild(newGif);

  const newTitle = document.createElement("h1");
  newTitle.innerText = "Oui Youpi!!!";
  body.appendChild(newTitle);

  const yesButton = document.createElement("button");
  yesButton.id = "yesButton";
  yesButton.onclick = function () {
    celebrateYes();
    enlargeYesButton(yesButton);
    hideButtons();
  };
  body.appendChild(yesButton);

  const noButton = document.createElement("button");
  noButton.id = "noButton";
  noButton.onclick = changeNoButtonText;
  body.appendChild(noButton);

  hideButtons();

  // Ajoutez le bouton "Recommencer"
  const restartButton = document.createElement("button");
  restartButton.id = "restartButton";
  restartButton.innerText = "Recommencer";
  restartButton.onclick = function () {
    location.reload(); // Recharge la page pour recommencer
  };
  body.appendChild(restartButton);
}

function enlargeYesButton(button) {
  if (button.id === "yesButton") {
    button.style.fontSize = (parseInt(button.style.fontSize) || 16) + 16 + "px";
  }
}

function hideButtons() {
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");

  if (yesButton && noButton) {
    yesButton.style.display = "none";
    noButton.style.display = "none";
  }
}
