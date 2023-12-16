let paisa = 18499260000000;
document.getElementById("money").innerHTML = paisa.toLocaleString('en-IN');;

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
buySound.src ="./resources/mouse-click-153941.mp3";



function buyIphone(){
     buySound.play();
     if(paisa < 180000){
          alert("Need more money");
          return;
     }
     paisa -= 180000;
     document.getElementById("money").innerHTML = paisa.toLocaleString('en-IN');

     iphone++;
     document.getElementById("iphone-num").innerHTML = iphone.toLocaleString('en-IN');
}
function sellIphone(){
     buySound.play();
     if(iphone ==0){
          alert("First Buy It");
          return;
     }
     paisa += 180000;
     document.getElementById("money").innerHTML = paisa.toLocaleString('en-IN');

     iphone--;
     document.getElementById("iphone-num").innerHTML = iphone.toLocaleString('en-IN');
}


function buyfortuner(){
     buySound.play();
     if(paisa < 6000000){
          alert("Need more money");
          return;
     }
     paisa -= 6000000;
     document.getElementById("money").innerHTML = paisa.toLocaleString('en-IN');

     fortuner++;
     document.getElementById("fortuner-num").innerHTML = fortuner.toLocaleString('en-IN');
}
function sellFortuner(){
     buySound.play();
     if(fortuner ==0){
          alert("First Buy It");
          return;
     }
     paisa += 6000000;
     document.getElementById("money").innerHTML = paisa.toLocaleString('en-IN');

     fortuner--;
     document.getElementById("fortuner-num").innerHTML = fortuner.toLocaleString('en-IN');
}


function buyNinja(){
     buySound.play();
     if(paisa < 1200000){
          alert("Need more money");
          return;
     }
     paisa += 1200000;
     document.getElementById("money").innerHTML = paisa.toLocaleString('en-IN');

     ninja++;
     document.getElementById("ninja-num").innerHTML = ninja.toLocaleString('en-IN');
}
function sellNinja(){
     buySound.play();
     if(ninja ==0){
          alert("First Buy It");
          return;
     }
     paisa -= 1200000;
     document.getElementById("money").innerHTML = paisa.toLocaleString('en-IN');

     ninja--;
     document.getElementById("ninja-num").innerHTML = ninja.toLocaleString('en-IN');
}


function buyIpl(){
     buySound.play();
     if(paisa < 6915452100){
          alert("Need more money");
          return;
     }
     paisa += 6915452100;
     document.getElementById("money").innerHTML = paisa.toLocaleString('en-IN');

     ipl++;
     document.getElementById("ipl-num").innerHTML = ipl.toLocaleString('en-IN');
}
function sellIpl(){
     buySound.play();
     if(ipl ==0){
          alert("First Buy It");
          return;
     }
     paisa -= 6915452100;
     document.getElementById("money").innerHTML = paisa.toLocaleString('en-IN');

     ipl--;
     document.getElementById("ipl-num").innerHTML = ipl.toLocaleString('en-IN');
}


function buyRolls(){
     buySound.play();
     if(paisa < 32400000){
          alert("Need more money");
          return;
     }
     paisa += 32400000;
     document.getElementById("money").innerHTML = paisa.toLocaleString('en-IN');

     rolls++;
     document.getElementById("rolls-num").innerHTML = rolls.toLocaleString('en-IN');
}
function sellRolls(){
     buySound.play();
     if(rolls ==0){
          alert("First Buy It");
          return;
     }
     paisa -= 32400000;
     document.getElementById("money").innerHTML = paisa.toLocaleString('en-IN');

     rolls--;
     document.getElementById("rolls-num").innerHTML = rolls.toLocaleString('en-IN');
}


function buyPent(){
     buySound.play();
     if(paisa < 123000000){
          alert("Need more money");
          return;
     }
     paisa += 123000000;
     document.getElementById("money").innerHTML = paisa.toLocaleString('en-IN');

     pent++;
     document.getElementById("pent-num").innerHTML = pent.toLocaleString('en-IN');
}
function sellPent(){
     buySound.play();
     if(pent ==0){
          alert("First Buy It");
          return;
     }
     paisa -= 123000000;
     document.getElementById("money").innerHTML = paisa.toLocaleString('en-IN');

     pent--;
     document.getElementById("pent-num").innerHTML = pent.toLocaleString('en-IN');
}


function buyRolex(){
     buySound.play();
     if(paisa < 2420000){
          alert("Need more money");
          return;
     }
     paisa += 2420000;
     document.getElementById("money").innerHTML = paisa.toLocaleString('en-IN');

     rolex++;
     document.getElementById("rolex-num").innerHTML = rolex.toLocaleString('en-IN');
}
function sellRolex(){
     buySound.play();
     if(rolex ==0){
          alert("First Buy It");
          return;
     }
     paisa -= 2420000;
     document.getElementById("money").innerHTML = paisa.toLocaleString('en-IN');

     rolex--;
     document.getElementById("rolex-num").innerHTML = rolex.toLocaleString('en-IN');
}


function buyPc(){
     buySound.play();
     if(paisa < 640000){
          alert("Need more money");
          return;
     }
     paisa += 640000;
     document.getElementById("money").innerHTML = paisa.toLocaleString('en-IN');

     pc++;
     document.getElementById("gaming-num").innerHTML = pc.toLocaleString('en-IN');
}
function sellPc(){
     buySound.play();
     if(pc ==0){
          alert("First Buy It");
          return;
     }
     paisa -= 640000;
     document.getElementById("money").innerHTML = paisa.toLocaleString('en-IN');

     pc--;
     document.getElementById("gaming-num").innerHTML = pc.toLocaleString('en-IN');
}


function buyMla(){
     buySound.play();
     if(paisa < 500000000){
          alert("Need more money");
          return;
     }
     paisa += 500000000;
     document.getElementById("money").innerHTML = paisa.toLocaleString('en-IN');

     mla++;
     document.getElementById("mla-num").innerHTML = mla.toLocaleString('en-IN');
}
function sellMla(){
     buySound.play();
     if(mla ==0){
          alert("First Buy It");
          return;
     }
     paisa -= 500000000;
     document.getElementById("money").innerHTML = paisa.toLocaleString('en-IN');

     mla--;
     document.getElementById("mla-num").innerHTML = mla.toLocaleString('en-IN');
}


function buyAntilia(){
     buySound.play();
     if(paisa < 120000000000){
          alert("Need more money");
          return;
     }
     paisa -= 120000000000;
     document.getElementById("money").innerHTML = paisa.toLocaleString('en-IN');

     antilia++;
     document.getElementById("antilia-num").innerHTML = antilia.toLocaleString('en-IN');
}
function sellAntilia(){
     buySound.play();
     if(antilia ==0){
          alert("First Buy It");
          return;
     }
     paisa += 120000000000;
     document.getElementById("money").innerHTML = paisa.toLocaleString('en-IN');

     antilia--;
     document.getElementById("antilia-num").innerHTML = antilia.toLocaleString('en-IN');
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