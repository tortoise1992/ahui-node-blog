/**
 * Created by Administrator on 2017/3/29.
 */
var express=require('express');
var app=express();
var mongoose=require('mongoose');
var admin=require('./routes/admin');
var api=require('./routes/api');
var main=require('./routes/main');
var swig=require('swig');
var bodyParser=require('body-parser');
app.engine('html',swig.renderFile);
app.set('views','./views');
app.set('view engine','html');
swig.setDefaults({cache:false});


app.use(bodyParser.urlencoded({extended:true}));
app.use('/public',express.static(__dirname+'/public'));

app.use('/admin',admin);
app.use('/api',api);
app.use('/',main);

mongoose.connect('mongodb://localhost:27017/blog',function(err){
    if(err){
        console.log('数据库连接错误！');
    }else{
        console.log('数据库连接成功！');
        app.listen(3000);
    }
});


