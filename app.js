const express = require("express")
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/'));

app.get('/', (req, res)=>{
    fs.readFile(__dirname + '/index.html', (err, data) =>{
        if(!err){
            res.write(data);
        }
        res.end();
    })
});

app.post('/status/new', (req, res)=>{
    // console.log(JSON.stringify(req.body));
    let status = JSON.stringify({ name: req.body.name,
        status: req.body.status});

    fs.writeFile(__dirname + '/posts.json', status,
    (err)=>{
        console.log(err);
    })
});

app.get('/status', (req, res)=>{
    fs.readFile(__dirname + "/posts.json", (err, data) =>{
        if(!err){
            res.send(JSON.parse(data));
        }else
        {
            console.log(err)
        }
        
    })
})
app.listen(3000, (err)=>{
    if(err)
        console.log("Error:", err);
    else
        console.log("listening on port 3000")
})