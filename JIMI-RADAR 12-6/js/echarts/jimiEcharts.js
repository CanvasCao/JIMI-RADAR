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
    var JME = {};
    JME.drawWordCloud = function (json) {
        var domId = json.domId,
            dataJson = json.dataJson,
            imgUrl = json.imgUrl,
            titleText = json.titleText || '关键词提及指数',
            rgblist = json.rgblist || {
                    r: 0,
                    g: 0,
                    b: 0,
                },
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
                sizeRange: [15, 100],
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
    w.JME = JME;
})(window, document, $)
