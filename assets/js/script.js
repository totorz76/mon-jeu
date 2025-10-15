

function powerPc(){
    const element = ["feu", "eau" , "terre"]
    const index = Math.floor(Math.random() * element.length);
    return element[index];
}
powerPc()
console.log(powerPc());


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
    powerPlayer(button.id);
    })
})

function powerPlayer(userChoice){
    console.log("Le joueur a choisi :", userChoice);
} 