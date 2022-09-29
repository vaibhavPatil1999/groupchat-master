let express = require("express");
let router = express.Router();
let path=require('path')
let Controllers = require("../controllers/signuplogin");


router.post("/userregister", Controllers.postsignup);
router.post('/userlogin',Controllers.postlogin);
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','../','frontend','login','login.html'))
})
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','../','frontend','login','login.html'))
})

module.exports=router;
