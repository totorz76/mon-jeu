

function powerPc(){
    const element = ["feu", "eau" , "terre"]
    const index = Math.floor(Math.random() * element.length);
    return element[index];
}
powerPc()
console.log(powerPc());


