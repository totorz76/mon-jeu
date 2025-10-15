

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
    console.log("Le joueur a choisi :", userChoice);
    console.log("L'ordinateur a choisi :", pcChoice);
    playGame (pcChoice, userChoice)    
} 



function playGame(pcChoice, userChoice){
    if (pcChoice === userChoice){
        console.log('Egalité !');
    }
    else if (
        (userChoice === "feu" && pcChoice === "terre") ||
        (userChoice === "eau" && pcChoice === "feu") ||
        (userChoice === "terre" && pcChoice === "feu")
    ) {
        console.log('Le Joueur a gagné !');
    } else {
        console.log("L'Ordinateur a gagné !");
    }
}
