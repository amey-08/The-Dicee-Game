var ran1 = Math.floor(Math.random() * 6) + 1;
var ran2 = Math.floor(Math.random() * 6) + 1;
console.log(ran1 + " "+ ran2);

var a = document.querySelector(".img1");
var b = document.querySelector(".img2");

a.setAttribute("src","images/dice"+ran1+".png");

b.setAttribute("src","images/dice"+ran2+".png");

if(ran1>ran2)
{
    document.querySelector("h1").innerText="🚩Player 1 Wins";
}
else if(ran1<ran2)
{
    document.querySelector("h1").innerText="Player 2 Wins 🚩";
}
else
{
    document.querySelector("h1").innerText="🚩 Draw 🚩";
}