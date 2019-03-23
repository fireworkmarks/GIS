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
      bodyHeight.style.height = h+ "px"; //你想要自适应高度的对象
    }
    setInterval(windowHeight, 100)//每半秒执行一次windowHeight函数

	//判断是否为空
	function checkForm()
	{
		var userName = document.getElementById("userName").value;
		var password = document.getElementById("password").value;
		if (userName == null || userName == "") {
			document.getElementById("error").innerHTML = "用户名不能为空";
			return false;
		}
		if (password == null || password == "") {
			document.getElementById("error").innerHTML = "密码不能为空";
			return false;
		}
		return true;
	}


			
			
			
