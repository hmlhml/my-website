window.onload=function(){

	window.onresize=function(){
		var banerLeft=$(".banerLeft");
		var bannerRight=$(".bannerRight");
		// alert($(".bannerRight").height())
		$(".banerLeft").height($(".bannerRight").height());
		var as=$(".imgBox a");
		var len=as.length;
		as.width(banerLeft.width());
		var asW=as.width();
		console.log(asW)
		console.log(banerLeft.width())
		var imgBox=$(".imgBox");
		imgBox.width(banerLeft.width()*len);

		
		var leftBtn=$(".leftBtn");
		var rightBtn=$(".rightBtn");
		var s=0;
		// alert(rightBtn.length)
		function move(type){
			if(type=="r"){
				s++;
				if(s==len){
					s=0;
				}
				
			}else if(type=="l"){
				s--;
				if(s<0){
					s=len-1;
				}
			}
			imgBox.animate({left:-s*asW},500);
			
		}
		var t=setInterval(function(){move("r")},2000);
		banerLeft.hover(function(){
			clearInterval(t);
		},function(){
			t=setInterval(function(){move("r")},2000);
		})
		rightBtn.click(function(){
			move("r");
		})
		leftBtn.click(function(){
			move("l");
		})
	}
	window.onresize();
	$(".backTop").click(function(){
		$("body,html").animate({scrollTop:0})
	})
}