;(function(window,$,undefind){
	$('.login-wrap .signup').on('click',function(){
		var reg=new Login('reg');
		reg.init();		
	});
	$('.login-wrap .signin').on('click',function(){
		var login=new Login('log');
		login.init();		
	});
	
})(window,jQuery)


function Login(tag){
	this.tag=tag;
	this.$ele=null;	
}

Login.prototype={
	init:function(){
		this.bindHtml(this.tag);
		this.bindEvents();
	},
	bindHtml:function(tag){
		var str='';
		str +='<div class="login-popup-wrapper">';
		str +='<div class="login-popup">';
		if(tag == 'log'){
			str +='<div class="title">Login</div>';
		}else if(tag == 'reg'){
			str +='<div class="title">Signup</div>';
		}
		
		str +='<div class="content">';
		str +='<div class="item">';
		str +='<div class="tip">用户名</div>';
		str +='<div class="input">';
		str +='<input type="text" name="username" id="username" placeholder="请输入用户名"/>';
		str +='</div>';
		str +='</div>';
		str +='<div class="item">';
		str +='<div class="tip">密码</div>';
		str +='<div class="input">';
		str +='<input type="password" name="password" id="password" placeholder="请输入密码"/>';
		str +='</div>';
		if(tag == 'reg'){
			str +='<div class="item">';
			str +='<div class="tip">再次输入密码</div>';
			str +='<div class="input">';
			str +='<input type="password" name="repassword" id="repassword" placeholder="请再次输入密码"/>';
			str +='</div>';
		}
		str +='</div>';
		str +='<div class="submit">';
		if(tag == 'log'){
			str +='<a href="javascript:;">登录</a>';
		}else if(tag == 'reg'){
			str +='<a href="javascript:;">注册</a>';
		}		
		str +='</div>'
		str +='</div></div></div>';
		
		$('body').append(str);
		this.$ele=$('.login-popup-wrapper');
	},
	bindEvents:function(){		
		this.openBox();
		this.submitData(this.tag);
		this.closeBox();
	},
	submitData:function(tag){
		var userData={
			username:'',
			password:''
		};	
		var self=this.$ele;
		if(tag=='reg'){
			this.$ele.find('.submit a').on('click',function(){
				var username=self.find('#username').val();
				var password=self.find('#password').val();
				var repassword=self.find('#repassword').val();
				if(!username){
					var tip=new Tip({message:'用户名不能为空'});
					tip.init();
					return;
				}else if(!password){
					var tip=new Tip({message:'密码不能为空'});
					tip.init();
					return;
				}else if(!repassword){
					var tip=new Tip({message:'请再次确认密码'});
					tip.init();
					return;
				}
				if(password && repassword && password !==repassword){
					var tip=new Tip({message:'两次密码不一致'});
					tip.init();
					return;
				}
				userData.username=username;
				userData.password=password;
				$.ajax({
				    type:'post',
                    url:siteUrl+'/api/user/register',
                    data:userData,
                    success:function (data) {
				        if(data){
                            var tip=new Tip({code:data.code,message:data.message});
                            tip.init();
                            if(data.code === 1){
                                self.stop().fadeOut();
                                self.remove();
                            }
                        }

                    }
                })

			})
			
		}else if(tag=='log'){
			this.$ele.find('.submit a').on('click',function(){
				var username=self.find('#username').val();
				var password=self.find('#password').val();				
				if(!username){
					var tip=new Tip({message:'用户名不能为空'});
					tip.init();
					return;
				}else if(!password){
					var tip=new Tip({message:'密码不能为空'});
					tip.init();
					return;
				}				
				userData.username=username;
				userData.password=password;
				$.post(siteUrl+'/main/log',userData,function(data){
					console.log(data)
				})
			
			})
			
		}
	},
	openBox:function(){
		this.$ele.stop().fadeIn();
	},
	closeBox:function(){
		var self=this.$ele;
		this.$ele.on('click',function(e){
			var tar=$(this).find('.login-popup');
			if(!tar.is(e.target) && tar.has(e.target).length === 0){
				self.stop().fadeOut();
				self.remove();
			}
		})
		
	}
}

			
				
					
				
				
					
						
							
						
						
							
						
					
					
						
							
						
						
							
						
					
					
						
					
				
			
		