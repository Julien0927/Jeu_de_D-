//alert("le script fonctionne")
//vérification de fonctionnement du fichier "script.js"
function rollDice() {
    let dice = document.getElementById("dice");
    let result = Math.floor(Math.random() * 6) + 1;
    dice.innerHTML = result;
    dice.classList.add("rolling");
    setTimeout(function() {
      dice.classList.remove("rolling");
    }, 1000);
  }
  