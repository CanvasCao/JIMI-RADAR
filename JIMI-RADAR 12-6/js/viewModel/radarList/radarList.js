/*!
 * radarList, a JavaScriptPlugIn v1.0.0
 * http://www.jimi.la/
 *
 * Copyright 2016, CaoYuhao
 * All rights reserved.
 * Date: 2016-12-7 16:57:19
 */
;
(function (w, d, $, undefined) {
    function RadarList(container, data) {
        this.C = this.container = (typeof container == 'string') ? $(container) : container;

        console.log(data)
        this.data = data || {};
        this.proArr = this.data.data;
        this.config = {};
        this.init();
    }

    RadarList.prototype = {
        init: function () {
            this.initConfig();
            this.createDom();
            this.initCSS();
            this.bindEvent();
        },
        initConfig: function () {

        },
        createDom: function () {
            var that = this;
            var str = '';
            [].forEach.call(that.proArr, function (e, i, arr) {
                var startTime = e.statStartTime.split('/');
                var endTime = e.statEndTime.split('/');

                str += "<div class='listSec' data-pid=" + e.pid + " >" +
                    "<div class='proImg'><img src='" + e.imgUrl + "'></div>" +
                    "<div class='pname'>" + e.pname + "</div>" +

                    "<span class=tri>报告生成时间：</span>" +

                    "<div class='rpTime'>" + e.generateTime + "</div>" +
                    "<span class='tri'>报告统计范围：</span>" +

                    "<div class='statTime'>" +
                    "<span class='statCir'>" +
                    "<div class='statYear'>" + startTime[0] + "/" + startTime[1] + "</div>" +
                    "<div class='statDay'>" + startTime[2] + "</div>" +
                    "</span>" +

                    "<span class='statLine'>-</span>" +

                    "<span class='statCir'>" +
                    "<div class='statYear'>" + endTime[0] + "/" + endTime[1] + "</div>" +
                    "<div class='statDay'>" + endTime[2] + "</div>" +
                    "</span>" +
                    "</div>" +
                    "</div>"
            });

            $(this.C).html(str);
        },
        initCSS: function () {
            var that = this;
        },
        bindEvent: function () {
            var that = this;

            $(this.C).find('.listSec').click(function () {
                var that = this;

                w.location.href = 'productDetail.html';
            })
        }
    }
    w.RadarList = RadarList;
})(window, document, jQuery)


