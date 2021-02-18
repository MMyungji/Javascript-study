const express = require('express');
const app = express();

app.use((req,res,next) => {
    const a=30;
    req.a = a;
    next();
})

const numMiddleware = (req,res,next) => {
    const b = 15;
    req.b = b;
    next();
}

app.get("/", (req,res) => {
    try{
        console.log(req.a);
        return res.json({"a": req.a});
    } catch(err){
        console.log(err);
    }
});

app.get("/add", (req,res) => {
    try{
        console.log(req.a+req.a);
        return res.json({"a+a": req.a+req.a});
    } catch(err){
        console.log(err);
    }
});

app.get("/sub", (req,res) => {
    try{
        console.log(req.a-1);
        return res.json({"a-1": req.a-1});
    } catch(err){
        console.log(err);
    }
});

app.get("/multi", (req,res) => {
    try{
        console.log(req.a*req.a);
        return res.json({"a*a": req.a*req.a});
    } catch(err){
        console.log(err);
    }
});

app.get("/other", numMiddleware, (req,res) => {
    try{
        console.log(req.a+req.b);
        return res.json({"a+b": req.a+req.b});
    } catch(err){
        console.log(err);
    }
});

app.listen(7777, () => console.log("This app listening on 7777"));