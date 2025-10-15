
let scoreJoueur = 0;
let scoreOrdi = 0;

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
}