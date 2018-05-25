/**
 * Created by limengru on 2017/9/12.
 * 功能：加载底图
 */
define(function(require, exports, module) {
    exports.init = function(selector, tittle, data) {
        //加载底图
        var simple = {
		        "version": 8,
		        //"sprites": "",
		        "sources": {
		        	"dark":{
			        	"tileSize": 256,
			        	"tiles": 
	["http://t0.tianditu.com/cva_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=c&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=tiles"],
	                    "type": "raster"
		        	},
		        	"vce":{
			        	"tileSize": 256,
			        	"tiles": 
	["http://t0.tianditu.com/vec_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=c&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=tiles"],
	                    "type": "raster"
		        	}
		        },
		        "layers": [ {
                    "id":"testlayerId_cva_iisq_2",
                    "layout":{"visibility":"visible"},
                    "maxzoom":18,
                    "metadata":{
                    	 "alias":"vec",
                         "format":"tiles",
                         "formats":["tiles"],
                         "matrixSet":"c",
                         "maxZoom":18,
                         "minZoom":1,
                         "name":"vec",
                         "opacity":1,
                         "style": "default",
                         "tileFullExtent":"-180,-90,180,90",
                         "type":"WMTS",
                         "visibility": true
                    },
                    "minzoom":1,
                    "name":"vec",
                    "paint":{
                    	"raster-opacity":1
                    },
                    "source":"vce",
                    "type":"raster"
		           },{
                    "id":"testlayerId_cva_iisq_1",
                    "layout":{"visibility":"visible"},
                    "maxzoom":18,
                    "metadata":{
                    	 "alias":"cva",
                         "format":"tiles",
                         "formats":["tiles"],
                         "matrixSet":"c",
                         "maxZoom":18,
                         "minZoom":1,
                         "name":"cva",
                         "opacity":1,
                         "style": "default",
                         "tileFullExtent":"-180,-90,180,90",
                         "type":"WMTS",
                         "visibility": true
                    },
                    "minzoom":1,
                    "name":"cva",
                    "paint":{
                    	"raster-opacity":1
                    },
                    "source":"dark",
                    "type":"raster"
		           }
		          ]
		      };
      
        //添加map 
    	var map = new Geo.View2D.Map({
			mapCRS:{
		        topTileExtent:[-180, -270, 180, 90],
		        coordtransform:"none"
		    },
	        style:simple,
	        container:"baseMapData",
	        zoom: 7,
	        minZoom: 1,
			maxZoom: 18,
	        center: [113.32,23.04],
	        isAttributionControl: false
	    });
		
		map.isIntScrollZoom = true;//级别整数
		 
		// Saber.Mediator.on("setMapZoom",function(opetions){
		// 	    var centerpoint = opetions.citylonlat;
		//  	    var lon = centerpoint.lon;
		//  	    var lat = centerpoint.lat;
		//  	    var zoom = centerpoint.zoom;
		//  	    if(lon== undefined || lon=="" || isNaN(lon)){
		//  	    	return;
		//  	    }
		//  	    if(lat== undefined || lat=="" || isNaN(lat)){
		//  	    	return;
		//  	    }
		//  	    if(zoom== undefined || zoom=="" || isNaN(zoom)){
		//  	    	return;
		//  	    }
		//  	    map.isOpenMoveQuery==false;	
		//  	    map.setCenter(new Geo.LngLat(lon,lat), parseInt(zoom)); 
		//  	    map.setZoom(parseInt(zoom)); 
		//  		//MapData.map.setRealCenter(new OpenLayers.LonLat(lon,lat),zoom);
		//  });
    };
});