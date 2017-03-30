/**
 * Created by Administrator on 2017/3/29.
 */
var express=require('express');
var router=express.Router();
var User=require('../modals/User');
var responseData=null;
router.use(function (req,res,next) {
    responseData={
        code:0,
        message:''
    }
    next();
})
router.get('/user',function (req,res,next) {
    res.send('api-user');
})
router.post('/user/register',function (req,res,next) {
    var username=req.body.username;
    var password=req.body.password;
    User.findOne({
        username:username
    }).then(function (userinfo) {
        if(userinfo){
            responseData.code=0;
            responseData.message='该用户名已经被注册';
            res.json(responseData);
            return;
        }else {
            var user=new User({
                username:username,
                password:password
            });
            return user.save();
        }
    }).then(function (newuser) {
        responseData.message='注册成功';
        responseData.code=1;
        res.json(responseData);
    })
})

module.exports=router;