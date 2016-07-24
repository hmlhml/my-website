$(function(){
	var out=$(".out");
	out.fullpage({
		'navigation':true,
		'navigationTooltips':['登录百度舆情', '领先：数据收集与处理', '全面：舆情分析逻辑与架构', '专业：专业数据可视化'],
		afterLoad:function(out,i){
			$(".section").removeAttr("id");
			$(".section").eq(i-1).attr("id","active");	
			
		},
	})
	$(".next-page").click(function(){
		$.fn.fullpage.moveSectionDown();
	})





})