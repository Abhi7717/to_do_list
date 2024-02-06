// console.log(module)

module.exports.getDate=function (){
const date=new Date();
options={
    weekday:'long',
    day:'numeric',
    month:'long'
    
}

const day=date.toLocaleDateString("en-US",options)
return day;
}

module.exports.getDay=function (){
    const date=new Date();
    options={
        weekday:'long'
        
    }
    
    const day=date.toLocaleDateString("en-US",options)
    return day;
    }