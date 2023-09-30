console.log("Classificador de Herói");

let nomeHeroi = "Goku";
let xpHeroi = 20000;
let classificacaoHeroi;

if (xpHeroi <= 1000) {
    classificacaoHeroi = "Ferro";
} else if (xpHeroi > 1000 && xpHeroi <= 2000) {
    classificacaoHeroi = "Bronze";
} else if (xpHeroi > 2000 && xpHeroi <= 5000) {
    classificacaoHeroi = "Prata";
} else if (xpHeroi > 5000 && xpHeroi <= 7000) {
    classificacaoHeroi = "Ouro";
} else if (xpHeroi > 7000 && xpHeroi <= 8000) {
    classificacaoHeroi = "Platina";
} else if (xpHeroi > 8000 && xpHeroi <= 9000) {
    classificacaoHeroi = "Ascendente";
} else if (xpHeroi > 9000 && xpHeroi <= 10000) {
    classificacaoHeroi = "Imortal";
} else {
    classificacaoHeroi = "Radiante";
}

console.log("O Herói de nome " + nomeHeroi + " está no nível " + classificacaoHeroi + ".");