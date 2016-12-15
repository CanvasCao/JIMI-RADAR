/*!
 * ReportTitle, a JavaScriptPlugIn v1.0.0
 * http://www.jimi.la/
 *
 * Copyright 2016, CaoYuhao
 * All rights reserved.
 * Date: 2016-12-15 16:15:58
 */
;
(function (w, d, $, undefined) {
    function ReportBreadCrumb(container, data) {
        this.C = this.container = (typeof container == 'string') ? $(container) : container;
        this.data = data || {};
        this.config = {};
        this.init();
    }

    ReportBreadCrumb.prototype = {
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
            var str = '您的报告列表';
            [].forEach.call(that.data.breadCrumb, function (e, i, array) {
                str += ' > ' + e;
            });
            $(this.C).html(str);
        },
        initCSS: function () {
            var that = this;
        },
        bindEvent: function () {
            var that = this;
        }
    }
    w.ReportBreadCrumb = ReportBreadCrumb;
})(window, document, jQuery)

;
(function (w, d, $, undefined) {
    function ReportDownload(container, data) {
        this.C = this.container = (typeof container == 'string') ? $(container) : container;
        this.data = data || {};
        this.config = {};
        this.init();
    }

    ReportDownload.prototype = {
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
            $(this.C).html(
                "报告统计时间：" + that.data.startTime + '--' + that.data.startTime + "<span class='reportUpdate'>要求更新</span>"
            )
            ;
        },
        initCSS: function () {
            var that = this;

            $(this.C).find('.reportUpdate').css({
                'margin-left': '20px',
                padding: '4px 8px',
                background: '#575757',
                color: '#fff',
                'font-size': '14px',
                cursor: 'pointer',
            })

        },
        bindEvent: function () {
            var that = this;
        }
    }
    w.ReportDownload = ReportDownload;
})(window, document, jQuery)


