console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML="HOLLLAAAAAA!!!";

var img=document.getElementById('imag');
var marginRight=0;
function moveLeft(){
     marginRight=marginRight+10;
     img.style.marginRight=marginRight + 'px'
}
img.onclick=function(){
    var interval=setInterval(moveLeft,100);
 // img.style.marginRight='500px';   
};
