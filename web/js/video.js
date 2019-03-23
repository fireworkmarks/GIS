//粒子特效
window.onload = function() {
		    //配置
		    var config = {
		        vx: 4,	//小球x轴速度,正为右，负为左
		        vy: 4,	//小球y轴速度
		        height: 2,	//小球高宽，其实为正方形，所以不宜太大
		        width: 2,
		        count: 150,		//点个数
		        color: "121, 162, 185", 	//点颜色
		        stroke: "130,255,255", 		//线条颜色
		        dist: 6000, 	//点吸附距离
		        e_dist: 20000, 	//鼠标吸附加速距离
		        max_conn: 10, 	//点到点最大连接数
		    }

		    //调用
		    CanvasParticle(config);
		}
//滑轮放大缩小 背景图变换
    function windowHeight() {
      var h = document.documentElement.clientHeight; //获取当前窗口可视操作区域高度
      var bodyHeight = document.getElementById("tt"); //寻找ID为content的对象
      bodyHeight.style.height = h + "px"; //你想要自适应高度的对象
      document.getElementById("myPlayer").style.height=(h*2/3)+"px";
    }
    setInterval(windowHeight, 100)//每半秒执行一次windowHeight函数
