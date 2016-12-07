/*!
 * radarFooter, a JavaScriptPlugIn v1.0.0
 * http://www.jimi.la/
 *
 * Copyright 2016, CaoYuhao
 * All rights reserved.
 * Date: 2016-12-7 16:57:19
 */
;
(function (w, d, $, undefined) {
    function RadarFooter(container, data) {
        this.C = this.container = (typeof container == 'string') ? $(container) : container;
        this.data = data || {};
        this.config = {};
        this.init();
    }

    RadarFooter.prototype = {
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
            $(this.C).html('Copyright © 2016-2020 肌秘扫描. All Right Reserved.');

            $(this.C).css({
                'border-top': '1px solid #dfe6ec',
                'text-align': 'center',
                'font-size': '14px',
                'line-height': '80px',
            })
        },
        initCSS: function () {
            var that = this;
        },
        bindEvent: function () {
            var that = this;
        }
    }
    w.RadarFooter = RadarFooter;
})(window, document, jQuery)


