var but=document.getElementById("counter");
but.onclick=function(){
var request=new XMLHttpRequest();
request.onreadystatechange=function(){
    if(request.readyState===XMLHttpRequest.DONE){
        if(request.state===200){
            var counter=request.responseText;
          //  counter=JSON.parse(counter);
            //var sp=document.getElementById("span");
            //sp.innerHTML=counter.toString();
        console.log(counter);
        }
    }
}
    request.open('GET','http://harrishsreedhar.imad.hasura-app.io/counter',true);
    request.send(null);
};