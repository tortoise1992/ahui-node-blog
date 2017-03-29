/**
 * Created by Administrator on 2017/3/29.
 */
$(function(){
    // 登录注册的切换
    $('#register a').click(function(){
        $('#login').show();
        $('#register').hide();
    });

    $('#login a').click(function(){
        $('#login').hide();
        $('#register').show();
    });

// 点击注册按钮，通过ajax提交数据
    $('#register .submit').click(function(){
        // 通过ajax提交交
        $.ajax({
            type:'post',
            url:'/api/user/register',
            data:{
                username:$('#register').find('[name="username"]').val(),
                password:$('#register').find('[name="password"]').val(),
                repassword:$('#register').find('[name="repassword"]').val()
            },
            dataType:'json',
            success:function(data){
                console.log(data);
            }
        });
    });
});