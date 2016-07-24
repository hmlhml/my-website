var news=[
	{
		"id":1,
		"title":"新列表",
		"color":"#C970E3",
		"option":"选项",
		"list":[]

	},
	{
		"id":2,
		"title":"新列表 2",
		"color":"#6EDC32",
		"list":[]

	}
]

var icloud=angular.module("icloud",[]);
icloud.controller("body",function($scope){
	$scope.news=news;
	$scope.color=["#C970E3","#6EDC32","#3FABF8","#F2CA00","#9F855D","#F62368","#F99600"];
	$scope.index=0;
	$scope.add=function(){
		var ids=$scope.news[$scope.news.length-1].id+1;
		$scope.news.push({
			"id":ids,
			"title":"新列表"+ids,
			"color":$scope.color[ids%7],
			"option":"选项",
			"list":[]
		})
		$scope.index=$scope.news.length-1;
	}
})