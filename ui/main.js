/*console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML="HOLLLAAAAAA!!!";

var img=document.getElementById('imag');
var marginRight=0;
function moveLeft(){                       OOOOOOOOOOOOOOOOOOOlllllllllLDDDDDDDDDDDDDDDDDD code
     marginRight=marginRight+10;
     img.style.marginRight=marginRight + 'px'
}
img.onclick=function(){
    var interval=setInterval(moveLeft,100);
 // img.style.marginRight='500px';   
};*/

   
    

 //counter
  /*var counter=0;
 var button=document.getElementById('counter');
 //var counter=0;

button.onclick=function(){
   // alert('inside count');
   
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML="is it coming???";
};*/
     
  //counter
 var button=document.getElementById('counter');
button.onclick=function(){
    var request= new XMLHttpRequest();

    
    request.onreadystatechange= function(){
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
                var counter=request.responseText;
                  var span=document.getElementById('count');
                span.innerHTML=counter.toString();
             }
        }
        
    }
    request.open('GET','http://harrishsreedhar.imad.hasura-app.io/counter',true);
    request.send(null);
};
//name
var ninput=document.getElementById('name');
var n=ninput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
var names=['name1','name2','name3','name4'];
var list='';
for(var i=0;i<names.length;i++)
{
list+='<li>'+names[i];
}

    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
};

