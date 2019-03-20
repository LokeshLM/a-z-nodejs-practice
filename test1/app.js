const express = require('express');
const app = express();
const messages = require('./message');

let all_letters = ' ';
console.log(messages["letters"]);


app.get("/", (req, res)=>{
    for (let i = 0; i <= messages["letters"].length - 1; i++){
        all_letters += messages["letters"][i] + "</br>";
    }
    res.send(all_letters)
});

app.get('/users/:name', (req, res)=>{
    res.send(req["params"]["name"]);
})

app.listen(3000, (err)=>{
    if(err){
        console.log("Some error occured")
    }
    else
    console.log("Server started with port 3000")
})