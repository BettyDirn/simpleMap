/**
 * Created by limengru on 2017/9/12.
 */
define(function(require,exports,moudles){
      var mapData = require("mapData");
      mapData.init();
      
      var cityData = require("cityData");
      cityData.init("#mapDigCity");
})