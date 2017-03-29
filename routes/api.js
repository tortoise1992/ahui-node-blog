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
    // console.log(req.body);
    var username=req.body.username;
    var password=req.body.password;
    var repassword=req.body.repassword;
    if(username==''){
        responseData.code=1;
        responseData.message='用户名不能为空';
        res.json(responseData);
        return;
    }
    if(password==''){
        responseData.code=2;
        responseData.message='密码不能为空';
        res.json(responseData);
        return;
    }
    if(password !==repassword){
        responseData.code=3;
        responseData.message='两次密码不一致';
        res.json(responseData);
        return;
    }

    User.findOne({
        username:username
    }).then(function (userinfo) {
        if(userinfo){
            responseData.code=4;
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
        res.json(responseData);
    })
})

module.exports=router;