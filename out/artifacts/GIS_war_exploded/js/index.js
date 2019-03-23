var shu=0;

//加载地图图层等信息和功能实现

	  function onload(Cesium) 
	  {
//	    var infoboxContainer = document.getElementById("bubble");
	//初始化viewer部件
	    var viewer = new Cesium.Viewer('cesiumContainer');
	    //摄像头显示关闭 变换标志位
	    var f=0;
//	    viewer.customInfobox = infoboxContainer;
	    var scene = viewer.scene;
	    var canvas = scene.canvas;
	    var widget = viewer.cesiumWidget;
	    var handlerDis,handlerArea,handlerHeight;
	    var clampMode = 0; // 空间模式
	    $('#loadingbar').remove();
	    try 
	    {
			//添加S3M图层服务
		    var promise_wushui = scene.addS3MTilesLayerByScp('http://localhost:8090/iserver/services/3D-University_XIHUA2/rest/realspace/datas/Config/config',
		    {
		      name: 'Config_wushui'
		    });
			Cesium.when(promise_wushui , function (layer) 
			{
	        
		        if(!scene.pickPositionSupported){
		          alert('不支持深度拾取,属性查询功能无法使用！');
		        }
				//设置属性查询参数
			    layer.setQueryParameter({
			    //url: 'http://localhost:8090/iserver/services/data-New/rest/data',
			    url: 'http://localhost:8090/iserver/services/data-University_XIHUA2/rest/data',
			    dataSourceName: 'MSIdata',
			    dataSetName: 'Region_xihuadaxue',
			    keyWord: 'MS'
			    });
				
			        scene.camera.setView({
				//将经度、纬度、高度的坐标转换为笛卡尔坐标
				//118.55916,24.80964
			          destination : Cesium.Cartesian3.fromDegrees(106.065035, 30.821924,1000),
			          
			        });
			     
	  
		     }, function (e) 
	      		{
			        if (widget._showRenderLoopErrors) {
			          var title = '渲染时发生错误，已停止渲染。';
			          widget.showErrorPanel(title, undefined, e);
			        }
	      		});
	    }
	    catch (e) 
	    {
		    if (widget._showRenderLoopErrors) 
		    {
			    var title = '渲染时发生错误，已停止渲染 。';
			    widget.showErrorPanel(title, undefined, e);
		    }
			}
		//添加自定义infobox
		    var title1 = document.getElementById("title");
		    var des = document.getElementById("des");
		    var myimg = document.getElementById("myimg");
		//注册鼠标点击事件
		    viewer.pickEvent.addEventListener(function(feature){
		    var title = Cesium.defaultValue(feature.NAME,'');//获取该建筑名称
		    var des1 = Cesium.defaultValue(feature.EXPLAIN_WORD,'');//获取该建筑描述
		    shu = Cesium.defaultValue(feature.IMG_URL,'');  //获取楼层数
		    var name =Cesium.defaultValue(feature.CAMERA_NUM); //获取楼栋的唯一标识位
		    title1.innerText = title;
		    title1.setAttribute("name",name);
			  des.innerText=des1;
		    myimg.src = "images/1.jpg";
				
				//添加监控分布 子列表内容
			 	var div = document.getElementById("s"); 
				while(div.hasChildNodes())
				//当div下还存在子节点时 循环继续  
				{ 
					div.removeChild(div.firstChild); 
				}
			  	for(var k=0;k<shu;k++)
		      {
					var li= document.createElement("li");
					var a= document.createElement("a");
					var h="video.html"; //设置按钮对应跳转的监控页面名字
					li.setAttribute("class","newLi");
					li.setAttribute("name",k+1);// 设置摄像头的唯一标识
//				li.innerHTML="第"+(k+1)+"楼层: "+"<a href='"+h+"' >"+"<button>"+"摄像头"+(k+1)+"</button>"+"</a>";
					li.innerHTML="第"+(k+1)+"楼层: "+"<a href='"+h+"' >"+"<input type='"+"submit"+"' value='"+"摄像头"+(k+1)+"'>"+"</a>";
					s.appendChild(li);
					}
			  	window.location.herf="findimg.action";
		      document.TForm.submit();
		    });
		    
	function change()  //开启显示摄像头
	{
			//1
			viewer.entities.add({
		    id:"idone1",
		    position : Cesium.Cartesian3.fromDegrees(106.064989733028, 30.822738898958143,400),
		    billboard :{//广告板
		        show : true, // default
		        image : "images/s1.png",
		        width:30,
		        height:30,
		
		    },
		    name :"摄像头一",
			});

			//2
			viewer.entities.add({
		    id:"idone2",
		    position : Cesium.Cartesian3.fromDegrees(106.06471632804997, 30.820878879053765,370),
		    billboard :{//广告板
		        show : true, // default
		        image : "images/s1.png",
		        width:30,
		        height:30,
		
		    },
		    name :"摄像头二",
			});
			
			//3
			viewer.entities.add({
		    id:"idone3",
		    position : Cesium.Cartesian3.fromDegrees(106.06340081788358, 30.821430928054717,370),
		    billboard :{//广告板
		        show : true, // default
		        image : "images/s1.png",
		        width:30,
		        height:30,
		
		    },
		    name :"摄像头三",
			});
			//4
			viewer.entities.add({
		    id:"idone4",
		    position : Cesium.Cartesian3.fromDegrees(106.06357792909776, 30.819748837629195,370),
		    billboard :{//广告板
		        show : true, // default
		        image : "images/s1.png",
		        width:30,
		        height:30,
		
		    },
		    name :"摄像头四",
			});
			//5
			viewer.entities.add({
		    id:"idone5",
		    position : Cesium.Cartesian3.fromDegrees(106.06622441271864, 30.820967812094185,370),
		    billboard :{//广告板
		        show : true, // default
		        image : "images/s1.png",
		        width:30,
		        height:30,
		
		    },
		    name :"摄像头五",
			});
			//6
			viewer.entities.add({
		    id:"idone6",
		    position : Cesium.Cartesian3.fromDegrees(106.06741010229037, 30.82218862995714,360),
		    billboard :{//广告板
		    	show:true,
		        image : "images/s1.png",
		        width:30,
		        height:30,
		
		    },
		    name :"摄像头六",
			});
	}
		    //end
		    
		    
		    
		    
		    
		    
		    //初始化测量距离
		        handlerDis = new Cesium.MeasureHandler(viewer,Cesium.MeasureMode.Distance,clampMode);
		        //注册测距功能事件
			        handlerDis.measureEvt.addEventListener(function(result){
			            var dis = Number(result.distance);
			            var distance = dis > 1000 ? (dis/1000).toFixed(2) + 'km' : dis.toFixed(2) + 'm';
			            handlerDis.disLabel.text = '距离:' + distance;
			            
			        });
			        handlerDis.activeEvt.addEventListener(function(isActive){
			            if(isActive == true){
			                viewer.enableCursorStyle = false;
			                viewer._element.style.cursor = '';
			                $('body').removeClass('measureCur').addClass('measureCur');
			            }
			            else{
			                viewer.enableCursorStyle = true;
			                $('body').removeClass('measureCur');
			            }
			        });
			        
			//初始化测量面积
        handlerArea = new Cesium.MeasureHandler(viewer,Cesium.MeasureMode.Area,clampMode);
        handlerArea.measureEvt.addEventListener(function(result){
            var mj = Number(result.area);
            var area = mj > 1000000 ? (mj/1000000).toFixed(2) + 'km²' : mj.toFixed(2) + '㎡'
            handlerArea.areaLabel.text = '面积:' + area;
        });
        handlerArea.activeEvt.addEventListener(function(isActive){
            if(isActive == true){
                viewer.enableCursorStyle = false;
                viewer._element.style.cursor = '';
                $('body').removeClass('measureCur').addClass('measureCur');
            }
            else{
                viewer.enableCursorStyle = true;
                $('body').removeClass('measureCur');
            }
        });

        //初始化测量高度
        handlerHeight = new Cesium.MeasureHandler(viewer,Cesium.MeasureMode.DVH);
        handlerHeight.measureEvt.addEventListener(function(result){
            var distance = result.distance > 1000 ? (result.distance/1000).toFixed(2) + 'km' : result.distance + 'm';
            var vHeight = result.verticalHeight > 1000 ? (result.verticalHeight/1000).toFixed(2) + 'km' : result.verticalHeight + 'm';
            var hDistance = result.horizontalDistance > 1000 ? (result.horizontalDistance/1000).toFixed(2) + 'km' : result.horizontalDistance + 'm';
            handlerHeight.disLabel.text = '空间距离:' + distance;
            handlerHeight.vLabel.text = '垂直高度:' + vHeight;
            handlerHeight.hLabel.text = '水平距离:' + hDistance;
        });
        handlerHeight.activeEvt.addEventListener(function(isActive){
            if(isActive == true){
                viewer.enableCursorStyle = false;
                viewer._element.style.cursor = '';
                $('body').removeClass('measureCur').addClass('measureCur');
            }
            else{
                viewer.enableCursorStyle = true;
                $('body').removeClass('measureCur');
            }
        });
		
		//绘制地标
		        var handlerMarker = new Cesium.DrawHandler(viewer,Cesium.DrawMode.Marker);
        handlerMarker.activeEvt.addEventListener(function(isActive){
            if(isActive == true){
                viewer.enableCursorStyle = false;
                viewer._element.style.cursor = '';
                $('body').removeClass('drawCur').addClass('drawCur');
            }
            else{
                viewer.enableCursorStyle = true;
                $('body').removeClass('drawCur');
            }
        });
		handlerMarker.movingEvt.addEventListener(function(windowPosition){
            tooltip.showAt(windowPosition,'<p>点击绘制地标</p>');
        });
        handlerMarker.drawEvt.addEventListener(function(result){
            tooltip.setVisible(false);
        });
			
        $('#distance').click(function(){
            deactiveAll();
            handlerDis && handlerDis.activate();
        });

        $('#area').click(function(){
            deactiveAll();
            handlerArea && handlerArea.activate();
        });
        $('#height').click(function(){
            deactiveAll();
            handlerHeight && handlerHeight.activate();
        });
        $('#clear').click(function(){
            clearAll();
        });
        //摄像头的变换显示与关闭
        change();
        f=1;
        $('#she').click(function(){
        	if(f==0)
        	{
            change();
            f=1;
            document.getElementById("she").innerText="隐藏摄像头位置";
           	}
        	else if(f==1)
        	{
        		viewer.entities.removeAll()
        		f=0;
        		 document.getElementById("she").innerText="显示摄像头位置";
        	}

        });
		$('#marker').click(function(){
            handlerMarker.activate();
        });			
					
					 function clearAll(){
			            handlerDis  && handlerDis.clear();
			            handlerArea  && handlerArea.clear();
			            handlerHeight && handlerHeight.clear();
			            handlerMarker.clear();
			        }
		
			        function deactiveAll(){
			            handlerDis  && handlerDis.deactivate();
			            handlerArea  && handlerArea.deactivate();
			            handlerHeight && handlerHeight.deactivate();
			          
			        }	        
	}			    
	//end
	
//提交表单
