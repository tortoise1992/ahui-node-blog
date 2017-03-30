function removeLastMargin(id){
	$(id).last().css('margin-right',0);
}

var totalHref=location.href;
var pathname=location.pathname;
var siteUrl=totalHref.substring(0,totalHref.indexOf(pathname));
//console.log(siteUrl)