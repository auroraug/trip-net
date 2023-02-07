<template>
  <div>
      <el-input type="text" id="suggestId" v-model="input" size="20" placeholder="请输入地址" clearable style="width: 300px;"></el-input>
    <div id="l-map" class="map" style="width: 538px;height: 300px;">
      <div id="searchResultPanel" style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"></div>
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  data() {
    return {
      input: '',
    };
  },
  methods: {
    AddressSearch() {
    const _this = this
    // 创建Map实例
    this.map = new BMap.Map('map')
    // 初始化地图,设置中心点坐标和地图级别
    this.map.centerAndZoom(new BMap.Point(104.072242, 30.663711), this.mapZoom)
    // 设置地图显示的城市 此项是必须设置的
    this.map.setCurrentCity('成都')
    //建立一个自动完成的对象
    //Autocomplete是结果提示、自动完成类。
    var Aco = new BMap.Autocomplete({
        // 输入框的id
        input: "city",
        location: this.map,
      })
      Aco.addEventListener("onhighlight", function (e) {
        //鼠标放在下拉列表上的事件
      })
      Aco.addEventListener("onconfirm", function (e) {
        //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        // 拼装的地址信息
        var myValue =
          _value.province +
          _value.city +
          _value.district +
          _value.street +
          _value.business;
        _this.setPlace(myValue);
      })
  },
  setPlace(value) {
    const _this = this;
    //this.map.clearOverlays(); //清除地图上所有覆盖物
    // 创建一个检索对象
    var local = new BMap.LocalSearch(_this.map, {
      //智能搜索
      onSearchComplete: function () {
        var getpo = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
        _this.map.centerAndZoom(getpo, 18);
        _this.map.addOverlay(new BMap.Marker(getpo)); //添加标注
      },
    });
    local.search(value);
  },

  },
  mounted() {
    var map = new BMap.Map("l-map");
	  map.centerAndZoom("北京",12);                   // 初始化地图,设置城市和地图级别。
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	  //添加地图类型控件
  
    map.addControl(
      new BMap.MapTypeControl({
        mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
      })
    );
  
    var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
      {"input" : "suggestId"
      ,"location" : map
    });

    ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
    // var str = "";
    // 	var _value = e.fromitem.value;
    // 	var value = "";
    // 	if (e.fromitem.index > -1) {
    // 		value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
    // 	}    
    // 	str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
      
    // 	value = "";
    // 	if (e.toitem.index > -1) {
    // 		_value = e.toitem.value;
    // 		value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
    // 	}    
    // 	str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
    // 	G("searchResultPanel").value = str;
      // console.log(G("searchResultPanel").value)
    });

    // var myValue;
    ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
      var _value = e.item.value;
      var myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
      setPlace(myValue)
    });
    function setPlace(value) {
      //this.map.clearOverlays(); //清除地图上所有覆盖物
      // 创建一个检索对象
      var local = new BMap.LocalSearch(map, {
        //智能搜索
        onSearchComplete: function () {
          var getpo = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
          map.centerAndZoom(getpo, 18);
          map.addOverlay(new BMap.Marker(getpo)); //添加标注
        },
      });
      local.search(value);
    }
  },
};
</script>
<style lang="less" scoped>
</style>