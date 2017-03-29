/**
 * Created by Administrator on 2017/3/29.
 */
var mongoose=require('mongoose');
var schema=mongoose.Schema;
var userList=new schema({
    username:String,
    password:String
})

module.exports=userList;