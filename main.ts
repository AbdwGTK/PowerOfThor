var inputs: string[] = readline().split(' ');
const LX: number = parseInt(inputs[0]);
const LY: number = parseInt(inputs[1]);
const TX: number = parseInt(inputs[2]);
const TY: number = parseInt(inputs[3]);
let ThorX: number = TX
let ThorY: number = TY
let DirX: string = ""
let DirY: string = ""

const Ymovment = () => {
    if (ThorY != LY){
    if (TY > LY) {DirY="N"; --ThorY}  else {DirY="S"; ++ThorY} 
    } else {DirY = ""}}
const Xmovment = () => {
    if (ThorX != LX){
        if (TX > LX) {DirX="W"; --ThorX}  else {DirX="E"; ++ThorX} 
    }
    else {DirX = ""}}

while (true) {
    const remainingTurns: number = parseInt(readline());
    Xmovment()
    Ymovment()
    console.log(DirY+DirX)
}
