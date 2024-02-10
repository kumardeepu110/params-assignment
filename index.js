const express = require('express')
const app = express()
const port = 5000

// 1.Create a get request receiving data in params
// method 1
app.get('/add/:n1/:n2', (req,res)=>{
    let num1 = parseInt(req.params.n1)
    let num2 = parseInt(req.params.n2)

    let sum = num1+num2

    res.send({
        message:"Sum of numbers",
        num1:num1,
        num2:num2,
        sum:sum
    })
})

// method 2
app.get('/percentage/:n1/:n2/:n3', (req,res)=>{
    let num1 = parseInt(req.params.n1)
    let num2 = parseInt(req.params.n2)
    let num3 = parseInt(req.params.n3)

    let sum = parseInt(num1) + parseInt(num2) + parseInt(num3)
    let per = sum/300*100
    let f = parseFloat(per.toFixed(2))

    res.json({
        message:"Percentage of numbers",
        num1:num1,
        num2:num2,
        num3:num3,
        sum:sum,
        percentage:f
    })
})

// 2.Create different types of requests (Get, post , put , patch, delete)

app.get('/get', (req,res)=>{
    let a = 10
    let b = 12
    res.send(`Sum of ${a} and ${b} is ${a+b}`)
})

app.post('/post', (req,res)=>{
    let a = 10
    let b = 12
    res.send(`Subtraction of ${a} and ${b} is ${a-b}`)
})

app.put('/put', (req,res)=>{
    let a = 10
    let b = 12
    res.send(`Multiplication of ${a} and ${b} is ${a*b}`)
})

app.patch('/patch', (req,res)=>{
    let a = 10
    let b = 12
    res.send(`Division of ${a} and ${b} is ${a/b}`)
})

app.delete('/delete', (req,res)=>{
    let a = 10
    let b = 12
    res.send(`Remainder of ${a} and ${b} is ${a%b}`)
})

// server connection
app.listen(port, (err)=>{
    if(err){
        console.log("Error Occured",err);
    }
    else{
        console.log("Server is running");
    }
})