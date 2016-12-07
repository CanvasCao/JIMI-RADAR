/*!
 * PageClickBar, a JavaScriptPlugIn v1.0.0
 * http://www.jimi.la/
 *
 * Copyright 2016, CaoYuhao
 * All rights reserved.
 * Date: 2016-12-7 16:57:19
 */
;
(function (w, d, $, undefined) {
    function PageClickBar(container, data) {
        this.C = this.container = (typeof container == 'string') ? $(container) : container;
        this.data = data || {};
        this.pageNum = null;
        this.config = {};
        this.init();
    }

    PageClickBar.prototype = {
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
            $(this.C).html();

        },
        initCSS: function () {
            var that = this;
        },
        bindEvent: function () {
            var that = this;
        }
    }
    w.PageClickBar = PageClickBar;
})(window, document, jQuery)


