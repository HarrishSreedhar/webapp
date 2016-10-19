var button=document.getElementById("counter");
button.onclick=function(){
var request=new XMLHttpRequest();
request.onreadystatechange=function(){
    if(request.readyState===XMLHttpRequest.DONE){
        if(request.status===200){
            var counter=request.responseText;
            //var cr=JSON.parse(counter);
            var sp=document.getElementById("span");
        sp.innerHTML=counter.toString();
       // console.log(counter)
        }
    }
}
    request.open("GET","http://harrishsreedhar.imad.hasura-app.io/counter",true);
    request.send(null);
};