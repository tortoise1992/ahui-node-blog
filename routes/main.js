/**
 * Created by Administrator on 2017/3/29.
 */
var express=require('express');
var router=express.Router();
router.get('/',function (req,res,next) {
    res.render('main/index');
})

module.exports=router;