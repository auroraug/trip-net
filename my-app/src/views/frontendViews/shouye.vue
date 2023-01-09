<template>
    <div>
        <div class="search_ad" style="height: 320px;">
            <div class="left_search">
                <a href="https://train.qunar.com/stationToStation.htm?fromStation=%E6%88%90%E9%83%BD&toStation=%E6%98%86%E6%98%8E&date=2022-12-20">
                <img src="../../../image/sousuo.jpg" alt="">
                </a>
            </div>
            <div class="right_ad">
                <a href="https://zt.dujia.qunar.com/bp/zt.php?id=4024&tf=dsyysj&in_track=dsyysj">
                <img src="../../../image/ad.jpg" style="width: 440px;height: 320px;" alt="">
                </a>
            </div>
        </div>
        <div class="mod-home-mid-advertisement">
            <abbr style="display: none;" title=""></abbr>
        </div>
        <div class="flight_div">
            <div class="flight_head">
                <div class="title">
                    <ul>
                        <li><a href="javascript:;" :class="className1" @mouseenter="onMouseEnter(1)" >国内低价机票</a></li>
                        <li><a href="javascript:;" :class="className2" @mouseenter="onMouseEnter(2)" >国际·港澳台低价航线(单程)</a></li>
                    </ul>
                </div>
            </div>
            <div class="flight_body">
                <ul class="flight_ul">
                    <li v-for="item in Fdata" :key="item.to" v-bind:index="item.to">
                        <a class="mod-home-flight-link" href="https://flight.qunar.com/twell/flight/Search.jsp?fromCity=%E5%8C%97%E4%BA%AC&amp;toCity=%E6%98%86%E6%98%8E&amp;fromDate=2022-12-18&amp;toDate=2022-12-18&amp;searchType=OnewayFlight&amp;from=tejia_d_search&amp;ishttps=1" target="_blank" rel="nofollow" tabindex="0">
                            <div class="mod-home-flight-place" tabindex="0">
                            <span tabindex="0">{{item.from}}</span>
                            <i class="mod-home-flight-icon" tabindex="0">→</i>
                            <span tabindex="0">{{item.to}}</span>
                            </div>
                            <div class="mod-home-flight-date" tabindex="0">{{item.date}}</div>
                            <div class="mod-home-flight-priceFlex" tabindex="0">
                            <div class="mod-home-flight-price" tabindex="0">
                                <span class="mod-home-flight-price-icon" tabindex="0">￥</span>
                                <span class="mod-home-flight-price-count" tabindex="0">{{item.price}}</span>
                                <span class="mod-home-flight-price-word" tabindex="0">起</span>
                            </div>
                            <span class="mod-home-flight-discount" tabindex="0">{{ item.discount == 'null'?item.discount:''}}</span>
                            </div>
                            <div class="mod-home-flight-btn" tabindex="0">立抢</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="hotel_div">
            <div class="hotel_head">
                <div class="title">
                    <ul>
                        <li><a href="javascript:;" :class="className3" @mouseenter="onMouseEnter1(1)" >国内酒店必住榜</a></li>
                        <li><a href="javascript:;" :class="className4" @mouseenter="onMouseEnter1(2)" >国内酒店推荐</a></li>
                    </ul>
                </div>
            </div>
            <div class="hotel_body" style="height: 330px;">
                <ul class="mod-home-hotel-ul" tabindex="0">
                    <li v-for="item in HotelD1" :style="{backgroundImage: `url(${item.image})`}" tabindex="0" :key="item.words" v-bind:index="item.words">
                        <a class="mod-home-hotel-link mod-home-hotel-link__must" target="_blank" :href="item.href">
                            <div class="mod-home-hotel-title" tabindex="0">
                                <div class="mod-home-hotel-words" tabindex="0">{{item.words}}</div>
                                <i class="mod-home-hotel-icon" tabindex="0">→</i>
                            </div>
                            <div class="mod-home-hotel-desc" tabindex="0"></div>
                        </a>
                    </li>
                    <li v-for="item in HotelD2" class="mod-home-hotel-recommend" :key="item.name" v-bind:index="item.name">
                      <a class="mod-home-hotel-link" target="_blank" :href="item.href">
                        <img class="mod-home-hotel-img" :src="item.image">
                        <div class="mod-home-hotel-name">{{ item.name }}</div>
                        <div class="mod-home-hotel-score">{{ item.score }}</div>
                        <div class="mod-home-hotel-remark">{{ item.remark }}</div>
                        <div class="mod-home-hotel-address">{{item.address}}</div>
                        <div class="mod-home-hotel-tagList">
                          <div class="mod-home-hotel-tagItem">免费取消</div>
                        </div>
                        <div class="mod-home-hotel-price">
                          <div class="mod-home-hotel-num">¥{{item.price}}</div>
                          <div class="mod-home-hotel-qi">起</div>
                        </div>
                      </a>
                    </li>
                </ul>
                <!-- <ul class="mod-home-hotel-ul">
                    <li class="mod-home-hotel-recommend">
                      <a class="mod-home-hotel-link" target="_blank" href="https://hotel.qunar.com/cn/beijing_city/dt-123420/?hotelSource=5403">
                        <img class="mod-home-hotel-img" src="https://userimg.qunarzz.com/imgs/202207/31/C.v_mOjfIXgUKxvWpPI480.jpg">
                        <div class="mod-home-hotel-name">Wohkoon者行孙酒店(北京三里屯工体店)</div>
                        <div class="mod-home-hotel-score">4.8分</div>
                        <div class="mod-home-hotel-remark">800条评论</div>
                        <div class="mod-home-hotel-address">三里屯/工体/东直门 · 靠近东大桥地铁站</div>
                        <div class="mod-home-hotel-tagList">
                          <div class="mod-home-hotel-tagItem">免费取消</div>
                        </div>
                        <div class="mod-home-hotel-price">
                          <div class="mod-home-hotel-num">¥115</div>
                          <div class="mod-home-hotel-qi">起</div>
                        </div>
                      </a>
                    </li>
                </ul> -->
            </div>
        </div>
        <div class="piao_div">
            <div class="piao_head">
                <div class="title">
                    <ul>
                        <li><a href="javascript:;" :class="className5" @mouseenter="onMouseEnter2(1)" >当季景点门票</a></li>
                        <li><a href="javascript:;" :class="className6" @mouseenter="onMouseEnter2(2)" >特惠门票</a></li>
                    </ul>
                </div>
            </div>
            <div class="mod-home-piao-body clrfix" tabindex="0">
                <div class="mod-home-piao-jingdian" tabindex="0" v-bind:style="{display: className5 =='change'?'block':'none'}">
                        <div class="mod-text-link" tabindex="0">
                        <div class="mod-text-link-item" tabindex="0">
                            <p class="mod-text-link-title" tabindex="0">热门景点</p>
                            <div class="mod-text-link-content" tabindex="0">
                                <ul class="clrfix" tabindex="0">
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/detail_7422.html#from=home_remen&amp;in_track=qunar_djmp_hotsight_7422" title="婺源" tabindex="0">婺源</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/detail_12813.html#from=home_remen&amp;in_track=qunar_djmp_hotsight_12813" title="明月山" tabindex="0">明月山</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/detail_31152.html#from=home_remen&amp;in_track=qunar_djmp_hotsight_31152" title="龙虎山" tabindex="0">龙虎山</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/detail_195591.html#from=home_remen&amp;in_track=qunar_djmp_hotsight_195591" title="九江民生大千世界游乐园" tabindex="0">九江民生大千世界游乐园</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/detail_24002.html#from=home_remen&amp;in_track=qunar_djmp_hotsight_24002" title="滕王阁" tabindex="0">滕王阁</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/detail_15262.html#from=home_remen&amp;in_track=qunar_djmp_hotsight_15262" title="庐山" tabindex="0">庐山</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/detail_38714.html#from=home_remen&amp;in_track=qunar_djmp_hotsight_38714" title="古窑民俗博览区" tabindex="0">古窑民俗博览区</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/detail_4390.html#from=home_remen&amp;in_track=qunar_djmp_hotsight_4390" title="江西明月山天沐温泉" tabindex="0">江西明月山天沐温泉</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/detail_187106.html#from=home_remen&amp;in_track=qunar_djmp_hotsight_187106" title="鄱阳湖国家湿地公园" tabindex="0">鄱阳湖国家湿地公园</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/detail_33697.html#from=home_remen&amp;in_track=qunar_djmp_hotsight_33697" title="凤凰沟" tabindex="0">凤凰沟</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/detail_6113.html#from=home_remen&amp;in_track=qunar_djmp_hotsight_6113" title="仙女湖" tabindex="0">仙女湖</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/detail_192107.html#from=home_remen&amp;in_track=qunar_djmp_hotsight_192107" title="桃花源漂流" tabindex="0">桃花源漂流</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/detail_193018.html#from=home_remen&amp;in_track=qunar_djmp_hotsight_193018" title="南昌之星摩天轮" tabindex="0">南昌之星摩天轮</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/detail_12091.html#from=home_remen&amp;in_track=qunar_djmp_hotsight_12091" title="三清山" tabindex="0">三清山</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/detail_14867.html#from=home_remen&amp;in_track=qunar_djmp_hotsight_14867" title="武功山" tabindex="0">武功山</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/detail_13530.html#from=home_remen&amp;in_track=qunar_djmp_hotsight_13530" title="碧龙潭" tabindex="0">碧龙潭</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/detail_191433.html#from=home_remen&amp;in_track=qunar_djmp_hotsight_191433" title="明月山顺天维景国际温泉度假村" tabindex="0">明月山顺天维景国际温泉度假村</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/detail_8787.html#from=home_remen&amp;in_track=qunar_djmp_hotsight_8787" title="瑶里古镇" tabindex="0">瑶里古镇</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/detail_10530.html#from=home_remen&amp;in_track=qunar_djmp_hotsight_10530" title="庐山天沐温泉 " tabindex="0">庐山天沐温泉 </a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/detail_14238.html#from=home_remen&amp;in_track=qunar_djmp_hotsight_14238" title="井冈山" tabindex="0">井冈山</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/detail_33778.html#from=home_remen&amp;in_track=qunar_djmp_hotsight_33778" title="庐山龙湾温泉" tabindex="0">庐山龙湾温泉</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="mod-text-link-item" tabindex="0">
                            <p class="mod-text-link-title" tabindex="0">国内目的地</p>
                            <div class="mod-text-link-content" tabindex="0">
                                <ul class="clrfix" tabindex="0">
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/list_%E6%AD%A6%E6%B1%89.html#from=home_remen&amp;in_track=qunar_djmp_gnmdd_%E6%AD%A6%E6%B1%89" title="武汉" tabindex="0">武汉</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/list_%E5%8C%97%E4%BA%AC.html#from=home_remen&amp;in_track=qunar_djmp_gnmdd_%E5%8C%97%E4%BA%AC" title="北京" tabindex="0">北京</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/list_%E4%B8%8A%E6%B5%B7.html#from=home_remen&amp;in_track=qunar_djmp_gnmdd_%E4%B8%8A%E6%B5%B7" title="上海" tabindex="0">上海</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/list_%E4%B8%89%E4%BA%9A.html#from=home_remen&amp;in_track=qunar_djmp_gnmdd_%E4%B8%89%E4%BA%9A" title="三亚" tabindex="0">三亚</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/list_%E6%88%90%E9%83%BD.html#from=home_remen&amp;in_track=qunar_djmp_gnmdd_%E6%88%90%E9%83%BD" title="成都" tabindex="0">成都</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/list_%E5%8E%A6%E9%97%A8.html#from=home_remen&amp;in_track=qunar_djmp_gnmdd_%E5%8E%A6%E9%97%A8" title="厦门" tabindex="0">厦门</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/list_%E5%B9%BF%E5%B7%9E.html#from=home_remen&amp;in_track=qunar_djmp_gnmdd_%E5%B9%BF%E5%B7%9E" title="广州" tabindex="0">广州</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/list_%E6%B7%B1%E5%9C%B3.html#from=home_remen&amp;in_track=qunar_djmp_gnmdd_%E6%B7%B1%E5%9C%B3" title="深圳" tabindex="0">深圳</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/list_%E6%9D%AD%E5%B7%9E.html#from=home_remen&amp;in_track=qunar_djmp_gnmdd_%E6%9D%AD%E5%B7%9E" title="杭州" tabindex="0">杭州</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/list_%E5%A4%A7%E8%BF%9E.html#from=home_remen&amp;in_track=qunar_djmp_gnmdd_%E5%A4%A7%E8%BF%9E" title="大连" tabindex="0">大连</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/list_%E6%A1%82%E6%9E%97.html#from=home_remen&amp;in_track=qunar_djmp_gnmdd_%E6%A1%82%E6%9E%97" title="桂林" tabindex="0">桂林</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/list_%E9%87%8D%E5%BA%86.html#from=home_remen&amp;in_track=qunar_djmp_gnmdd_%E9%87%8D%E5%BA%86" title="重庆" tabindex="0">重庆</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/list_%E9%9D%92%E5%B2%9B.html#from=home_remen&amp;in_track=qunar_djmp_gnmdd_%E9%9D%92%E5%B2%9B" title="青岛" tabindex="0">青岛</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/list_%E8%8B%8F%E5%B7%9E.html#from=home_remen&amp;in_track=qunar_djmp_gnmdd_%E8%8B%8F%E5%B7%9E" title="苏州" tabindex="0">苏州</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/list_%E5%8D%97%E4%BA%AC.html#from=home_remen&amp;in_track=qunar_djmp_gnmdd_%E5%8D%97%E4%BA%AC" title="南京" tabindex="0">南京</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/list_%E4%B8%BD%E6%B1%9F.html#from=home_remen&amp;in_track=qunar_djmp_gnmdd_%E4%B8%BD%E6%B1%9F" title="丽江" tabindex="0">丽江</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/list_%E5%A4%A9%E6%B4%A5.html#from=home_remen&amp;in_track=qunar_djmp_gnmdd_%E5%A4%A9%E6%B4%A5" title="天津" tabindex="0">天津</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/list_%E6%98%86%E6%98%8E.html#from=home_remen&amp;in_track=qunar_djmp_gnmdd_%E6%98%86%E6%98%8E" title="昆明" tabindex="0">昆明</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/ticket/list_%E5%BC%A0%E5%AE%B6%E7%95%8C.html#from=home_remen&amp;in_track=qunar_djmp_gnmdd_%E5%BC%A0%E5%AE%B6%E7%95%8C" title="张家界" tabindex="0">张家界</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="mod-text-link-item" tabindex="0">
                            <p class="mod-text-link-title" tabindex="0">品质一日游</p>
                            <div class="mod-text-link-content" tabindex="0">
                                <ul class="clrfix" tabindex="0">
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/daytrip/list.htm?keyword=%E4%B8%80%E6%97%A5%E6%B8%B8&amp;region=%E6%B1%9F%E8%A5%BF&amp;sightNames=%E4%B9%8C%E9%95%87%E4%B8%80%E6%97%A5%E6%B8%B8&amp;from=mdl_search&amp;in_track=qunar_djmp_pzyry" title="乌镇一日游" tabindex="0">乌镇一日游</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/daytrip/list.htm?keyword=%E4%B8%80%E6%97%A5%E6%B8%B8&amp;region=%E6%B1%9F%E8%A5%BF&amp;sightNames=%E5%91%A8%E5%BA%84%E4%B8%80%E6%97%A5%E6%B8%B8&amp;from=mdl_search&amp;in_track=qunar_djmp_pzyry" title="周庄一日游" tabindex="0">周庄一日游</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/daytrip/list.htm?keyword=%E4%B8%80%E6%97%A5%E6%B8%B8&amp;region=%E6%B1%9F%E8%A5%BF&amp;sightNames=%E8%A5%BF%E6%B9%96%E4%B8%80%E6%97%A5%E6%B8%B8&amp;from=mdl_search&amp;in_track=qunar_djmp_pzyry" title="西湖一日游" tabindex="0">西湖一日游</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/daytrip/list.htm?keyword=%E4%B8%80%E6%97%A5%E6%B8%B8&amp;region=%E6%B1%9F%E8%A5%BF&amp;sightNames=%E5%8D%83%E5%B2%9B%E6%B9%96%E4%B8%80%E6%97%A5%E6%B8%B8&amp;from=mdl_search&amp;in_track=qunar_djmp_pzyry" title="千岛湖一日游" tabindex="0">千岛湖一日游</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/daytrip/list.htm?keyword=%E4%B8%80%E6%97%A5%E6%B8%B8&amp;region=%E6%B1%9F%E8%A5%BF&amp;sightNames=%E8%A5%BF%E5%A1%98%E4%B8%80%E6%97%A5%E6%B8%B8&amp;from=mdl_search&amp;in_track=qunar_djmp_pzyry" title="西塘一日游" tabindex="0">西塘一日游</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/daytrip/list.htm?keyword=%E4%B8%80%E6%97%A5%E6%B8%B8&amp;region=%E6%B1%9F%E8%A5%BF&amp;sightNames=%E5%86%B2%E7%BB%B3%E5%B7%B4%E5%A3%AB%E4%B8%80%E6%97%A5%E6%B8%B8&amp;from=mdl_search&amp;in_track=qunar_djmp_pzyry" title="冲绳巴士一日游" tabindex="0">冲绳巴士一日游</a></li>
                                    <li tabindex="0"><a target="_blank" rel="nofollow" href="https://piao.qunar.com/daytrip/list.htm?keyword=%E4%B8%80%E6%97%A5%E6%B8%B8&amp;region=%E6%B1%9F%E8%A5%BF&amp;sightNames=%E6%96%AF%E7%B1%B3%E5%85%B0%E7%BE%A4%E5%B2%9B%E4%B8%80%E6%97%A5%E6%B8%B8&amp;from=mdl_search&amp;in_track=qunar_djmp_pzyry" title="斯米兰群岛一日游" tabindex="0">斯米兰群岛一日游</a></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div class="right-ctn" tabindex="0">
                            <!-- 门票图片推荐位 -->
                
                            <div class="blocks clrfix" tabindex="0">
                                <a class="block-item " target="_blank" href="https://piao.qunar.com/ticket/detail_1123.html#from=home_remen&amp;in_track=qunar_djmp_pic_1123" tabindex="0">
                                    <div class="image-ctn" tabindex="0">
                                        <img src="https://img1.qunarzz.com/sight/p0/201301/09/49540a2cc2419f7f93835fbb.jpg_256x160_57ef2b99.jpg" tabindex="0">
                                    </div>
                                    <div class="content-border" tabindex="0">
                                        <div class="content" tabindex="0">
                                            <div class="title" tabindex="0">
                                                洪岩仙境风景区
                                            </div>
                                            <div class="detail" tabindex="0">上亿年历史的地下溶洞</div>
                                            <div class="prices-ctn" tabindex="0">
                                                <span class="price" tabindex="0">
                                                    ¥<em tabindex="0">59.8</em>
                                                </span>
                                                <div class="old-price" tabindex="0">
                                                    市场价：
                                                    <em tabindex="0">¥</em>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="block-item " target="_blank" href="https://piao.qunar.com/ticket/detail_187606.html#from=home_remen&amp;in_track=qunar_djmp_pic_187606" tabindex="0">
                                    <div class="image-ctn" tabindex="0">
                                        <img src="https://img1.qunarzz.com/sight/p0/1908/71/71d5a7c27a9695caa3.img.jpg_256x160_574d8783.jpg" tabindex="0">
                                    </div>
                                    <div class="content-border" tabindex="0">
                                        <div class="content" tabindex="0">
                                            <div class="title" tabindex="0">
                                                婺源篁岭
                                            </div>
                                            <div class="detail" tabindex="0">高岭梯田花海</div>
                                            <div class="prices-ctn" tabindex="0">
                                                <span class="price" tabindex="0">
                                                    ¥<em tabindex="0">139.0</em>
                                                </span>
                                                <div class="old-price" tabindex="0">
                                                    市场价：
                                                    <em tabindex="0">¥</em>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="block-item " target="_blank" href="https://piao.qunar.com/ticket/detail_14867.html#from=home_remen&amp;in_track=qunar_djmp_pic_14867" tabindex="0">
                                    <div class="image-ctn" tabindex="0">
                                        <img src="https://img1.qunarzz.com/sight/p0/1505/77/77179a76466805bc.water.jpg_256x160_b6aa07be.jpg" tabindex="0">
                                    </div>
                                    <div class="content-border" tabindex="0">
                                        <div class="content" tabindex="0">
                                            <div class="title" tabindex="0">
                                                武功山
                                            </div>
                                            <div class="detail" tabindex="0">露营观日出云海</div>
                                            <div class="prices-ctn" tabindex="0">
                                                <span class="price" tabindex="0">
                                                    ¥<em tabindex="0">50.0</em>
                                                </span>
                                                <div class="old-price" tabindex="0">
                                                    市场价：
                                                    <em tabindex="0">¥</em>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="block-item res-hide2" target="_blank" href="https://piao.qunar.com/ticket/detail_510659.html#from=home_remen&amp;in_track=qunar_djmp_pic_510659" tabindex="0">
                                    <div class="image-ctn" tabindex="0">
                                        <img src="https://img1.qunarzz.com/sight/p0/2204/97/97915d957ad57790a3.water.jpg_256x160_ff0307de.jpg" tabindex="0">
                                    </div>
                                    <div class="content-border" tabindex="0">
                                        <div class="content" tabindex="0">
                                            <div class="title" tabindex="0">
                                                望仙谷
                                            </div>
                                            <div class="detail" tabindex="0"></div>
                                            <div class="prices-ctn" tabindex="0">
                                                <span class="price" tabindex="0">
                                                    ¥<em tabindex="0">99.0</em>
                                                </span>
                                                <div class="old-price" tabindex="0">
                                                    市场价：
                                                    <em tabindex="0">¥</em>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="block-item " target="_blank" href="https://piao.qunar.com/ticket/detail_12091.html#from=home_remen&amp;in_track=qunar_djmp_pic_12091" tabindex="0">
                                    <div class="image-ctn" tabindex="0">
                                        <img src="https://img1.qunarzz.com/sight/p0/2011/f5/f546aaae938227e5a3.water.jpg_256x160_3e6b76d8.jpg" tabindex="0">
                                    </div>
                                    <div class="content-border" tabindex="0">
                                        <div class="content" tabindex="0">
                                            <div class="title" tabindex="0">
                                                三清山
                                            </div>
                                            <div class="detail" tabindex="0">道教名山</div>
                                            <div class="prices-ctn" tabindex="0">
                                                <span class="price" tabindex="0">
                                                    ¥<em tabindex="0">55.0</em>
                                                </span>
                                                <div class="old-price" tabindex="0">
                                                    市场价：
                                                    <em tabindex="0">¥</em>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="block-item " target="_blank" href="https://piao.qunar.com/ticket/detail_15262.html#from=home_remen&amp;in_track=qunar_djmp_pic_15262" tabindex="0">
                                    <div class="image-ctn" tabindex="0">
                                        <img src="https://img1.qunarzz.com/sight/p0/1501/87/9dcb13572c70d3a2aae83b44121db72b.water.jpg_256x160_2e4595e8.jpg" tabindex="0">
                                    </div>
                                    <div class="content-border" tabindex="0">
                                        <div class="content" tabindex="0">
                                            <div class="title" tabindex="0">
                                                庐山风景名胜区
                                            </div>
                                            <div class="detail" tabindex="0">匡庐奇秀甲天下</div>
                                            <div class="prices-ctn" tabindex="0">
                                                <span class="price" tabindex="0">
                                                    ¥<em tabindex="0">160.0</em>
                                                </span>
                                                <div class="old-price" tabindex="0">
                                                    市场价：
                                                    <em tabindex="0">¥</em>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="block-item " target="_blank" href="https://piao.qunar.com/ticket/detail_24002.html#from=home_remen&amp;in_track=qunar_djmp_pic_24002" tabindex="0">
                                    <div class="image-ctn" tabindex="0">
                                        <img src="https://img1.qunarzz.com/sight/p0/1609/94/945ab5b76758703a3.water.jpg_256x160_43456312.jpg" tabindex="0">
                                    </div>
                                    <div class="content-border" tabindex="0">
                                        <div class="content" tabindex="0">
                                            <div class="title" tabindex="0">
                                                滕王阁
                                            </div>
                                            <div class="detail" tabindex="0">“江南三大名楼”之一</div>
                                            <div class="prices-ctn" tabindex="0">
                                                <span class="price" tabindex="0">
                                                    ¥<em tabindex="0">45.0</em>
                                                </span>
                                                <div class="old-price" tabindex="0">
                                                    市场价：
                                                    <em tabindex="0">¥</em>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a class="block-item res-hide2" target="_blank" href="https://piao.qunar.com/ticket/detail_12813.html#from=home_remen&amp;in_track=qunar_djmp_pic_12813" tabindex="0">
                                    <div class="image-ctn" tabindex="0">
                                        <img src="https://img1.qunarzz.com/sight/p0/2004/38/38b39f99ef59d502a3.water.jpg_256x160_c5e493d3.jpg" tabindex="0">
                                    </div>
                                    <div class="content-border" tabindex="0">
                                        <div class="content" tabindex="0">
                                            <div class="title" tabindex="0">
                                                明月山
                                            </div>
                                            <div class="detail" tabindex="0">山势呈半轮明月状</div>
                                            <div class="prices-ctn" tabindex="0">
                                                <span class="price" tabindex="0">
                                                    ¥<em tabindex="0">88.0</em>
                                                </span>
                                                <div class="old-price" tabindex="0">
                                                    市场价：
                                                    <em tabindex="0">¥</em>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                
                        </div>
                </div>
                <div class="mod-home-onSale-body clrfix mod-home-onSale-piao" v-bind:style="{display: this.className6 =='change'?'block':'none'}" data-type="piao" tabindex="0">
                <div class="mod-home-onSale-body-left clrfix" tabindex="0">
                    <a class="onSale-body-left-item clrfix" target="_blank" href="http://piao.qunar.com/ticket/detail_507738.html#from=home_remen&amp;in_track=qunar_tjmp" rel="nofollow" tabindex="0">
                        <div class="onSale-body-left-img" tabindex="0">
                                <img alt="" src="https://imgs.qunarzz.com/sight/p0/2211/6e/6e7bb7875e998fa4a3.water.jpg_262x238_a669545f.jpg" tabindex="0">
                        </div>
                        <div class="onSale-body-left-words" tabindex="0">
                            <p class="onSale-body-left-words-title" tabindex="0">
                                    <span tabindex="0"><span tabindex="0">北京环球度假区</span></span>
                            </p>
                            <div class="onSale-body-left-words-content" tabindex="0">
                                大片世界，在此成真
                            </div>
                            <div class="onSale-body-left-words-bottom clrfix" tabindex="0">
                                <em tabindex="0">¥384.56</em><span class="unit" tabindex="0"> 起</span><span class="market-price  " tabindex="0">原价：¥<span tabindex="0">418.0</span></span>
                            </div>
                        </div>
                    </a>
                    <a class="onSale-body-left-item clrfix" target="_blank" href="http://piao.qunar.com/ticket/detail_38170.html#from=home_remen&amp;in_track=qunar_tjmp" rel="nofollow" tabindex="0">
                        <div class="onSale-body-left-img" tabindex="0">
                                <img alt="" src="https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_262x238_8792df14.jpg" tabindex="0">
                        </div>
                        <div class="onSale-body-left-words" tabindex="0">
                            <p class="onSale-body-left-words-title" tabindex="0">
                                    <span tabindex="0"><span tabindex="0">故宫博物院</span></span>
                            </p>
                            <div class="onSale-body-left-words-content" tabindex="0">
                                穿越明清两朝的皇家宫殿群
                            </div>
                            <div class="onSale-body-left-words-bottom clrfix" tabindex="0">
                                <em tabindex="0">¥39.0</em><span class="unit" tabindex="0"> 起</span><span class="market-price hide " tabindex="0">原价：¥<span tabindex="0">39.0</span></span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="mod-home-onSale-body-right clrfix" tabindex="0">
                        <a class="onSale-body-right-item " target="_blank" href="http://piao.qunar.com/ticket/detail_2267.html#from=home_remen&amp;in_track=qunar_tjmp" rel="nofollow" tabindex="0">
                            <div class="onSale-body-right-top" tabindex="0"><img alt="" src="https://imgs.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_256x144_cd75b9bc.jpg" tabindex="0"></div>
                            <div class="onSale-body-right-bottom" tabindex="0">
                                <p class="onSale-body-right-title" tabindex="0">
                                        八达岭长城
                                </p>
                                <p class="onSale-body-right-desc" title="不到长城非好汉" tabindex="0">不到长城非好汉</p>
                                <div class="clrfix onSale-body-right-price clrfix" tabindex="0">
                                    <div class="onSale-body-right-special-price" tabindex="0">
                                        <span tabindex="0"><em tabindex="0">¥</em></span><span tabindex="0"><em tabindex="0">34.9</em><span class="unit" tabindex="0"> 起</span></span>
                                    </div>
                                    <div class="onSale-body-right-market-price" tabindex="0"><label class=" " tabindex="0">原价：¥<span tabindex="0">50.0</span></label></div>
                                </div>
                            </div>
                        </a>
                        <a class="onSale-body-right-item res-hide" target="_blank" href="http://piao.qunar.com/ticket/detail_7698.html#from=home_remen&amp;in_track=qunar_tjmp" rel="nofollow" tabindex="0">
                            <div class="onSale-body-right-top" tabindex="0"><img alt="" src="https://imgs.qunarzz.com/sight/p0/1602/92/920e47352552c1c990.water.jpg_256x144_cf3e48a9.jpg" tabindex="0"></div>
                            <div class="onSale-body-right-bottom" tabindex="0">
                                <p class="onSale-body-right-title" tabindex="0">
                                        天坛公园
                                </p>
                                <p class="onSale-body-right-desc" title="明清时期皇帝祭天的地方" tabindex="0">明清时期皇帝祭天的地方</p>
                                <div class="clrfix onSale-body-right-price clrfix" tabindex="0">
                                    <div class="onSale-body-right-special-price" tabindex="0">
                                        <span tabindex="0"><em tabindex="0">¥</em></span><span tabindex="0"><em tabindex="0">10.0</em><span class="unit" tabindex="0"> 起</span></span>
                                    </div>
                                    <div class="onSale-body-right-market-price" tabindex="0"><label class="hide " tabindex="0">原价：¥<span tabindex="0">10.0</span></label></div>
                                </div>
                            </div>
                        </a>
                        <a class="onSale-body-right-item " target="_blank" href="http://piao.qunar.com/ticket/detail_10204.html#from=home_remen&amp;in_track=qunar_tjmp" rel="nofollow" tabindex="0">
                            <div class="onSale-body-right-top" tabindex="0"><img alt="" src="https://qimgs.qunarzz.com/piao_qsight_provider_piao_qsight_web/0100j1200087e9wb39FE1.jpg_256x144_8b4c5ede.jpg" tabindex="0"></div>
                            <div class="onSale-body-right-bottom" tabindex="0">
                                <p class="onSale-body-right-title" tabindex="0">
                                        颐和园
                                </p>
                                <p class="onSale-body-right-desc" title="走入清朝皇帝的皇家园林" tabindex="0">走入清朝皇帝的皇家园林</p>
                                <div class="clrfix onSale-body-right-price clrfix" tabindex="0">
                                    <div class="onSale-body-right-special-price" tabindex="0">
                                        <span tabindex="0"><em tabindex="0">¥</em></span><span tabindex="0"><em tabindex="0">20.0</em><span class="unit" tabindex="0"> 起</span></span>
                                    </div>
                                    <div class="onSale-body-right-market-price" tabindex="0"><label class="hide " tabindex="0">原价：¥<span tabindex="0">20.0</span></label></div>
                                </div>
                            </div>
                        </a>
                        <a class="onSale-body-right-item res-hide" target="_blank" href="http://piao.qunar.com/ticket/detail_3580.html#from=home_remen&amp;in_track=qunar_tjmp" rel="nofollow" tabindex="0">
                            <div class="onSale-body-right-top" tabindex="0"><img alt="" src="https://imgs.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_256x144_43bae2f9.jpg" tabindex="0"></div>
                            <div class="onSale-body-right-bottom" tabindex="0">
                                <p class="onSale-body-right-title" tabindex="0">
                                        圆明园
                                </p>
                                <p class="onSale-body-right-desc" title="毁于战火的清代皇家园林" tabindex="0">毁于战火的清代皇家园林</p>
                                <div class="clrfix onSale-body-right-price clrfix" tabindex="0">
                                    <div class="onSale-body-right-special-price" tabindex="0">
                                        <span tabindex="0"><em tabindex="0">¥</em></span><span tabindex="0"><em tabindex="0">10.0</em><span class="unit" tabindex="0"> 起</span></span>
                                    </div>
                                    <div class="onSale-body-right-market-price" tabindex="0"><label class="hide " tabindex="0">原价：¥<span tabindex="0">10.0</span></label></div>
                                </div>
                            </div>
                        </a>
                </div>
                </div><div class="mod-home-onSale-body clrfix mod-home-onSale-daytrip loading" style="display: none;" data-type="daytrip" tabindex="0">
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    data() {
        return {
            imgD: [
            {
                name: 'ad1',
                src: '../../../image/ad.jpg'
            },
            {
                name: 'ad2',
                src: '../../../image/ad.jpg'
            },
            {
                name: 'ad3',
                src: '../../../image/ad.jpg'
            },
            ],
            flightD: [
                {
                    from: '北京',
                    to: '昆明',
                    date: '12月26日',
                    price: '450',
                    discount: '1.4折',
                },
                {
                    from: '北京',
                    to: '成都',
                    date: '12月26日',
                    price: '300',
                    discount: '1.4折',
                },
                {
                    from: '北京',
                    to: '上海',
                    date: '12月22日',
                    price: '178',
                    discount: '1.1折',
                },
                {
                    from: '北京',
                    to: '西安',
                    date: '12月27日',
                    price: '197',
                    discount: '0.9折',
                },
                {
                    from: '北京',
                    to: '重庆',
                    date: '12月26日',
                    price: '248',
                    discount: '1.2折',
                },
                {
                    from: '北京',
                    to: '深圳',
                    date: '12月25日',
                    price: '350',
                    discount: '1.3折',
                },
                {
                    from: '北京',
                    to: '广州',
                    date: '12月25日',
                    price: '450',
                    discount: '1.8折',
                },
                {
                    from: '北京',
                    to: '杭州',
                    date: '12月25日',
                    price: '178',
                    discount: '0.8折',
                },
                {
                    from: '北京',
                    to: '海口',
                    date: '2月22日',
                    price: '500',
                    discount: '1.6折',
                },
                {
                    from: '北京',
                    to: '郑州',
                    date: '12月28日',
                    price: '300',
                    discount: '2.4折',
                },
                {
                    from: '北京',
                    to: '澳门',
                    date: '12月21日',
                    price: '778',
                },
                {
                    from: '北京',
                    to: '金边',
                    date: '1月16日',
                    price: '986',
                },
                {
                    from: '北京',
                    to: '首尔',
                    date: '12月27日',
                    price: '988',
                },
                {
                    from: '北京',
                    to: '香港',
                    date: '12月27日',
                    price: '980',
                },
                {
                    from: '北京',
                    to: '曼谷',
                    date: '1月9日',
                    price: '1166',
                },
                {
                    from: '北京',
                    to: '东京',
                    date: '12月26日',
                    price: '1179',
                },
                {
                    from: '北京',
                    to: '马拉尼',
                    date: '1月11日',
                    price: '1358',
                },
                {
                    from: '北京',
                    to: '新加坡',
                    date: '1月23日',
                    price: '1358',
                },
                {
                    from: '北京',
                    to: '胡志明市',
                    date: '1月9日',
                    price: '1540',
                },
                {
                    from: '北京',
                    to: '哥打基纳巴卢',
                    date: '3月21日',
                    price: '1672',
                },
                
            ],
            hotelD: [
                {   
                    image: 'https://s.qunarzz.com/f_cms/2021/1619161759755_80982395.png',
                    href: 'https://hotel.qunar.com/cn/beijing_city/rankingList2/54/?fromDate=2020-03-09&amp;toDate=2020-03-10&amp;poiName=%E5%85%A8%E5%9F%8E&amp;hotelSource=5401',
                    words: '热门推荐榜'
                },
                {   
                    image: 'https://himg3.qunarzz.com/imgs/201812/14/C._M0DCiiigrWCy4LQi1024.jpg',
                    href: 'https://hotel.qunar.com/cn/beijing_city/rankingList2/44/?fromDate=2020-03-09&toDate=2020-03-10&poiName=%E5%85%A8%E5%9F%8E&hotelSource=5401',
                    words: '试睡员推荐榜'
                },
                {   
                    image: 'https://source.qunarzz.com/site/images/zhuanti/huodong/fangjian.jpg',
                    href: 'https://hotel.qunar.com/cn/beijing_city/rankingList2/15/?fromDate=2020-03-09&toDate=2020-03-10&poiName=%E5%85%A8%E5%9F%8E&hotelSource=5401',
                    words: '必住主题酒店榜单'
                },
                {   
                    image: 'https://source.qunarzz.com/site/images/zhuanti/huodong/qinzi.jpg',
                    href: 'https://hotel.qunar.com/cn/beijing_city/rankingList2/16/?fromDate=2020-03-09&toDate=2020-03-10&poiName=%E5%85%A8%E5%9F%8E&hotelSource=5401',
                    words: '必住亲子酒店榜单'
                },
                {   
                    image: 'https://source.qunarzz.com/site/images/zhuanti/huodong/shangwu.jpg',
                    href: 'https://hotel.qunar.com/cn/beijing_city/rankingList2/17/?fromDate=2020-03-09&toDate=2020-03-10&poiName=%E5%85%A8%E5%9F%8E&hotelSource=5401',
                    words: '必住商务酒店榜单'
                },
                {
                    href: 'https://hotel.qunar.com/cn/beijing_city/dt-123420/?hotelSource=5403',
                    image: 'https://userimg.qunarzz.com/imgs/202207/31/C.v_mOjfIXgUKxvWpPI480.jpg',
                    name: 'Wohkoon者行孙酒店(北京三里屯工体店)',
                    score: '4.8分',
                    remark: '800条评论',
                    address: '三里屯/工体/东直门 · 靠近东大桥地铁站',
                    price: '115'
                },
                {
                    href: 'https://hotel.qunar.com/cn/beijing_city/dt-27871/?hotelSource=5403',
                    image: 'https://userimg.qunarzz.com/imgs/202208/14/C._c32ESg4xzYiXcbeg480.jpg',
                    name: '速8精选酒店北京前门珠市口地铁站店',
                    score: '4.7分',
                    remark: '215条评论',
                    address: '前门/天坛公园/崇文门 · 靠近珠市口地铁站D口',
                    price: '345'
                },
                {
                    href: 'https://hotel.qunar.com/cn/beijing_city/dt-123381/?hotelSource=5403',
                    image: 'https://userimg.qunarzz.com/imgs/202207/01/C.w2nRHuuj6liBJaHRu480.jpg',
                    name: '汉庭酒店(北京中关村海淀黄庄地铁站店)',
                    score: '4.8分',
                    remark: '231条评论',
                    address: '中关村/五道口 · 靠近海淀黄庄地铁站',
                    price: '453'
                },
                {
                    href: 'https://hotel.qunar.com/cn/beijing_city/dt-123499/?hotelSource=5403',
                    image: 'https://userimg.qunarzz.com/imgs/202207/20/C.wb_Fimr-wMQ4Zg8Gr480.jpg',
                    name: '桔子水晶北京丽泽商务区中心酒店',
                    score: '4.9分',
                    remark: '299条评论',
                    address: '北京西站/丽泽商务区 · 北京新年华购物中心附近',
                    price: '707'
                },
                {
                    href: 'https://hotel.qunar.com/cn/beijing_city/dt-94873/?hotelSource=5403',
                    image: 'https://userimg.qunarzz.com/imgs/202205/31/C.IuHKXXLqTve3vLIkL480.jpg',
                    name: '喆啡酒店(北京亦庄马驹桥京东总部经海路地铁站店)',
                    score: '4.9分',
                    remark: '947条评论',
                    address: '亦庄',
                    price: '523'
                },
                
            ],
            piaoD: [
                {
                    
                },
            ],
            // isHovered: false,
            className1: 'change',
            className2: 'normal',
            className3: 'change',
            className4: 'normal',
            className5: 'change',
            className6: 'normal',
        }
    },
    methods: {
        onMouseEnter(a) {
            if (a == '1') {
                this.className1 = 'change'
                this.className2 = 'normal'
                // console.log(this.Fdata)
            }
            else {
                this.className2 = 'change'
                this.className1 = 'normal'
                // console.log(this.Fdata)
            }
          
        },
        onMouseEnter1(a) {
            if (a == '1') {
                this.className3 = 'change'
                this.className4 = 'normal'
                // console.log(this.Fdata)
            }
            else {
                this.className4 = 'change'
                this.className3 = 'normal'
                // console.log(this.Fdata)
            }
          
        },
        onMouseEnter2(a) {
            if (a == '1') {
                this.className5 = 'change'
                this.className6 = 'normal'
                // console.log(this.Fdata)
            }
            else {
                this.className6 = 'change'
                this.className5 = 'normal'
                // console.log(this.Fdata)
            }
          
        },
        
    },
    computed: {
        Fdata() {
            if (this.className1 == 'change')
                return this.flightD.filter(item => item.discount)
            if (this.className2 == 'change')
                return this.flightD.filter(item => !item.discount)
        },
        HotelD1() {
            if (this.className3 == 'change')
                return this.hotelD.filter(item => !item.price)
            if (this.className4 == 'change')
                return this.hotelD == ''
        },
        HotelD2() {
            if (this.className3 == 'change')
                return this.hotelD == ''
            if (this.className4 == 'change')
                return this.hotelD.filter(item => item.price)
        },
        
    },
    mounted() {
        var userinfo = this.$route.query.id
        // console.log(userinfo)
    }
}
</script>
<style lang="less" scoped>
.search_ad {
    display: block;
    margin-bottom: 36px;
}
.left_search {
    float: left;
    width: 710px;
    height: 308px;
    padding-top: 6px;
}
.right_ad {
    margin-left: 740px;
    top: 28px;
    width: 440px;
    height: 320px;
    position: absolute;
}
.mod-home-mid-advertisement {
    display: block;
    margin-bottom: 15px;
}
.flight_div {
    margin-bottom: 32px;
}
.hotel_div {
    margin-bottom: 32px;
}
.flight_head {
display: block;
width: 100%;
height: 44px;
margin-bottom: 32px;
}
ul {
        list-style: none;
        margin: 0;
        padding: 0;
}
.flight_body {
    display: block;
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
       li {
        display: inline-block;
        width: 208px;
        height: 105px;
        background: #f7f7f7;
        margin-right: 16px;
        margin-top: 16px;
        padding-left: 16px;
        a {
            text-decoration: none;
            outline: 0 none;
        }
    } 
    }
}
.hotel_body {
    display: block;
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
            float: left;
            width: 224px;
            height: 301px;
            background: #f7f7f7;
            margin-right: 16px;
            margin-top: 16px;
            background-repeat: no-repeat;
            background-position: center bottom;
            background-size: auto 100%;
        }
    } 
}
.mod-home-hotel-recommend {
    a {
    text-decoration: none;
    }
}
.mod-home-hotel-img {
    width: 224px;
    height: 170px;
}
.mod-home-hotel-name {
    width: 203px;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0 auto;
    color: #333;
    font-weight: 500;
    font-size: 14px;
    margin-top: 12px;
    margin-bottom: 6px;
}
.mod-home-hotel-score {
    display: inline-block;
    color: #1782e6;
    font-weight: 700;
    font-size: 14px;
    margin-left: 12px;
    margin-right: 4px;
}
.mod-home-hotel-remark {
    display: inline-block;
    color: #9e9e9e;
    font-weight: 500;
    font-size: 12px;
}
.mod-home-hotel-address {
    width: 203px;
    margin: 0 auto;
    color: #9e9e9e;
    font-weight: 500;
    font-size: 12px;
    margin-top: 6px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mod-home-hotel-tagList {
    display: inline-block;
    margin-top: 10px;
    margin-left: 12px;
    width: 135px;
    overflow: hidden;
}
.mod-home-hotel-tagItem {
    height: 15px;
    border-radius: 2px;
    border: 1px solid #4997f0;
    color: #4997f0;
    font-weight: 500;
    font-size: 12px;
    display: inline-block;
    text-align: center;
    line-height: 15px;
    margin-right: 5px;
    padding: 0 4px;
}
.mod-home-hotel-price {
    float: right;
    margin-right: 12px;
    margin-top: 10px;
}
.mod-home-hotel-num {
    display: inline-block;
    color: #ff7400;
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
    font-family: arial;
}
.mod-home-hotel-qi {
    display: inline-block;
    color: #ff7400;
    font-weight: 400;
    font-size: 12px;
}
.mod-home-hotel-link__must {
    padding: 16px;
    width: calc(100% - 32px);
    text-decoration: none;
}
.mod-home-hotel-link {
    display: inline-block;
    height: 120px;
    background: linear-gradient(180deg,rgba(0,0,0,0.5) 0,transparent 100%);
}
.mod-home-hotel-title {
    display: flex;
}
.mod-home-hotel-words {
    display: inline-block;
    color: #fff;
    font-weight: 700;
    font-size: 20px;
}
.mod-home-hotel-icon {
    color: #fff;
    font-family: homenode !important;
    font-weight: 700;
    font-size: 20px;
}
.mod-home-flight-priceFlex {
    display: inline-flex;
}
.mod-home-flight-price-icon {
    font-family: homenode !important;
    color: #ff7400;
    font-weight: 700;
    font-size: 20px;
}
.mod-home-flight-price-count {
    color: #ff7400;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    font-family: arial;
}
.mod-home-flight-price-word {
    color: #ff7400;
    font-weight: 400;
    font-size: 12px;
    margin-right: 2px;
    margin-left: 2px;
    line-height: 35px;
}
.mod-home-flight-link .mod-home-flight-place {
    display: block;
    margin-top: 16px;
    height: 20px;
    i {
        font-family: homenode !important;
        display: inline-block;
        color: #9e9e9e;
        font-weight: 400;
        font-size: 14px;
        margin: 0 8px;
    }
}
.mod-home-flight-discount {
    display: inline-block;
    width: 30px;
    color: #9e9e9e;
    font-weight: 400;
    font-size: 12px;
    line-height: 35px;
}
.mod-home-flight-date {
    color: #9e9e9e;
    font-weight: 400;
    font-size: 12px;
    margin-top: 4px;
    margin-bottom: 10px;
}
.mod-home-flight-btn {
    width: 52px;
    height: 24px;
    border-radius: 4px;
    background: linear-gradient(to bottom,#fac928 0,#ff9800 100%);
    color: #fff;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    float: right;
    margin-right: 16px;
}
.mod-text-link {
    float: left;
    width: 227px;
    margin-bottom: -20px;
}
.mod-text-link-item {
    margin-bottom: 14px;
}
.mod-text-link-title {
    font-size: 14px;
    color: #333;
    letter-spacing: 0;
    line-height: 35px;
    font-weight: 600;
}
p {
    margin: 0;
    padding: 0;
}
.mod-text-link-content {
    height: 132px;
    overflow: hidden;
    padding: 10px 0;
}
.mod-text-link .mod-text-link-item .mod-text-link-content {
    padding: 10px 0;
}
.mod-text-link .mod-text-link-item .mod-text-link-content li {
    width: auto;
    margin-right: 14px;
    margin-bottom: 10px;
    white-space: nowrap;
    display: inline-block;
    float: none;
}
.mod-text-link .mod-text-link-item .mod-text-link-content li a {
    display: inline-block;
    color: #666;
    font-weight: 700;
    font-size: 12px;
}
.mod-text-link .mod-text-link-item .mod-text-link-content li a::before {
    content: '';
    width: 2px;
    height: 2px;
    border: 1px #d8d8d8 solid;
    background: #d8d8d8;
    border-radius: 100%;
    display: inline-block;
    font-weight: 700;
    font-size: 12px;
    margin-bottom: 2px;
    margin-right: 4px;
}
.right-ctn {
    float: left;
    position: relative;
    width: calc(100% - 227px);
    width: 973px\0;
    height: 570px;
    overflow: hidden;
}
.right-ctn .blocks {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
}
.clrfix {
    zoom: 1;
}
.block-item {
    float: left;
    display: block;
    _display: inline;
    width: 227px;
    height: 277px;
    margin: 0 0 12px 13px;
    cursor: pointer;
    border: 1px solid #eee;
}
.image-ctn {
    width: 227px;
    height: 160px;
    img {
    width: 227px;
    height: 160px;
}
}
.content-border {
    padding: 0 10px;
}
.content-border .content {
    width: 100%;
    height: 116px;
}
.content-border .content .title {
    padding-top: 6px;
    height: 25px;
    line-height: 36px;
    font-size: 14px;
    font-weight: bold;
    color: #333;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    border: 0;
}
.content-border .content .detail {
    height: 30px;
    font-size: 12px;
    color: #aaa;
}
.content-border .content .prices-ctn .price {
    font-size: 20px;
    font-family: arial;
    font-weight: bold;
    color: #ff7400;
    em {
    font-family: Tahoma;
}
}
a {text-decoration: none;}
.content-border .content .prices-ctn .old-price {
    visibility: hidden;
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 12px;
    color: #aaa;
    font-family: "\5FAE\8F6F\96C5\9ED1",Microsoft Yahei,"\5B8B\4F53",Songti,"\9ED1\4F53",Heiti,Arial;
}
.content-border .content .prices-ctn {
    width: 100%;
    position: relative;
}
.mod-home-onSale-body .mod-home-onSale-body-left .onSale-body-left-item .onSale-body-left-img {
    width: 290px;
    height: 264px;
    overflow: hidden;
    float: left;
    img {
    min-width: 290px;
    height: 264px;
    display: block;
}
}
.mod-home-onSale-body .mod-home-onSale-body-left .onSale-body-left-item {
    display: inline-block;
    width: 468px;
    margin-bottom: 16px;
    margin-right: 9px;
    margin-right: 6px\0;
    cursor: pointer;
    border: 1px solid #eee;
}
.mod-home-onSale-body .mod-home-onSale-body-left .onSale-body-left-item .onSale-body-left-words {
    width: 178px;
    height: 264px;
    float: left;
    position: relative;
    background: rgba(0,0,0,0.8);
}

.mod-home-onSale-body .mod-home-onSale-body-left .onSale-body-left-item .onSale-body-left-words .onSale-body-left-words-title {
    padding: 20px 12px;
    color: #fff;
    line-height: 20px;
    font-size: 14px;
    letter-spacing: 0;
}
.mod-home-onSale-body .mod-home-onSale-body-left .onSale-body-left-item .onSale-body-left-words .onSale-body-left-words-title span {
    display: block;
    width: 100%;
}
.mod-home-onSale-body .mod-home-onSale-body-left .onSale-body-left-item .onSale-body-left-words .onSale-body-left-words-title {
    padding: 20px 12px;
    color: #fff;
    line-height: 20px;
    font-size: 14px;
    letter-spacing: 0;
}
.mod-home-onSale-body .mod-home-onSale-body-left .onSale-body-left-item .onSale-body-left-words .onSale-body-left-words-title span span {
    display: inline;
    letter-spacing: 1px;
    line-height: 1.3em;
    font-weight: 600;
}
.mod-home-onSale-body .mod-home-onSale-body-left .onSale-body-left-item .onSale-body-left-words .onSale-body-left-words-content {
    padding: 12px;
    height: 90px;
    overflow: hidden;
    box-sizing: border-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    font-size: 12px;
    color: #fff;
    letter-spacing: 0;
}
.mod-home-onSale-body .mod-home-onSale-body-left .onSale-body-left-item .onSale-body-left-words .onSale-body-left-words-bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 24px 12px;
}
.mod-home-onSale-body .mod-home-onSale-body-left .onSale-body-left-item .onSale-body-left-words .onSale-body-left-words-bottom em {
    color: #ff7400;
    font: bold 20px arial,sans-serif;
    float: left;
}
.mod-home-onSale-body .mod-home-onSale-body-left .onSale-body-left-item .onSale-body-left-words .onSale-body-left-words-bottom .unit {
    color: #ff7400;
    line-height: 25px;
    margin-left: 4px;
}
.mod-home-onSale-body .mod-home-onSale-body-left .onSale-body-left-item .onSale-body-left-words .onSale-body-left-words-bottom .market-price {
    display: none;
    float: right;
    margin-top: 3px;
    color: #999;
    font-family: "\5FAE\8F6F\96C5\9ED1",Microsoft Yahei,"\5B8B\4F53",Songti,"\9ED1\4F53",Heiti,Arial;
}
.mod-home-onSale-body .mod-home-onSale-body-right {
    float: left;
}
.mod-home-onSale-body .mod-home-onSale-body-right .onSale-body-right-item {
    display: inline-block;
    width: 227px;
    margin: 0 8px 16px 0;
    margin: 0 7px 16px 0\0;
    cursor: pointer;
    border: 1px solid #eee;
}
.mod-home-onSale-body .mod-home-onSale-body-right .onSale-body-right-item .onSale-body-right-top {
    overflow: hidden;
}
.mod-home-onSale-body .mod-home-onSale-body-right .onSale-body-right-item .onSale-body-right-top img {
    display: block;
    height: 170px;
    width: 100%;
}
.mod-home-onSale-body .mod-home-onSale-body-right .onSale-body-right-item .onSale-body-right-bottom {
    padding: 12px 10px;
    height: 70px;
}
.mod-home-onSale-body .mod-home-onSale-body-right .onSale-body-right-item .onSale-body-right-bottom .onSale-body-right-title {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 12px;
    line-height: 16px;
    letter-spacing: 2px;
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
}
.mod-home-onSale-body .mod-home-onSale-body-right .onSale-body-right-item .onSale-body-right-bottom .onSale-body-right-desc {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 15px;
    line-height: 14px;
    color: #999;
}
.mod-home-onSale-body .mod-home-onSale-body-right .onSale-body-right-item .onSale-body-right-price {
    margin-top: 7px;
    height: 18px;
    line-height: 18px;
}
.mod-home-onSale-body .mod-home-onSale-body-right .onSale-body-right-item .onSale-body-right-price .onSale-body-right-special-price {
    float: left;
    color: #ff7400;
    font: bold 20px arial,sans-serif;
}
.mod-home-onSale-body .mod-home-onSale-body-right .onSale-body-right-item .onSale-body-right-price .onSale-body-right-special-price {
    float: left;
    color: #ff7400;
    font: bold 20px arial,sans-serif;
}
.mod-home-onSale-body .mod-home-onSale-body-right .onSale-body-right-item .onSale-body-right-price .onSale-body-right-market-price {
    display: none;
    float: right;
    margin-top: 3px;
    color: #999;
    font-family: "\5FAE\8F6F\96C5\9ED1",Microsoft Yahei,"\5B8B\4F53",Songti,"\9ED1\4F53",Heiti,Arial;
}
.title {
padding-left: 0;
display: block;
height: 42px;
border-bottom: 2px solid #eceef3;
margin-bottom: 15px;
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
        float: left;
        margin-top: 2px;
        display: list-item;
        text-align: -webkit-match-parent;
        a {
            // font: normal 16px Microsoft YaHei;
            background: #fff;
            padding: 0 13px;
            zoom: 1;
            display: inline-block;
            height: 40px;
            line-height: 33px;
            text-decoration: none;
        }
    }
}
}
.change {
    color: #005fdc;
    padding-bottom: 7px;
    border-bottom: 2px solid #2093f1;
    font-weight: 600;
}
.normal {
    font: normal 16px Microsoft YaHei;
    background: #fff;
    color: #000;
    padding: 0 13px;
    zoom: 1;
    display: inline-block;
    height: 33px;
    line-height: 33px;
}
</style>