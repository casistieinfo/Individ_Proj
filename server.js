const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload')

let initial_path = __dirname

const app = express();

app.use(express.static(initial_path));
app.use(fileupload());

app.get('/',(req,res) => {
    res.sendFile(path.join(initial_path,"/html/home.html"));
})

app.post('/upload',(req,res) => {
    let file = req.files.image;
    let date = new Date();
    let imagename = date.getDate()+file.name;
    let path = 'poze_cerce/' + imagename;
    file.mv(path, (err,result) =>{
        if(err){
            throw err;
        } else{
            res.json(`poze_cerce/${imagename}`);
        }
    })
})

app.get("/blog",(req,res) =>{
    res.sendFile(path.join(initial_path,"/html/blog.html"));
})
app.use((req,res) =>{
    res.json("404");
})
app.listen("3000", () => {
    console.log('listening... ')
})