const express=require("express")
const bodyParser=require("body-parser")
const app=express()
const date=require(__dirname+"/date.js")

// console.log(date())

const Items=["code","eat","sleep"];
const WorkItems=[];
app.set("view engine","ejs")

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
app.get("/",function(req,res){
    // res.send("Abhi")
   
     let day=date.getDay();
     res.render("list",{today:day, newItem:Items})
    //res.send(day)
})

app.post("/",(req,res)=>{
   var  Item = req.body.newItem
    if(req.body.button === "Work List")
    {
        WorkItems.push(Item);
        res.redirect("/work")
    }
    else{
   Items.push(Item);
   res.redirect("/")
    }
})

app.get("/work",function(req,res){
    res.render("list",{today:"Work List", newItem:WorkItems})
})

app.get("/about",(req,res)=>{
    // res.render("list",{today:"Work List", newItem:WorkItems})
    res.render("about");
})

// app.post("/work",(req,res)=>{
//     var  Item = req.body.newItem
//     WorkItems.push(Item);
//      res.redirect("/work")
//  })

app.listen(3000, function(){
    console.log("server has started as 3000")
})