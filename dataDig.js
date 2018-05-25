/**
 * Created by limengru on 2017/9/12.
 * 功能：数据挖掘
 */
$(function(){
    seajs.config({
        base: "./",
        //设置别名
        alias: {
            /*----------框架-------------*/
        	"builder":'dataDigBuilder',
			"dataDigcss":'dataDig.css',
			"mapData":'main/js/mapData',
			"cityData":'cityData/cityData',
			"cityDatacss":'cityData/cityData.css'
        },
        map:
            [
                //防止js、css文件夹下的文件被缓存
                [/^(.*\.(?:css|js))(.*)$/i,'$1?_=' + new Date().getTime()]
            ],
        debug: true
    });

    //分开加载会加快页面显示数据的速度
    //加载css
    seajs.use(["dataDigcss"], function () {
        seajs.use(["builder"]);
    });
});
