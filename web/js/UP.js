	// function checkf() {
	// 	var files = document.getElementsByName("upload");
	// 	if (files[0].value.length != 0) {
	// 		return true;
	// 	} else {
	// 		alert("请选择文件");
	// 		return false;
	// 	}
	// }

	//滑轮放大缩小 背景图变换
	window.onload = windowHeight; //页面载入完毕执行函数
	function windowHeight() {
		var h = document.documentElement.clientHeight; //获取当前窗口可视操作区域高度
		var bodyHeight = document.getElementById("tt"); //寻找ID为content的对象
		bodyHeight.style.height = h + "px"; //你想要自适应高度的对象
	}
	setInterval(windowHeight, 100)//每半秒执行一次windowHeight函数