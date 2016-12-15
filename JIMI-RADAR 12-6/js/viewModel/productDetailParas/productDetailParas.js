/*!
 * PageClickBar, a JavaScriptPlugIn v1.0.0
 * http://www.jimi.la/
 *
 * Copyright 2016, CaoYuhao
 * All rights reserved.
 * Date: 2016-12-15 15:20:08
 */
;
(function (w, d, $, undefined) {
    function ProductDetailParas(container, data) {
        this.C = this.container = (typeof container == 'string') ? $(container) : container;
        this.data = data || {};
        this.config = {};
        this.init();
    }

    ProductDetailParas.prototype = {
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
            $(this.C).append(
                '<span class="proImg">' +
                '<img height="200" src="' + that.data.imgUrl + '"/>' +
                '</span>'
            );


            $(this.C).append(
                "<span class='proParameter'></span>"
            );

            var str = '<div class="proParaChiName">' + that.data.chiName + '</div>';
            str += '<div class="proParaEngName">英文名：' + that.data.engName + '</div>';

            [].forEach.call(that.data.otherArray, function (e, i, array) {
                str += '<span>' + e + '</span>';
            })
            $(this.C).find('.proParameter').html(str);


            $(this.C).append(
                "<span class='proDownload'>" +
                "<div class='proDownloadBtn'>下载报告</div>" +
                "</span>"
            );

            $(this.C).append(
                '<div style="clear: both;"></div>'
            );


        },
        initCSS: function () {
            var that = this;


            $(this.C).css({
                padding: '15px 0px',
                'box-sizing': 'border-box',
            })
            $(this.C).find('.proImg').css({
                float: 'left',
                width: '200px',
                height: '200px',
                overflow: 'hidden',
                'box-sizing': 'border-box',
                margin: '0 20px',
            });
            $(this.C).find('.proParameter').css({
                float: 'left',
                width: '590px',
                height: '200px',
                'box-sizing': 'border-box',
                color: '#757575',
            });

            $(this.C).find('.proParaChiName').css({
                'font-size': '18px',
                color: '#3f3f3f',
                'font-weight': 'bold',
                'line-height': '24px',
                'margin-top': '20px',
                'margin-bottom': '15px',
            });


            $(this.C).find('.proParaEngName').css({
                'margin-bottom': '10px',
            });


            $(this.C).find('.proParameter span').css({
                width: '50%',
                'box-sizing': 'border-box',
                display: 'inline-block',
                'vertical-align': 'text-top',
                'word-break': 'break-all',
                'margin-bottom': '10px',
            })


            $(this.C).find('.proDownload').css({
                float: 'right',
                width: '190px',
                height: '200px',
                'box-sizing': 'border-box',
                margin: '0 0px',
                'text-align': 'center',
                position: 'relative',
            })


            $(this.C).find('.proDownloadBtn').css({
                cursor: 'pointer',
                background: '#647ea0',
                position: 'absolute',
                right: '40px',
                top: '50%',
                width: '120px',
                'text-align': 'center',
                'line-height': '40px',
                color: '#fff',
                transform: 'translateY(-50%)',
            })


        },
        bindEvent: function () {
            var that = this;

        }
    }
    w.ProductDetailParas = ProductDetailParas;
})(window, document, jQuery)


