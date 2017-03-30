		
function Tip(opt){
	this.icon=['icon-eye','icon-gift','icon-spinner'];
	this.color=['warning','success','danger'];
	this.defaults={
		code:0,		
		message:'提示'
	}
	this.opts=$.extend({},this.defaults,opt);
	this.ele=null;
}
Tip.prototype={
	init:function(){
		var self=this;
		this.bindHtml(this.icon[this.opts.code],this.color[this.opts.code],this.opts.message);
		this.showTip();
		setTimeout(function(){
			self.hideTip(self);			
		},3000)
		setTimeout(function(){
			self.removeTip();
		},4000)
	},
	bindHtml:function(icon,type,message){
		var str='';
		str +='<div class="tip-wrapper clearfix">';
		str +='<div class="icon">';
		str +='<span class="'+icon+' '+type+'"></span>';
		str +='</div>';
		str +='<div class="tip-info">'+message+'</div>';
		str +='</div>';		
		$('body').append(str);
		this.ele=$('.tip-wrapper');
	},
	showTip:function(){
		this.ele.stop().fadeIn(800);
	},
	hideTip:function(tar){    
		tar.ele.stop().fadeOut(1000);
	},
	removeTip:function(){
		this.ele.remove();
	}
}
