let express = require('express');
let app  = express();
let port = process.env.port || 3000;

app.use(express.static(__dirname +'/'));

app.get('/', function(req,res){
    res.render('index.html');
});

app.get('/addTwoNumbers', function(req,res){
    let n1=req.query.n1;
    let n2=req.query.n2;
    let result=parseInt(n1)+parseInt(n2);
    let response={data:result, message:'success',statusCode:200}
    res.json(response);
});

app.listen(port, ()=>{
    console.log('express server started');
});