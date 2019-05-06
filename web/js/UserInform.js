//滑轮放大缩小 背景图变换
	window.onload = windowHeight; //页面载入完毕执行函数
    function windowHeight() {
    	getUser()
    	var h=document.getElementById("rr").clientHeight; //获取内部表单外的div高度
    	var bodyHeight = document.getElementById("tt"); //寻找ID为content的对象
    	h=h+102;
      var h1 = document.documentElement.clientHeight; //获取当前窗口可视操作区域高度
      if(h1<h)
      {
      	bodyHeight.style.height = h + "px";
      }
      else
      {
      bodyHeight.style.height = h1 + "px"; //你想要自适应高度的对象
    	}
    }

function getUser() {

	//查询登录用户
	$.ajax({
		url:'${contextPath}/getUserInfo',
		data:{
			"username":sessionStorage.getItem("user"),
			"userrmark":sessionStorage.getItem("mark")
		},
		type:'post',
		dataType:"json",
		success: function (result) {
			console.log(11111111111);
		},
		error:function(){
			swal("没有权限!","error");
		}
	});
}
	function back()
{
	window.location.href="index.html";	
}