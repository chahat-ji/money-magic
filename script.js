let paisa = 18499260000000;
document.getElementById("money").innerHTML = paisa;

let iphone = 0;
let fortuner = 0;
let ninja = 0;
let ipl = 0;
let rolls = 0;
let pent = 0;
let rolex = 0;
let pc = 0;
let mla = 0;
let antilia = 0;

const buySound = new Audio();
buySound.src ="./resources/MONEY SOUND EFFECT .mp3";



function buyIphone(){
     buySound.play();
     if(paisa < 180000){
          alert("Need more money");
          return;
     }
     paisa -= 180000;
     document.getElementById("money").innerHTML = paisa;

     iphone++;
     document.getElementById("iphone-num").innerHTML = iphone;
     let audio = document.getElementById("sound");
     audio.play();
}
function sellIphone(){
     buySound.play();
     if(iphone ==0){
          alert("First Buy It");
          return;
     }
     paisa += 180000;
     document.getElementById("money").innerHTML = paisa;

     iphone--;
     document.getElementById("iphone-num").innerHTML = iphone;
}


function buyfortuner(){
     buySound.play();
     if(paisa < 6000000){
          alert("Need more money");
          return;
     }
     paisa -= 6000000;
     document.getElementById("money").innerHTML = paisa;

     fortuner++;
     document.getElementById("fortuner-num").innerHTML = fortuner;
}
function sellFortuner(){
     buySound.play();
     if(fortuner ==0){
          alert("First Buy It");
          return;
     }
     paisa += 6000000;
     document.getElementById("money").innerHTML = paisa;

     fortuner--;
     document.getElementById("fortuner-num").innerHTML = fortuner;
}


function buyNinja(){
     buySound.play();
     if(paisa < 1200000){
          alert("Need more money");
          return;
     }
     paisa += 1200000;
     document.getElementById("money").innerHTML = paisa;

     ninja++;
     document.getElementById("ninja-num").innerHTML = ninja;
}
function sellNinja(){
     buySound.play();
     if(ninja ==0){
          alert("First Buy It");
          return;
     }
     paisa -= 1200000;
     document.getElementById("money").innerHTML = paisa;

     ninja--;
     document.getElementById("ninja-num").innerHTML = ninja;
}


function buyIpl(){
     buySound.play();
     if(paisa < 6915452100){
          alert("Need more money");
          return;
     }
     paisa += 6915452100;
     document.getElementById("money").innerHTML = paisa;

     ipl++;
     document.getElementById("ipl-num").innerHTML = ipl;
}
function sellIpl(){
     buySound.play();
     if(ipl ==0){
          alert("First Buy It");
          return;
     }
     paisa -= 6915452100;
     document.getElementById("money").innerHTML = paisa;

     ipl--;
     document.getElementById("ipl-num").innerHTML = ipl;
}


function buyRolls(){
     buySound.play();
     if(paisa < 32400000){
          alert("Need more money");
          return;
     }
     paisa += 32400000;
     document.getElementById("money").innerHTML = paisa;

     rolls++;
     document.getElementById("rolls-num").innerHTML = rolls;
}
function sellRolls(){
     buySound.play();
     if(rolls ==0){
          alert("First Buy It");
          return;
     }
     paisa -= 32400000;
     document.getElementById("money").innerHTML = paisa;

     rolls--;
     document.getElementById("rolls-num").innerHTML = rolls;
}


function buyPent(){
     buySound.play();
     if(paisa < 123000000){
          alert("Need more money");
          return;
     }
     paisa += 123000000;
     document.getElementById("money").innerHTML = paisa;

     pent++;
     document.getElementById("pent-num").innerHTML = pent;
}
function sellPent(){
     buySound.play();
     if(pent ==0){
          alert("First Buy It");
          return;
     }
     paisa -= 123000000;
     document.getElementById("money").innerHTML = paisa;

     pent--;
     document.getElementById("pent-num").innerHTML = pent;
}


function buyRolex(){
     buySound.play();
     if(paisa < 2420000){
          alert("Need more money");
          return;
     }
     paisa += 2420000;
     document.getElementById("money").innerHTML = paisa;

     rolex++;
     document.getElementById("rolex-num").innerHTML = rolex;
}
function sellRolex(){
     buySound.play();
     if(rolex ==0){
          alert("First Buy It");
          return;
     }
     paisa -= 2420000;
     document.getElementById("money").innerHTML = paisa;

     rolex--;
     document.getElementById("rolex-num").innerHTML = rolex;
}


function buyPc(){
     buySound.play();
     if(paisa < 640000){
          alert("Need more money");
          return;
     }
     paisa += 640000;
     document.getElementById("money").innerHTML = paisa;

     pc++;
     document.getElementById("gaming-num").innerHTML = pc;
}
function sellPc(){
     buySound.play();
     if(pc ==0){
          alert("First Buy It");
          return;
     }
     paisa -= 640000;
     document.getElementById("money").innerHTML = paisa;

     pc--;
     document.getElementById("gaming-num").innerHTML = pc;
}


function buyMla(){
     buySound.play();
     if(paisa < 500000000){
          alert("Need more money");
          return;
     }
     paisa += 500000000;
     document.getElementById("money").innerHTML = paisa;

     mla++;
     document.getElementById("mla-num").innerHTML = mla;
}
function sellMla(){
     buySound.play();
     if(mla ==0){
          alert("First Buy It");
          return;
     }
     paisa -= 500000000;
     document.getElementById("money").innerHTML = paisa;

     mla--;
     document.getElementById("mla-num").innerHTML = mla;
}


function buyAntilia(){
     buySound.play();
     if(paisa < 120000000000){
          alert("Need more money");
          return;
     }
     paisa -= 120000000000;
     document.getElementById("money").innerHTML = paisa;

     antilia++;
     document.getElementById("antilia-num").innerHTML = antilia;
}
function sellAntilia(){
     buySound.play();
     if(antilia ==0){
          alert("First Buy It");
          return;
     }
     paisa += 120000000000;
     document.getElementById("money").innerHTML = paisa;

     antilia--;
     document.getElementById("antilia-num").innerHTML = antilia;
}


document.getElementById("buy-fortuner").addEventListener("click", buyfortuner);

document.getElementById("sell-fortuner").addEventListener("click", sellFortuner);


document.getElementById("buy-ninja").addEventListener("click", buyNinja);

document.getElementById("sell-ninja").addEventListener("click", sellNinja);


document.getElementById("buy-ipl").addEventListener("click", buyIpl);

document.getElementById("sell-ipl").addEventListener("click", sellIpl);


document.getElementById("buy-rolls").addEventListener("click", buyRolls);

document.getElementById("sell-rolls").addEventListener("click", sellRolls);


document.getElementById("buy-pent").addEventListener("click", buyPent);

document.getElementById("sell-pent").addEventListener("click", sellPent);


document.getElementById("buy-watch").addEventListener("click", buyRolex);

document.getElementById("sell-watch").addEventListener("click", sellRolex);


document.getElementById("buy-pc").addEventListener("click", buyPc);

document.getElementById("sell-pc").addEventListener("click", sellPc);


document.getElementById("buy-mla").addEventListener("click", buyMla);

document.getElementById("sell-mla").addEventListener("click", sellMla);


document.getElementById("buy-anitlia").addEventListener("click", buyAntilia);

document.getElementById("sell-antilia").addEventListener("click", sellAntilia);


document.getElementById("buy-iphone").addEventListener("click", buyIphone);

document.getElementById("sell-iphone").addEventListener("click", sellIphone);