
let scoreJoueur = 0;
let scoreOrdi = 0;
const scoreMax = 10;
let endGame = false;

function powerPc(){
    const element = ["feu", "eau" , "terre"]
    const index = Math.floor(Math.random() * element.length);
    return element[index];
}
powerPc()

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
    powerPlayer(button.id);
    })
})

function powerPlayer(userChoice){
    if (endGame) return;
    // au moment de notre choix il faut que le pc choisisse (donc la const en dessous), puis on annonce les choix et après on appelle la fonction qui permet de définir les règles du jeu
    const pcChoice = powerPc()
    console.log("Le joueur a choisi : ",userChoice);
    choixUser = userChoice

    console.log("L'ordinateur a choisi : ",pcChoice);
    choixPc = pcChoice

    document.getElementById("choixUser").textContent = choixUser;
    document.getElementById("choixPc").textContent = choixPc;
    playGame (pcChoice, userChoice)    
} 

function playGame(pcChoice, userChoice){
    let resultat = "";
    if (pcChoice === userChoice){
        resultat = "Egalité !"
        console.log('Egalité !');
    }
    else if (
        (userChoice === "feu" && pcChoice === "terre") ||
        (userChoice === "eau" && pcChoice === "feu") ||
        (userChoice === "terre" && pcChoice === "eau")
    ) {
         resultat = "Le Joueur a gagné !";
         scoreJoueur++;
        console.log('Le Joueur a gagné !');
    } else {
         resultat = "L'Ordinateur a gagné !";
         scoreOrdi++;
        console.log("L'Ordinateur a gagné !");
    }
    document.getElementById("resultat").textContent = "Résultat : "+ resultat;

    document.getElementById("score-joueur").textContent = scoreJoueur
    document.getElementById("score-ordi").textContent = scoreOrdi

    if (scoreJoueur === scoreMax){
        winner = "Le Joueur !";
        endGame = true;
    } else if (scoreOrdi === scoreMax) {
        winner = "L'Ordinateur !";
        endGame = true;
    }
    if (endGame){
        document.getElementById("winner").textContent ="Le gagnant du round est : "+ winner;
         document.querySelectorAll(".btnchx").forEach(btn => {
            btn.disabled = true;
         })
    }
    
}

document.getElementById("reset").addEventListener("click", () =>{
    document.querySelectorAll(".btnchx").forEach(btn => {
    btn.disabled = false;
    });
    scoreJoueur = 0;
    scoreOrdi = 0;

    document.getElementById("score-joueur").textContent = "0";
    document.getElementById("score-ordi").textContent = "0";
    document.getElementById("choixUser").textContent = "?";
    document.getElementById("choixPc").textContent = "?";
    document.getElementById("resultat").textContent = "Résultat : ";
    document.getElementById("winner").textContent = "";
    }
)