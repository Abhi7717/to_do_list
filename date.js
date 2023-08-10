// module.exports="hello world"
module.exports.getdate=getdate
// console.log(module)
function getdate(){
var today=new Date();
   
var options={
    weekday: "long",
    day: "numeric",
    month: "long"
};
var day=today.toLocaleDateString("en-US",options);

return day;
}

module.exports.getday=getday;

function getday(){
    var today=new Date();
       
    var options={
        weekday: "long"
    };
    var day=today.toLocaleDateString("en-US",options);
    
    return day;
    }

    console.log(module.exports)