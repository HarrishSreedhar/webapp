var but=document.getElementById("counter");
but.onclick=function(){
var xhr=new XMLHttpRequest();
request.onreadystatechange=function(){
    if(xhr.readyState===XMLHttpRequest.DONE){
        if(xhr.state===200){
            var counter=xhr.responseText;
          //  counter=JSON.parse(counter);
        var sp=document.getElementById("span");
            sp.innerHTML=counter.toString();
       
        }
    }
}
    xhr.open('GET','http://harrishsreedhar.imad.hasura-app.io/counter',true);
    xhr.send(null);
};