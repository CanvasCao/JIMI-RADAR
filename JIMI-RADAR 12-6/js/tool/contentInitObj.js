;
(function (w, d, $, undefined) {
    //jqObj.......................................................
    var $DetailMenu = $('.proDetailMenu');
    var $DetailContent = $('.proDetailContent');

    //canvasInitObj 提供canvas初始化功能............................
    var contentInitObj = {
        //init append初始化dom...................................
        init: function (array) {
            var str = '<ul>';
            [].forEach.call(array, function (e, i, thisarr) {
                if (i == 0) {
                    str += "<li class='proDetailMenuCur'>" + e + "</li>";
                } else {
                    str += "<li>" + e + "</li>";
                }
            });
            str += '</ul>';
            $DetailMenu.html(str);


            var str2 = '';
            [].forEach.call(array, function (e, i, thisarr) {
                str2 += "<div class='proDetailLi'></div>";
            });
            str2 += '<div style="clear: both;"></div>';
            $DetailContent.html(str2);
        },
        fresh: function (index) {
            var that = this;
            var index = index || 0;
            //当页从没刷新过 才会去刷新 1插入右侧dom 2插入canvas.................
            if (!that.flagArray[index]) {
                that.domInitArr[index]();
                that.canvasInitArr[index]();
                that.flagArray[index] = true;
            }
            else {
                return;
            }
        },
        flagArray: [],
        domInitArr: [],
        canvasInitArr: [],
    };
    contentInitObj.init(['产品风评', '功效传达', '价格认可度', '消费者画像', '核心成分', '营销曝光', '影响力', '媒体评价',]);

    //7次初始化..........................................................................................
    $proDetailLis = $('.proDetailLi');
    ;
    (function (rootObj, index) {
        rootObj.domInitArr[index] = function () {
            $proDetailLis.eq(index).html(
                "<div class='canvasObj'>" +
                "   <div class='canvasDesc'>▎外形 (包装)</div>" +
                "<div class='canvasCon' id='canvasOutlook'></div>" +
                "    </div>" +
                "    <div class='canvasObj'>" +
                "    <div class='canvasDesc'>▎气味</div>" +
                "<div class='canvasCon' id='canvasSmell'></div>" +
                "    </div>" +
                "    <div class='canvasObj'>" +
                "    <div class='canvasDesc'>▎质地</div>" +
                "<div class='canvasCon' id='canvasTexture'></div>" +
                "    </div>" +
                "    <div class='canvasObj'>" +
                "    <div class='canvasDesc'>▎使用感受</div>" +
                "<div class='canvasCon' id='canvasUseFeeling'></div>" +
                "    </div>" +
                "    <div class='canvasObj'>" +
                "    <div class='canvasDesc'>▎使用方法</div>" +
                "<div>暂无</div>" +
                "</div>"
            );
        };
        rootObj.canvasInitArr[index] = function () {
            //Page1 产品风评.....................................
            JME.drawWordCloud({
                domId: 'canvasOutlook',
                dataJson: {
                    "专柜": 75,
                    "不好看": 1,
                    "高端大气": 7,
                    "标志": 55,
                    "简陋": 2,
                    "粉扑": 1,
                    "旅行装": 1,
                    "滴管": 150,
                    "气垫": 6,
                    "logo": 7,
                    "一罐": 1,
                    "好看": 8,
                    "镜子": 11,
                    "吸铁石": 1,
                    "圆形": 5,
                    "精致": 81,
                    "塑料": 14,
                    "难看": 3,
                    "限量版": 5,
                    "按钮": 3,
                    "经典": 101,
                    "携带方便": 3,
                    "双管": 1,
                    "磁铁": 3,
                    "明星": 160,
                    "优雅": 32,
                    "小巧": 19,
                    "一瓶": 275,
                    "有质感": 4,
                    "畅销": 11,
                    "金属": 10,
                    "一小瓶": 4,
                    "人气": 2,
                    "高大上": 34,
                    "单独包装": 1,
                    "玻璃": 18,
                    "奢华": 14,
                    "可爱": 25,
                    "高档": 20,
                    "很好看": 2,
                    "简单": 63
                },
                imgUrl: "img/echarts/circle.png",
                titleText: null,
            })

            JME.drawWordCloud({
                domId: 'canvasSmell',
                dataJson: {
                    "味道好闻": 1,
                    "花香": 4,
                    "很好闻": 29,
                    "脂粉味": 1,
                    "化学香精": 1,
                    "酵母": 91,
                    "没味道": 2,
                    "淡香": 5,
                    "挺好闻": 2,
                    "没什么味道": 3,
                    "香味清新": 3,
                    "无香": 1,
                    "玫瑰": 86,
                    "没什么香味": 2,
                    "没有酒精": 2,
                    "很淡的香": 1,
                    "很香": 2,
                    "清淡的香": 1,
                    "没有味道": 8,
                    "发酵": 12,
                    "没有任何的香味": 2,
                    "清新的香": 1,
                    "难闻": 4,
                    "味道很清新": 1,
                    "甜": 7,
                    "淡淡的香": 61
                },
                imgUrl: "img/echarts/circle.png",
                titleText: null,
            })

            JME.drawWordCloud({
                domId: 'canvasTexture',
                dataJson: {
                    "浓稠": 28,
                    "有点稠": 4,
                    "无油": 6,
                    "粘粘": 3,
                    "流动性差": 1,
                    "轻薄": 70,
                    "像水": 11,
                    "清爽": 243,
                    "液体": 95,
                    "凝霜": 52,
                    "黏腻": 51,
                    "乳液": 71,
                    "延展性好": 14,
                    "比较厚": 2,
                    "霜状": 3,
                    "黏黏": 9,
                    "轻盈": 51,
                    "稀薄": 23,
                    "着哩": 2,
                    "凝露": 5,
                    "流动性好": 2,
                    "丰盈": 70,
                    "乳状": 3,
                    "水状": 18,
                    "厚重": 10,
                    "流动性还不错": 1,
                    "延展性不错": 8,
                    "像清水": 1,
                    "啫喱": 10,
                    "厚实": 4,
                    "膏状": 1,
                    "胶状": 2,
                    "粘稠": 60,
                    "面霜": 111,
                    "泥": 27,
                    "液状": 11,
                    "流动性强": 5,
                    "丰润": 1,
                    "膏体": 1,
                    "凝胶": 3,
                    "泡沫": 2
                },
                imgUrl: "img/echarts/circle.png",
                titleText: null,
            })

            JME.drawWordCloud({
                domId: 'canvasUseFeeling',
                dataJson: {
                    "不怎么滋润": 1,
                    "化妆棉": 6,
                    "不刺激": 14,
                    "丝滑": 20,
                    "适合敏感肌": 2,
                    "很适合油": 2,
                    "发粘": 2,
                    "很自然": 7,
                    "熟龄": 31,
                    "会起皮": 2,
                    "幼滑": 5,
                    "凉凉": 5,
                    "略干": 1,
                    "没有油腻": 16,
                    "有过敏反应": 1,
                    "柔滑": 108,
                    "太腻": 2,
                    "顺滑": 23,
                    "不油腻": 86,
                    "爽滑": 9,
                    "适合混合皮": 1,
                    "有点腻": 2,
                    "太干了": 4,
                    "有点干": 4,
                    "不适合干性": 1,
                    "温和": 106,
                    "适合干性": 4,
                    "比较滋润": 2,
                    "适合干皮": 1,
                    "润润的": 29,
                    "发热": 2,
                    "滋润度很好": 2,
                    "有点油": 1,
                    "不经用": 2,
                    "不油不腻": 8,
                    "很滋润": 34,
                    "滋润度不够": 3,
                    "很油": 5,
                    "滋润度好": 1,
                    "滋润度不错": 1,
                    "偏干": 8,
                    "不够滋润": 2,
                    "不过敏": 5,
                    "很清爽": 63,
                    "油腻腻": 3,
                    "适合冬天": 3,
                    "非常滋润": 8,
                    "适合油性": 2,
                    "用量很省": 1,
                    "很耐用": 4,
                    "很干": 17,
                    "细腻": 474,
                    "不会长脂肪粒": 2
                },
                imgUrl: "img/echarts/circle.png",
                titleText: null,
            })
        };
    })(contentInitObj, 0, '产品风评')
    ;
    (function (rootObj, index) {
        rootObj.domInitArr[index] = function () {
            $proDetailLis.eq(index).html(
                "<div class='canvasObj'>" +
                "<div class='canvasDesc'>▎功效</div>" +
                "<div class='canvasCon' id='canvasEffect'></div>" +
                "</div>" +
                "<div class='canvasObj'>" +
                "<div class='canvasDesc'>▎功效满意度</div>" +
                "<div class='canvasCon' id='canvasEffectSatisfaction'></div>" +
                "</div>" +
                "<div class='canvasObj' style='display: none'>" +
                "<div class='canvasDesc'>▎妆感描述</div>" +
                "<div class='canvasCon' id='canvasMakeup'></div>" +
                "</div>" +
                "<div class='canvasObj' style='display: none'>" +
                "<div class='canvasDesc'>▎颜色描述</div>" +
                "<div class='canvasCon' id='canvasColor'></div>" +
                "</div>"
            )
        };
        rootObj.canvasInitArr[index] = function () {
            JME.drawWordCloud({
                domId: 'canvasEffect',
                dataJson: {
                    "爽肤": 54,
                    "去斑": 1,
                    "保湿效果还可以": 2,
                    "暗黄": 9,
                    "很保湿": 52,
                    "不够保湿": 2,
                    "不补水": 2,
                    "修复肌肤": 20,
                    "柔顺": 3,
                    "抑制黑色素": 1,
                    "抚平细纹": 116,
                    "稳定肌肤": 3,
                    "紫外线": 8,
                    "保湿不错": 6,
                    "补水效果好": 4,
                    "淡斑": 7,
                    "挺补水": 2,
                    "镇定": 4,
                    "美白效果不明显": 1,
                    "水油平衡": 9,
                    "修复过敏": 1,
                    "顺滑": 23,
                    "紧致肌肤": 88,
                    "去黑眼圈": 2,
                    "防护": 1,
                    "均匀肤色": 10,
                    "去皱": 3,
                    "收毛孔": 1,
                    "白了很多": 1,
                    "提亮肤色": 18,
                    "淡化细纹": 12,
                    "抗老": 114,
                    "补水效果非常": 8,
                    "变黑了": 1,
                    "保湿还可以": 2,
                    "保湿效果一般": 4,
                    "提拉紧致": 2,
                    "抗氧化": 37,
                    "二次清洁": 3,
                    "非常保湿": 6,
                    "保湿": 276,
                    "比较保湿": 2,
                    "抗皱": 18,
                    "收缩毛孔": 5,
                    "初抗老": 2,
                    "美白": 164,
                    "保湿效果很好": 14,
                    "锁水": 32,
                    "平滑肌肤": 50,
                    "滋养": 9,
                    "修复受损": 34,
                    "提拉": 96,
                    "不保湿": 4,
                    "镇静": 1,
                    "淡化痘印": 1,
                    "防晒": 8,
                    "通透": 16,
                    "鱼尾纹": 5,
                    "消除浮肿": 3,
                    "去痘印": 4,
                    "保湿效果不错": 14,
                    "肤色提亮": 9,
                    "塑形": 2,
                    "修护肌肤": 12,
                    "美白效果也不错": 1,
                    "晒后修复": 2,
                    "去角质": 6,
                    "控油": 6,
                    "紧致": 154,
                    "改善皮肤": 8,
                    "保湿效果非常好": 2,
                    "去黑头": 1,
                    "淡化黑眼圈": 3,
                    "滋润": 498,
                    "祛斑": 1,
                    "遮瑕": 13
                },
                imgUrl: "img/echarts/circle.png",
                titleText: null,
            });

            JME.drawWordCloud({
                domId: 'canvasEffectSatisfaction',
                dataJson: {
                    "会回购": 55,
                    "效果显著": 2,
                    "有效果": 35,
                    "没效果": 4,
                    "还可以": 43,
                    "不会再买": 2,
                    "鸡肋": 23,
                    "没有效果": 10,
                    "一点效果都没有": 3,
                    "超喜欢": 8,
                    "很好用": 43,
                    "没什么效果": 8,
                    "大爱": 39,
                    "不好用": 10,
                    "物超所值": 1,
                    "没感觉到": 2,
                    "强烈推荐": 6,
                    "物有所值": 4,
                    "效果明显": 10,
                    "超爱": 9,
                    "值得入手": 16,
                    "不值得": 2,
                    "值得回购": 3,
                    "好好用": 2,
                    "不推荐": 2,
                    "很喜欢": 157,
                    "不喜欢": 29,
                    "不会回购": 24,
                    "还不错": 78,
                    "囤": 26,
                    "无功无过": 15
                },
                imgUrl: "img/echarts/circle.png",
                titleText: null,
            });

            JME.drawWordCloud({
                domId: 'canvasMakeup',
                dataJson: {
                    "叠擦": 1,
                    "光泽细腻": 1,
                    "水润感": 10,
                    "透明": 252,
                    "没有光泽": 1,
                    "自然": 132,
                    "柔和": 24,
                    "轻薄": 70,
                    "中等遮盖": 1,
                    "奶油": 1,
                    "不会改变": 3,
                    "裸妆": 1,
                    "厚重感": 1,
                    "珠光": 4,
                    "水嫩": 30,
                    "无妆感": 3,
                    "油光": 13,
                    "婴儿肌": 4,
                    "不会晕妆": 1,
                    "润泽感": 1,
                    "闪闪的": 1,
                    "金属": 40,
                    "丝缎": 5,
                    "水光": 1,
                    "通透": 16,
                    "无色": 27,
                    "玻璃": 18,
                    "假白": 2,
                    "透明感": 1,
                    "高度遮盖": 2,
                    "泛油光": 2
                },
                imgUrl: "img/echarts/circle.png",
                titleText: null,
            });

            JME.drawWordCloud({
                domId: 'canvasColor',
                dataJson: {
                    "低调": 24,
                    "蓝色": 26,
                    "暗淡": 9,
                    "少女": 10,
                    "温柔": 14,
                    "银色": 13,
                    "元气": 20,
                    "显年轻": 6,
                    "成熟": 5,
                    "提亮": 39,
                    "白色": 124,
                    "肤色": 348,
                    "深邃": 1,
                    "黑色": 170,
                    "冷色调": 2,
                    "粉色": 1,
                    "棕色": 4,
                    "玫瑰": 172,
                    "打底": 53,
                    "减龄": 1,
                    "绿色": 2,
                    "灰色": 1,
                    "樱桃": 2,
                    "暗沉": 94,
                    "偏黄": 6,
                    "太白": 1,
                    "黄色": 2,
                    "很浓郁": 3,
                    "日常": 38,
                    "假白": 2,
                    "银灰色": 1,
                    "可爱": 25
                },
                imgUrl: "img/echarts/circle.png",
                titleText: null,
            });
        };
    })(contentInitObj, 1, '功效传达')
    ;
    (function (rootObj, index) {
        rootObj.domInitArr[index] = function () {
            $proDetailLis.eq(index).html(
                "<div class='canvasObj'>" +
                "<div class='canvasDesc'>▎各渠道价格</div>" +
                "<div class='canvasCon' id='canvasPrice'></div>" +
                "</div>" +
                "<div class='canvasObj'>" +
                "<div class='canvasDesc'>▎价格认可度</div>" +
                "<div class='canvasCon' id='canvasPriceSatisfaction'></div>" +
                "</div>")
        };
        rootObj.canvasInitArr[index] = function () {
            JME.drawPriceLine({
                domId: 'canvasPrice',
                dataJson: {},
            });

            JME.drawWordCloud({
                domId: 'canvasPriceSatisfaction',
                dataJson: {
                    "价格便宜": 1,
                    "性价比低": 2,
                    "很便宜": 1,
                    "不贵": 1,
                    "比较贵": 6,
                    "实惠": 11,
                    "性价比不高": 11,
                    "不值": 3,
                    "平价": 4,
                    "那么贵": 2,
                    "很贵": 3,
                    "不算便宜": 1,
                    "性价比高": 25,
                    "好贵": 7,
                    "挺贵": 2,
                    "小贵": 13,
                    "不便宜": 8
                },
                imgUrl: "img/echarts/circle.png",
                titleText: null,
            });
        };
    })(contentInitObj, 2, '价格认可度')
    ;
    (function (rootObj, index) {
        rootObj.domInitArr[index] = function () {
            $proDetailLis.eq(index).html(
                "<div class='canvasObjHalf'>" +
                "<div class='canvasDesc'>▎年龄定位</div>" +
                "<div class='canvasConHalf' id='canvasCustomerAge'></div>" +
                "</div>" +
                "<div class='canvasObjHalf'>" +
                "<div class='canvasDesc'>▎肤质定位</div>" +
                "<div class='canvasConHalf' id='canvasCustomerSkin'></div>" +
                "</div>" +
                "<div class='canvasObjHalf'>" +
                "<div class='canvasDesc'>▎地区定位</div>" +
                "<div class='canvasConHalf' id='canvasCustomerLocation'></div>" +
                "</div>" +
                "<div class='canvasObjHalf'>" +
                "<div class='canvasDesc'>▎性别定位</div>" +
                "<div class='canvasConHalf' id='canvasCustomerSex'></div>" +
                "</div>"
            )

        };
        rootObj.canvasInitArr[index] = function () {
            JME.drawPie({
                domId: 'canvasCustomerAge',
                dataJson: {
                    '20岁以下': 6000 * 0.20,
                    '21-25岁': 6000 * 0.15,
                    '26-30岁': 6000 * 0.3,
                    '31-39岁': 6000 * 0.3,
                    '40岁以上': 6000 * 0.05,
                },
                seriesName: '年龄定位',
            });
            JME.drawPie({
                domId: 'canvasCustomerSkin',
                dataJson: {
                    '干性': 6000 * 0.10,
                    '油性': 6000 * 0.15,
                    '混合性': 6000 * 0.50,
                    '痘肌': 6000 * 0.20,
                    '敏感肌': 6000 * 0.05,
                },
                seriesName: '肤质定位',
            });
            JME.drawPie({
                domId: 'canvasCustomerLocation',
                dataJson: {
                    '北京': 7000,
                    '上海': 5555,
                    '广东': 4589,
                    '浙江': 3500,
                    '江苏': 2422,
                    '其他地区': 3535,
                },
                seriesName: '地区定位',
            });
            JME.drawPie({
                domId: 'canvasCustomerSex',
                dataJson: {
                    '女': 6000 * 0.92,
                    '男': 6000 * 0.08,
                },
                seriesName: '性别',
            });
        };
    })(contentInitObj, 3, '消费者画像')
    ;
    (function (rootObj, index) {
        rootObj.domInitArr[index] = function () {
            $proDetailLis.eq(index).html(
                "<div class='canvasDesc'>▎成分列表</div>" +
                "<div class='spa' style='margin: 50px 0 150px;'>" +
                '<div id="compHeader" style="display: none"></div>' +
                '<div id="compAltTab"></div>' +
                '<div id="compList"></div>' +
                '<div id="compMiddle" style="box-sizing: border-box;padding: 0 10px"></div>' +
                '</div>'
            )

        };
        rootObj.canvasInitArr[index] = function () {
            requirejs([
                'vmComHead',
                'vmAltTab',
                'vmComList',
                'vmComMiddle',
            ], function () {
                $.ajax({
                    type: "post",
                    url: jimiHost + '/formual_safe.php',
                    data: {
                        pid: '56829ef1efb80c4e26c438de'
                    },
                    dataType: "jsonp",
                    jsonp: "callback",
                    jsonpCallback: "jsonpcallback",
                    success: function (data) {
//                        console.log(JSON.stringify(data));
                        //var compositionHeader = new CompositionHeader('#compHeader', data);
                        var alternateTab = new AlternateTab('#compAltTab', {txtArray: ['按类型', '按安全']});
                        var compositionList = new CompositionList('#compList',
                            {
                                color: '#555',
                                listArray: [
                                    [
                                        {color: '#fba41a', txt: '功效型成分'},
                                        {color: '#555', txt: '剂型需求'},
                                        {color: '#3982e1', txt: '保湿型成分'},
                                        {color: '#23ad39', txt: '防晒型成分'},
                                    ],
                                    [
                                        {color: '#e5004f', txt: '慎用成分'},
                                        {color: '#555', txt: '剂型需求'},
                                    ]
                                ],
                            });

                        var middleComponent = new MiddleComponent('#compMiddle', data);
//                        var alertCon = new AlertCon('.alertCon', data);

                        //控件与控件的关联 点击按钮 类型和成分的切换 控件的事件只能写在所有元素加载完成
                        var $spa = $('.spa');

                        $spa.find('#compAltTab .alterDiv').click(function () {
                            var index = $(this).index();
                            $ele1 = $('#compList .listCon').eq(index);
                            $ele2 = $('#compMiddle>div').eq(index);
                            $ele1.siblings().stop().fadeOut(100, 'swing', function () {
                                $ele1.stop().fadeIn(100);
                            });
                            $ele2.siblings().stop().fadeOut(100, 'swing', function () {
                                $ele2.stop().fadeIn(100);
                            });

                        })
                    }
                    ,
                    error: function (err) {
                        console.log('ERROR!');
                        console.log(err);
                    }
                })
                ;
            })


        };
    })(contentInitObj, 4, '核心成分')
    ;
    (function (rootObj, index) {
        rootObj.domInitArr[index] = function () {
            $proDetailLis.eq(index).html(
                "<div class='canvasObj'>" +
                "<div class='canvasDesc'>▎相关视频数量</div>" +
                "<div class='canvasCon' id='canvasVideoNum'></div>" +
                "</div>" +
                "<div class='canvasObj'>" +
                "<div class='canvasDesc'>▎最大播放次数</div>" +
                "<div class='canvasCon' id='canvasVideoPlay'></div>" +
                "</div>" +
                "<div class='canvasObj'>" +
                "<div class='canvasDesc'>▎相关视频</div>" +
                "<div id='relatedVideoCon'></div>" +
                "</div>" +
                "<div class='canvasObj'>" +
                "<div class='canvasDesc'>▎热门事件</div>" +
                "<div>暂无</div>" +
                "</div>"
            );

        };
        rootObj.canvasInitArr[index] = function () {
            JME.drawLine({
                domId: 'canvasVideoNum',
                dataJson: {
                    '优酷': 960,
                    '爱奇艺': 124,
                    '搜狐': 74,
                    '腾讯': 187,
                    'B站': 3,
                },
            });

            JME.drawLine({
                domId: 'canvasVideoPlay',
                dataJson: {
                    '优酷': 11011,
                    '爱奇艺': 6933,
                    '搜狐': 1971,
                    '腾讯': 1633,
                    'B站': 874,
                },
            });

            //appendVideo.............................................
            var videoJson = {
                "data": [{"vid": "XNjg2MjY0MzE2", "title": "兰蔻“小黑瓶“家族广告_标清"}, {
                    "vid": "XMzIxNTE2Njg4",
                    "title": "兰蔻“小黑瓶”广告"
                }, {"vid": "XOTY1NDU4Nzg0", "title": "Suri-兰蔻-小黑瓶大眼精华-720_480"}, {
                    "vid": "XMzI1NjE2MjIw",
                    "title": "兰蔻 小黑瓶精华"
                }, {"vid": "XNjg2MDc5NTcy", "title": "兰蔻”小黑瓶“亚洲新闻发布会"}, {
                    "vid": "XNDUxMDUyMzEy",
                    "title": "兰蔻 小黑瓶眼部肌底精华（眼部年轻基因   一触即发）"
                }]
            };
            var str = '';
            [].forEach.call(videoJson.data, function (e, i, arr) {
                str += getVideoDom(e.vid, e.title);
            })
            str += '<div style="clear: both"></div>'
            $('#relatedVideoCon').html(str);

            function getVideoDom(videoId, videoTitle) {
                var str = '';
                str += '<div class="relatedVideoSec">'
                str += "<iframe src='http://player.youku.com/embed/" + videoId + "' frameborder=0 'allowfullscreen'></iframe>" + "<div class='videoTitle'>" + videoTitle + "</div>"
                str += '</div>';

                return str;
            }

        };
    })(contentInitObj, 5, '营销曝光')
    ;
    (function (rootObj, index) {
        rootObj.domInitArr[index] = function () {
            $proDetailLis.eq(index).html(
                "<div class='canvasObj'>" +
                "<div class='canvasDesc'>▎品牌定位与发展</div>" +
                "<div>暂无</div>" +
                "</div>" +

                "<div class='canvasObj'>" +
                "<div class='canvasDesc'>▎渠道影响力</div>" +
                "<div class='canvasCon' id='canvasChannel'></div>" +
                "</div>"
            );


        };
        rootObj.canvasInitArr[index] = function () {
            JME.drawLine({
                domId: 'canvasChannel',
                dataJson: {
                    '百度': 403000,
                    '微博': 881,
                    '微信': 17322,
                    '肌秘APP': 420,
                },
            });

        };
    })(contentInitObj, 6, '影响力')
    ;
    (function (rootObj, index) {
        rootObj.domInitArr[index] = function () {
            $proDetailLis.eq(index).html(
                "<div class='canvasObj'>" +
                "<div class='canvasDesc'>▎媒体评价(新浪微博)</div>" +
                "<div class='canvasCon' id='canvasMediaWB'></div>" +
                "</div>" +

                "<div class='canvasObj'>" +
                "<div class='canvasDesc'>▎媒体评价(淘宝天猫)</div>" +
                "<div class='canvasCon' id='canvasMediaTB'></div>" +
                "</div>" +

                "<div class='canvasObj'>" +
                "<div class='canvasDesc'>▎媒体评价(京东)</div>" +
                "<div class='canvasCon' id='canvasMediaJD'></div>" +
                "</div>"
            );


        };
        rootObj.canvasInitArr[index] = function () {
            JME.drawWordCloud({
                domId: 'canvasMediaWB',
                dataJson: {
                    "韩国": 1,
                    "滋润": 1,
                    "明亮": 3,
                    "朴槿惠": 1,
                    "比菲": 1,
                    "零售价": 1,
                    "亲切": 2,
                    "任性": 1,
                    "炯炯有神": 1,
                    "商城": 1,
                    "lancome": 4,
                    "自负": 1,
                    "香港": 2,
                    "专柜": 3,
                    "眼霜": 4,
                    "面霜": 2,
                    "博大精深": 1,
                    "可爱": 1,
                    "法国": 2,
                    "紧致": 2,
                    "安东": 1,
                    "好莱坞": 1,
                    "解决": 2,
                    "真心": 1,
                    "恐怖": 2,
                    "暗淡": 1,
                    "微信": 2,
                    "精华液": 2,
                    "日霜": 2,
                    "全效": 1,
                    "销价": 2,
                    "兰蔻": 4,
                    "可恶": 2
                },
                imgUrl: "img/echarts/circle.png",
                titleText: null,
            })

            JME.drawWordCloud({
                domId: 'canvasMediaTB',
                dataJson: {
                    "保湿滋润": 13,
                    "物流快": 33,
                    "吸收效果不错": 9,
                    "正品": 33,
                    "服务好": 39,
                    "控油": 3,
                    "味道好闻": 4,
                    "清洁度强": 8,
                    "质量好": 35
                },
                imgUrl: "img/echarts/circle.png",
                titleText: null,
            })

            JME.drawWordCloud({
                domId: 'canvasMediaJD',
                dataJson: {
                    "脸挺舒服的": 41,
                    "很好用": 34,
                    "物流速度快": 31,
                    "是正品": 32,
                    "比商场便宜": 33,
                    "活动买的": 74,
                    "吸收快": 30,
                    "期待效果": 29,
                    "老婆很喜欢": 31,
                    "效果不错": 36
                },
                imgUrl: "img/echarts/circle.png",
                titleText: null,
            });
        };
    })(contentInitObj, 7, '媒体评价')

    window.contentInitObj = contentInitObj;
})(window, document, $)
