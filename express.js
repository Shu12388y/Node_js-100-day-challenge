const express=require('express');
const app = express();
const Port = 1000;

app.get('/', (req, res) => {

res.send("<h2>hello</h2>")

});

app.listen(Port,() => {
    console.log("listening")
});

