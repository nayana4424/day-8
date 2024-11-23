const express = require("express")

const app = new express()

const dbArray =[
    {id:"01", name:"nayana", age:"19", department:"computer science"},
    {id:"02", name:"navya", age:"20", department:"zoology"},
    {id:"03", name:"gopika", age:"19", department:"zoology"},
];
app.post("/add",(res,req)=>{
    console.log(req.body)
    dbArray.push(req.body)
    res.send("data added");
})

app.get('/array',(req,res)=>{
    res.send(dbArray)
})

app.listen(8081,()=>{
    console.log("port is running")
})