const valasztasok = {
    won: 0,
    lost: 0,
    userinput: 0,
    computerchoice: 0,
}
const winner = document.querySelector('.winner');
const Ko = () => {
    valasztasok.userinput = 1
    chooseEnemy();
}
const Papir = () => {
    valasztasok.userinput = 2
    chooseEnemy();
}
const Ollo = () => {
    valasztasok.userinput = 3
    chooseEnemy();
}
function Vesztes(){
    valasztasok.lost++;
    document.getElementById("cs").innerHTML = 'Gép: ' + valasztasok.lost;
   winner.textContent='Vesztettél :c';
}

function Nyertes(){
    valasztasok.won++;
    document.getElementById("ps").innerHTML = 'Te: ' + valasztasok.won;
    winner.textContent='Nyertél!! ^^';
}
function Dontetlen(){
    winner.textContent='Döntetlen :o';
}
const chooseEnemy = () => {

    valasztasok.computerchoice = Math.floor(Math.random() * 3) + 1;
    console.log(valasztasok.userinput, valasztasok.computerchoice)
    setTimeout(() => {}, 1000);
    
    if (valasztasok.userinput == valasztasok.computerchoice) {
        Dontetlen()
    }
    if(valasztasok.userinput == 1){
        if (valasztasok.computerchoice == 2) {
            Vesztes();
        }
        if (valasztasok.computerchoice == 3){
            Nyertes();
        }
    }
    if(valasztasok.userinput == 2){
        if (valasztasok.computerchoice == 3) {
            Vesztes();
        }
        if (valasztasok.computerchoice == 1){
            Nyertes();
        }
    }
    if(valasztasok.userinput == 3){
        if (valasztasok.computerchoice == 1) {
            Vesztes();
        }
        if (valasztasok.computerchoice == 2){
            Nyertes();
        }
    }
}
