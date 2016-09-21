console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML="HOLLLAAAAAA!!!";

var img=document.getElementById('imag');
var marri=0;
function moveLeft(){
     marri=marri+10;
     img.style.marri=marri+'px'
}
img.onclick=function(){
    var interval=setInterval(moveLeft,100);
 // img.style.marginRight='500px';   
};
