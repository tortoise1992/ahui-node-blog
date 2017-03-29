/**
 * Created by Administrator on 2017/3/29.
 */
var express=require('express');
var router=express.Router();
router.get('/user',function (req,res,next) {
    res.send('user');
})

module.exports=router;