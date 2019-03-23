//滑轮放大缩小 背景图变换
	window.onload = windowHeight; //页面载入完毕执行函数
    function windowHeight() {
    	var h=document.getElementById("rr").scrollHeight; //获取内部表单外的div高度
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
    setInterval(windowHeight, 10)//每半秒执行一次windowHeight函数

//检查输入数据的合法性
	function checkForm()
			{
				var email = document.getElementById("email").value;
				var phone = document.getElementById("phone").value;
				if (email != null && email != "") {
					var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/; 
				 	isok= reg.test(email); 
				 	if (!isok) 
				 	{ 
						document.getElementById("error").innerHTML = "邮箱格式不对！或者不填";
				 		return false; 
				 	}
				}
				if (phone != null && phone != "") {
					if(isNaN(phone)){
				  		document.getElementById("error").innerHTML = "手机电话必须为数字！或者不填";
						return false;
					}
					if (phone.length!=11)
					{
					document.getElementById("error").innerHTML = "手机电话必须为11位！或者不填";
					return false;
					}
				}
				return true;
			}
			
//点击取消事件函数			
function back()
{
	window.location.href="index.html";	
}