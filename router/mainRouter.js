const express = require('express')
const router = express.Router();



router.get("/", function(req,res){
    res.send('Hello World');
})

router.get("/about", function(req,res){
    res.send("about page")
})

router.get("/profile", function(req,res){
    res.render('index', {'title':"EJS 메인페이지"})
})

router.post("/postapi", function(req,res){

    let body = req.body;
    console.log(body)
    res.send("POST API")
})

module.exports = router