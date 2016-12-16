/*!
 * radarList, a JavaScriptPlugIn v1.0.0
 * http://www.jimi.la/
 *
 * Copyright 2016, CaoYuhao
 * All rights reserved.
 * Date: 2016年12月12日11:19:47
 */
;
(function (w, d, $, undefined) {

    console.log(window.echarts)
    var JME = {};
    var rgbListIndex = 0;
    var listArr = [
        {r: 100,},
        {g: 100,},
        {b: 100,},
        {r: 100, g: 100},
        {r: 100, b: 100},
        {g: 100, b: 100},
    ];

    function getRGBlist() {
        var answer = listArr[rgbListIndex];
        rgbListIndex = ((rgbListIndex + 1) == listArr.length) ? 0 : (rgbListIndex + 1);
        return answer;
    };

    JME.drawWordCloud = function (json) {
        var domId = json.domId,
            dataJson = json.dataJson,
            imgUrl = json.imgUrl,
            titleText = json.titleText || '关键词提及指数',
            rgblist = getRGBlist(),
            rValue = rgblist.r || 0,
            gValue = rgblist.g || 0,
            bValue = rgblist.b || 0;

        var data = [];
        for (k in dataJson) {
            data.push({name: k, value: dataJson[k]});
        }

        var myChart = echarts.init(document.getElementById(domId));
        var maskImage = new Image();
        var option = {
            left: 'center',
            top: 'center',
            width: '90%',
            height: '90%',
            backgroundColor: '#f3f3f3',
            title: {
                text: titleText,
//            textStyle: {
//                color: '#333',
//                fontStyle: 'normal',
//                fontWeight: 'border',
//                fontFamily: '微软雅黑',
//                fontSize: 20,
//            },
//            link: 'https://github.com/ecomfe/echarts-wordcloud',
//            subtext: '包装 关键字',
//            sublink: 'http://data-visual.cn',
            },
            tooltip: {},
            series: [{
                type: 'wordCloud',
                sizeRange: [18, 100],
                rotationRange: [0, 0],
                rotationStep: 0,
                gridSize: 10,
//              shape: 'pentagon',
                maskImage: maskImage,
                textStyle: {
                    normal: {
                        color: function () {
                            return 'rgb(' + [
                                    Math.round(Math.random() * 60 + rValue),
                                    Math.round(Math.random() * 60 + gValue),
                                    Math.round(Math.random() * 60 + bValue)
                                ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 1,
                        shadowColor: '#333'
                    }
                },
                data: data,
            }]
        };

        maskImage.src = imgUrl;

        maskImage.onload = function () {
            myChart.setOption(option);
        }
    };
    JME.drawPriceLine = function (json) {
        var domId = json.domId,
            dataJson = json.dataJson,
            imgUrl = json.imgUrl,
            titleText = json.titleText || '关键词提及指数';


        var option = {
            //title: {
            //    text: titleText,
            //},
            backgroundColor: '#f3f3f3',
            color: ['#333', '#666', '#999', '#333', '#666', '#999',],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                show: true,
                data: ['天猫', '京东', '1号店']
            },
            grid: {
                left: '2%',
                right: '2%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['12-8', '12-9', '12-10', '12-11', '12-12', '12-13', '12-14']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            animationEasing: 'exponentialInOut',
            series: [
                {
                    name: '天猫',
                    type: 'bar',
                    barCategoryGap: '30%',
                    data: [760, 760, 760, 760, 760, 760, 760,]
                },
                {
                    name: '京东',
                    type: 'bar',
                    barCategoryGap: '30%',
                    data: [760, 760, 760, 760, 760, 760, 760,]

                },
                {
                    name: '1号店',
                    type: 'bar',
                    barCategoryGap: '30%',
                    data: [760, 760, 760, 760, 760, 760, 760,]

                },

            ]
        };
        var myChart = echarts.init(document.getElementById(domId));
        myChart.setOption(option);
    };
    JME.drawLine = function (json) {
        var domId = json.domId,
            dataJson = json.dataJson,
            imgUrl = json.imgUrl,
            titleText = json.titleText || '关键词提及指数';

        var legendArr = [];
        var seriesArr = [];
        for (k in dataJson) {
            legendArr.push(k);
            seriesArr.push(
                {
                    name: k,
                    type: 'bar',
                    barCategoryGap: '30%',
                    data: [dataJson[k]],
                }
            );
        }
        ;


        var option = {
            //title: {
            //    text: titleText,
            //},
            backgroundColor: '#f3f3f3',
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                show: true,
                data: legendArr,
            },
            grid: {
                left: '2%',
                right: '2%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: []
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            animationEasing: 'exponentialInOut',
            series: seriesArr,
        };
        var myChart = echarts.init(document.getElementById(domId));
        myChart.setOption(option);
    };
    JME.drawPie = function (json) {
        var domId = json.domId,
            dataJson = json.dataJson,
            imgUrl = json.imgUrl,
            titleText = json.titleText;
        seriesName = json.seriesName || "";


        var legendData = [];
        var seriesData = [];
        for (k in dataJson) {
            legendData.push(k);
            seriesData.push({
                value: dataJson[k],
                name: k,
            });
        }

        var option = {
            backgroundColor: '#f3f3f3',
            title: {
                text: titleText,
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: legendData
            },
            animationEasing: 'exponentialInOut',
            series: [
                {
                    name: seriesName,
                    type: 'pie',
                    radius: '52%',
                    center: ['50%', '60%'],
                    data: seriesData,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    //外圈引导图的样式
                    labelLine: {
                        normal: {
                            length: 10,
                            length2: 10
                        }
                    }
                }
            ]
        };

        var myChart = echarts.init(document.getElementById(domId));
        myChart.setOption(option);
    };
    w.JME = JME;
})(window, document, $)
