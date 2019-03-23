//背景切换功能
	$(function(){				
		setInterval(function(){
		$(".loginBackground").toggleClass("ocean0")
		},3000)																							
	})
			
			
//滑轮放大缩小 背景图变换
	window.onload = windowHeight; //页面载入完毕执行函数
    function windowHeight() {
	    var h=document.getElementById("rr").scrollHeight; //获取内部表单外的div高度
	    h=h+300;
	    var h1 = document.documentElement.clientHeight; //获取当前窗口可视操作区域高度
	    var bodyHeight = document.getElementById("tt"); //寻找ID为content的对象
	    if(h>h1)
	    {
	    	bodyHeight.style.height = h + "px"; //你想要自适应高度的对象
	    }
	    else
	    {
	    	bodyHeight.style.height = h1 + "px"; //你想要自适应高度的对象
	    }
      
    }
    setInterval(windowHeight, 10)//每半秒执行一次windowHeight函数
			
//判断是否为空
	function checkForm()
	{
		var userName = document.getElementById("userName").value;
		var userPhone = document.getElementById("userPhone").value;
		var userEmail = document.getElementById("userEmail").value;
		var userRmark = document.getElementById("userRmark").value;
		var userText = document.getElementById("userText").value;
		var passwordAdm = document.getElementById("passwordAdm").value;
		var password1 = document.getElementById("password").value;
		var MuserPwdSure = document.getElementById("MuserPwdSure").value;
		if (userName == null || userName == "") {
			document.getElementById("error").innerHTML = "用户名不能为空";
			return false;
		}
		if (userPhone == null || userPhone == "") {
			document.getElementById("error").innerHTML = "电话不能为空";
			return false;
		}
		if (userPhone.length!=11) {
			document.getElementById("error").innerHTML = "电话必须为11位";
			return false;
		}
		if(isNaN(userPhone)){
			document.getElementById("error").innerHTML = "电话必须为数字";
			return false;
		}
		if (userEmail == null || userEmail == "") {
			document.getElementById("error").innerHTML = "邮箱不能为空";
			return false;
		}
		var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/; 
		isok= reg.test(userEmail ); 
		if (!isok) 
		{ 
			document.getElementById("error").innerHTML = "邮箱格式不对！";
			return false; 
		}
		if (userRmark == null || userRmark == "") {
			document.getElementById("error").innerHTML = "备注不能为空";
			return false;
		}
		if (userText  == null ||userText == "") {
			document.getElementById("error").innerHTML = "描述不能为空";
			return false;
		}
		if (passwordAdm  == null ||passwordAdm== "") {
			document.getElementById("error").innerHTML = "管理员或者超级管理员秘钥不能为空";
			return false;
		}
		if (password1 == null || password1 == "") {
			document.getElementById("error").innerHTML = "密码不能为空";
			return false;
		}
		if (MuserPwdSure  == null ||MuserPwdSure== "") {
			document.getElementById("error").innerHTML = "再次填写秘密不能为空";
			return false;
		}
		if(MuserPwdSure!=password1 )
		{
		document.getElementById("error").innerHTML = "两次密码不一致";
			return false;
		}
		return true;
	}
			
			
