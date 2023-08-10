const express=require("express")
const bodyParser=require("body-parser")
const date=require(__dirname+"/date.js")

// console.log(date())

const app=express()
var items=["code","eat","repeat"];
var workitems=[];
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.get("/",function(req,res){
    // res.send("hello")

  let day=date.getdate();
    // var currentday=today.getDate();
    // if(today.getDay()===6 || today.getDay()===0){
    // res.send("Yay it's the weekend!");}
    // else{
    //     res.send("Boo , I have to work") 
    // }
    
    // var day="";
   
    // if(currentday===6 || currentday===0){
    //     // res.write("<h1>Yay it's the weekend</h1>");
        
    //     day="weekend"
    //     // res.render("list",{kindofday: day})
    // // res.send()
    // }
    //     else{
    //         // res.write("<h1>Boo , I have to work</h1>") 
    //         // req.send()
    //         // res.sendFile(__dirname+"/index.html")
    //         day="weekday"
    //         // res.render("list",{kindofday: day})
    //     }

    // switch (currentday%7) {
    //     case 6:
    //         day="Sunday"
    //         break;
    //         case 0:
    //             day="Monday"
    //             break;
    //             case 1:
    //                 day="Tuesday"
    //                 break;
    //                 case 2:
    //                     day="Wednesday"
    //                     // imgurl="beach-1751455_1280.jpg";
    //                     break;
    //                     case 3:
    //                         day="Thursday"
    //                         break;
    //                         case 4:
    //                             day="Friday"
    //                             break;
    //                             case 5:
    //                                 day="Saturday"
    //                                 break;

    //     default:
    //         console.log("Eroor current day = "+currentday);
    //         break;
    // }


   

            res.render("list",{listtitle: day,newitem: items})
            // res.render("list",{imgg: imgurl}); 
})

app.post("/",function(req,res){
let item=req.body.newItem;
// console.log(item);
// res.render("list",{newitem: item})
if(req.body.list==="work")
{
    workitems.push(item);
    res.redirect("/work")
}
else
{
    items.push(item);
    res.redirect("/");
}


})

app.get("/work",function(req,res){
    res.render("list",{listtitle:"work list",newitem: workitems})
})

app.post("/work",function(req,res){
    let item=req.body.newItem;
    workitems.push(item);
    res.redirect("/work")
})

app.get("/about",function(req,res){
    res.render("about")
})

app.listen(3500,function(){
    console.log("server started on port 3500")
})