const exp         = require("express");
const path        = require("path"); 
const ejs         =require("express-ejs-layouts")

const app         = exp();

app.use(exp.static("contents"))
app.use(exp.urlencoded({limit:'1kb',extended:false}))
app.use(ejs)

app.set('view engine','ejs')
app.set('viwes',__dirname+'/viwes')
app.set('layout','/viwes')

app.get('/home',(req,res)=>
{
    res.render("ejs")
})
app.get('/home/img',(req,res)=>{
    res.sendFile("./contents/design/background.jpg",{root: path.join(__dirname)},(error)=>error ? console.log(error) : console.log(";"))
})
app.post('/h',(req,res)=>{
    console.log(req.body.email)
    res.redirect("/")
})

app.listen(1000,()=>console.log("app started"))
