$(function(){
	removeLastMargin('.container .show-item');
	
	
	var rotateDeg=0;
	function renderArticleRotate(obj){		
		rotateDeg++;
		if(rotateDeg>=360){
			rotateDeg=0;
		}
		obj.find('.indient span').css('transform','rotate('+rotateDeg+'deg)');	
		
	}
	
	$('.list-item').hover(function(){	
		var $self=$(this);
		this.timer=setInterval(function(){
			renderArticleRotate($self);
		},16)
	},function(){		
		clearInterval(this.timer);
	});
	
	
	
})