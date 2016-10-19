var button=document.getElementById("counter");
button.onclick=function(){
var request=new XMLHttpRequest();
request.onreadystatechange=function(){
    if(request.readyState===XMLHttpRequest.DONE){
        if(request.status===200){
          //  alert('stat 200');
            var counter=request.responseText;
           // var cr=JSON.parse(counter);
         //  var cr="safsddsfs";
            var sp=document.getElementById("count");
        sp.innerHTML=counter.toString();
       // console.log(counter)
        }
    }
};
    request.open("GET","http://harrishsreedhar.imad.hasura-app.io/counter",true);
    request.send(null);
};
var sub=document.getElementById("susubmit_btn");

sub.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
       if(request.readyState===XMLHttpRequest.DONE) {
           if(request.status===200){
               var n=request.responseText;
               n=JSON.parse(n);
               var list='';
               for(var i=0;i<n.length;i++)
               {
                   list+='<li>'+n[i]+'</li>';
               }
                var ul = document.getElementById('namelist');
                    ul.innerHTML = list;
           }
       }
    };
     var name=document.getElementById("name");
     var n=name.value;
     request.open("GET","http://harrishsreedhar.imad.hasura-app.io/submit-name?name="+n,true);
     request.send(null);
};