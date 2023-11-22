let nomeHeroi = "Gon"
let xpNivel = 6500
let nivel = ""

if(xpNivel < 1000){
  xpNivel = "Ferro"
}else if(xpNivel >1001 && xpNivel < 2000){
  xpNivel = "Bronze"
}else if(xpNivel > 2001 && xpNivel < 5000){
  xpNivel = "Prata"
}else if(xpNivel > 6001 && xpNivel < 7000){
  xpNivel = "Ouro"
}else if(xpNivel > 7001 && xpNivel < 8000){
  xpNivel = "Platina"
}else if(xpNivel > 8001 && xpNivel < 9000){
  xpNivel = "Ascendente"
}else if(xpNivel > 9001 && xpNivel < 10000){
  xpNivel = "Imortal"
}else if(xpNivel >= 10001){
  xpNivel = "Radiante"
}

console.log("O Herói " + nomeHeroi + "está no nível " + xpNivel)