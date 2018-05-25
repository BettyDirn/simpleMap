/**
 * Created by limengru on 2017/9/12.
 * 功能：城市定位
 */
define(function(require,exports,moudles){
	  require("cityDatacss");
	  var sCurUrl = moudles.uri;
	  var sHtmlUrl = sCurUrl.replace(".js", ".html");
	  var sJsonUrl = sCurUrl.replace(".js", ".json");
	  
	  exports.init = function(selector, tittle, data){
		    var htmlobj = $.ajax({
		    	url:sHtmlUrl,
		    	  async: false
		    });
		    var jsonobj = $.ajax({
		    	url:sJsonUrl,
		    	  async: false
		    });
		   
		    $(selector).html(htmlobj.responseText);
		    $("#showPanel").hide();
		    initEvent();
		    createCitys(jsonobj.responseJSON);
	  };
	  
	  function initEvent(){
		$("#cityDigmodel").click(function(){
			if($("#showPanel").is(':visible')){
				  $("#showPanel").hide();
			}else{
				  $("#showPanel").show();
			}
		});  
		$("#cityclose").click(function(){
			 $("#showPanel").hide();
		});
	  };
	  
	  function createCitys(data){
		     $("#citys").unbind();
		     $.each(data,function(i,value){
		    	 var text;
		    	 if(value.level=="1"){
		    		 text = '<span class="country citys" lat="'+value.lat+'" lon="'+value.lon+'" zoom="'+value.zoom+'" name="'+value.areaName+'">'+value.areaName+'</span><br>';
		    	 }else  if(value.level=="2"){
		    		 text = '<span class="country citys" lat="'+value.lat+'" lon="'+value.lon+'" zoom="'+value.zoom+'" name="'+value.areaName+'">'+value.areaName+'</span>';
		    	 }else {
		    		 text = '<span class="citys" lat="'+value.lat+'" lon="'+value.lon+'" zoom="'+value.zoom+'" name="'+value.areaName+'">'+value.areaName+'</span>';
		    	    
		    	 }
		    	 $("#city-list").append(text);
		     });
		    $(".citys").bind("click",function(){
		    	var _lon = $(this).attr("lon");
				var _lat = $(this).attr("lat");
				var _zoom = $(this).attr("zoom");
				var _name = $(this).attr("name");
				var opetions ={
					cityname:_name,
					citylonlat:{
						lon:_lon,
						lat:_lat,
						zoom:_zoom
					}
				}
			Saber.Mediator.trigger("setMapZoom",opetions);
			$("#selectName").html(_name); 
			 $("#showPanel").hide();
		    }) ;
		   
	  };
});
