let y=document.querySelector("h1");
 document.getElementById("click").onclick = () =>{
 let randomNumber1=Math.floor(Math.random()*6)+1;
let randomdiceimage="./dice"+randomNumber1+".png";
let imag1=document.querySelectorAll("img")[0];
imag1.setAttribute("src",randomdiceimage);
let randomNumber2=Math.floor(Math.random()*6)+1;
let randomdiceimage2="./dice"+randomNumber2+".png";
let imag2=document.querySelectorAll("img")[1];
imag2.setAttribute("src",randomdiceimage2);
if(randomdiceimage>randomdiceimage2){
    let x="Winner Player 1 !";
    y.innerText=x;
}
else if(randomdiceimage<randomdiceimage2){
    y.innerText="Winner Player 2 !";
}
else {
    y.innerText="Draw !";
}
};
