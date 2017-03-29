/**
 * Created by Administrator on 2017/3/29.
 */
var mongoose=require('mongoose');
var userSchema=require('../schemas/user');
module.exports=mongoose.model('User',userSchema);