//背景切换功能
	$(function(){				
		setInterval(function(){
		$(".loginBackground").toggleClass("ocean0")
		},3000)																							
	})
			
			
//滑轮放大缩小 背景图变换
	window.onload = windowHeight; //页面载入完毕执行函数
    function windowHeight() {
      var h = document.documentElement.clientHeight; //获取当前窗口可视操作区域高度
      var bodyHeight = document.getElementById("tt"); //寻找ID为content的对象
      bodyHeight.style.height = h + "px"; //你想要自适应高度的对象
    }
    setInterval(windowHeight, 100)//每半秒执行一次windowHeight函数

//判断是否为空
			function checkForm()
			{
				var oderuserPwd = document.getElementById("oderuserPwd").value;
				var MuserPwd= document.getElementById("MuserPwd").value;
				var MuserPwdSure= document.getElementById("MuserPwdSure").value;
				
				if (oderuserPwd == null||oderuserPwd == "") 
				{
					document.getElementById("error").innerHTML = "旧密码不能为空";
					return false;
				}
				if(oderuserPwd.length<6)
				{
					document.getElementById("error").innerHTML = "旧密码不小于6位";
					return false;
				}
				if (MuserPwd== null || MuserPwd == "") {
					document.getElementById("error").innerHTML = "新密码不能为空";
					return false;
				}
				if(MuserPwd.length!=6)
				{
					document.getElementById("error").innerHTML = "新密码为6位";
					return false;
				}
				if (MuserPwdSure== null || MuserPwdSure == "") {
					document.getElementById("error").innerHTML = "再次填写新密码不能为空";
					return false;
				}
				if(MuserPwdSure.length!=6)
				{
					document.getElementById("error").innerHTML = "再次填写新密码为6位";
					return false;
				}
				if(MuserPwd==MuserPwdSure)
				{
				   if(MuserPwd==oderuserPwd)
				   {
				   	document.getElementById("error").innerHTML = "新密不能和旧密码一样";	
				   	return false;
				   }
				   return true;
				}
				else
				  {
				  	document.getElementById("error").innerHTML = "两次次填写新密码不一样";
					return false;
				  }
			}