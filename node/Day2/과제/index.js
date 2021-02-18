const express = require('express');
const axios = require('axios')
const app = express();
const PORT = 8888;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.get('/',async (req, res) => {
    try{
        const todo = await axios.get("https://jsonplaceholder.typicode.com/todos/1");

        res.render("index", {data: todo.data});
        // console.log(todo.data);
    }
    catch{
        res.render("error");
    }
});

app.listen(PORT, () => console.log(`서버 구동중 ${PORT} port`));