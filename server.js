var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
   'article-one':{
    title:"Article one",
    heading:"article-one",
    date:"sept 3243,34643",
    content:` <p>
            This is Article-one...Thi was created by me....is this even bearable??dgjktgdifgjnetkehrthervtnvrkjrkvtrkjvtr
            rbvrgrknfbgrftbfrtjmrtfhfkhfbhjfh.bfh
            fgbhlfgmhjbfjmflmhlfjlfufrlg
            
        </p>
                <p>
            This is Article-one...Thi was created by me....is this even bearable??dgjktgdifgjnetkehrthervtnvrkjrkvtrkjvtr
            rbvrgrknfbgrftbfrtjmrtfhfkhfbhjfh.bfh
            fgbhlfgmhjbfjmflmhlfjlfufrlg
            
        </p>
       <p>
            This is Article-one...Thi was created by me....is this even bearable??dgjktgdifgjnetkehrthervtnvrkjrkvtrkjvtr
            rbvrgrknfbgrftbfrtjmrtfhfkhfbhjfh.bfh
            fgbhlfgmhjbfjmflmhlfjlfufrlg
            </p>`
    
},
  'article-two':{
       title:"Article 2222",
    heading:"article-two",
    date:"oct,3rd",
    content:` <p>
            This is Article-two...Thi was created by me....is this even bearable??dgjktgdifgjnetkehrthervtnvrkjrkvtrkjvtr
            rbvrgrknfbgrftbfrtjmrtfhfkhfbhjfh.bfh
            fgbhlfgmhjbfjmflmhlfjlfufrlg
            
        </p>
                <p>
            This is Article-two...Thi was created by me....is this even bearable??dgjktgdifgjnetkehrthervtnvrkjrkvtrkjvtr
            rbvrgrknfbgrftbfrtjmrtfhfkhfbhjfh.bfh
            fgbhlfgmhjbfjmflmhlfjlfufrlg
            
        </p>
       <p>
            This is Article-two...Thi was created by me....is this even bearable??dgjktgdifgjnetkehrthervtnvrkjrkvtrkjvtr
            rbvrgrknfbgrftbfrtjmrtfhfkhfbhjfh.bfh
            fgbhlfgmhjbfjmflmhlfjlfufrlg
            </p>`
    
  },
    'article-three':{
         title:"Article three",
    heading:"article-3",
    date:"sept 34",
    content:` <p>
            This is Article-3...Thi was created by me....is this even bearable??dgjktgdifgjnetkehrthervtnvrkjrkvtrkjvtr
            rbvrgrknfbgrftbfrtjmrtfhfkhfbhjfh.bfh
            fgbhlfgmhjbfjmflmhlfjlfufrlg
            
        </p>
                <p>
            This is Article-3...Thi was created by me....is this even bearable??dgjktgdifgjnetkehrthervtnvrkjrkvtrkjvtr
            rbvrgrknfbgrftbfrtjmrtfhfkhfbhjfh.bfh
            fgbhlfgmhjbfjmflmhlfjlfufrlg
            
        </p>
       <p>
            This is Article-3...Thi was created by me....is this even bearable??dgjktgdifgjnetkehrthervtnvrkjrkvtrkjvtr
            rbvrgrknfbgrftbfrtjmrtfhfkhfbhjfh.bfh
            fgbhlfgmhjbfjmflmhlfjlfufrlg
            </p>`
    
    }
};
function createtemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmltemplate=`<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width-device-width, initial scale=1" />
         <style>
 .container {
    max-width: 800px;
    color: #dda22b;
    font-family: sans-serif;
    padding-top: 60px;
    padding-left: 100px;
}
</style>
    </head>
    <body>
        <div class="container">
       <div>
          <h3>
           ${heading}<hr>
        </h3>
    </div>
        <div>
            <h2>
        ${date}
         </h2>
         </div>   
      ${content}
            
        </p>
        </div>
    </body>
</html>`
;
return htmltemplate;    

}
var counter=0;
app.get('/counter',function(req,res){
   counter+=1;
   res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
//app.get('/article-one',function(req,res){
//res.sendFile(path.join(__dirname,'article-one.html')); 
//});
app.get('/:articleName',function(req,res){
var articleName=req.params.articleName;
    res.send(createtemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
