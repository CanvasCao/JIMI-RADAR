/*!
 * radarHeader, a JavaScriptPlugIn v1.0.0
 * http://www.jimi.la/
 *
 * Copyright 2016, CaoYuhao
 * All rights reserved.
 * Date: 2016-12-7 16:57:19
 */
;
(function (w, d, $, undefined) {
    function RadarHeader(container, data) {
        this.C = this.container = (typeof container == 'string') ? $(container) : container;
        this.data = data || {};
        this.index = this.data.index || 0;
        this.config = {};
        this.init();
    }

    RadarHeader.prototype = {
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
            $(this.C).html("<div class='headerInnerC'></div>");
            $(this.C).find('.headerInnerC').html('<div class="headerLeft"></div><div class="headerRight"></div>');

            $(this.C).find('.headerLeft').html("<img class='headerLogo' src='img/header/logo.png'/>" +
                "<span>产品</span>" +
                "<span>品牌</span>" +
                "<span>分类</span>");
            $(this.C).find('.headerRight').html('<div class="headerHome">个人中心</div>')

        },
        initCSS: function () {
            var that = this;
            $(that.C).css({
                height: '60px',
                background: '#373b40',
            })
        },
        bindEvent: function () {
            var that = this;
            //init
            $(this.C).find('.headerLeft span').eq(that.index).addClass('headerMenuCur').siblings('span').removeClass('headerMenuCur');

            $(this.C).find('.headerLeft span').click(function () {
                $(this).addClass('headerMenuCur').siblings('span').removeClass('headerMenuCur');
            });

            $(this.C).find('.headerLogo').click(function () {
                location.href = 'productList.html';
            })


        }
    }
    w.RadarHeader = RadarHeader;
})(window, document, jQuery)


