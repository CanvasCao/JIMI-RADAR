requirejs.config({
    baseUrl: 'js',
    paths: {

        searchToJson: 'searchToJson/searchToJson',
        globalManager: 'globalManager/globalManager',
        jimiHost: 'constant/jimiHost',
        controller: 'controller/controller',

        echarts: 'echarts/echarts.min',
        wordCloud: 'echarts/wordCloud',
        JME: 'echarts/jimiEcharts',

        d3: 'tool/d3.min',
        contentInitObj: 'tool/contentInitObj',

        vmComHead: 'viewModel/composition/spa-compositionHeader',
        vmAltTab: 'viewModel/composition/spa-alternateTab',
        vmComList: 'viewModel/composition/spa-compositionList',
        vmComMiddle: 'viewModel/composition/spa-middleComponent',

        vmRadarHeader: 'viewModel/radarHeader/radarHeader',
        vmRadarFooter: 'viewModel/radarFooter/radarFooter',
        vmPageClickBar: 'viewModel/pageClickBar/pageClickBar',
        vmDetailParas: 'viewModel/productDetailParas/productDetailParas',
        vmRadarList: 'viewModel/radarList/radarList',
        vmReportTitle: 'viewModel/reportTitle/reportTitle',
    },
    shim: {
        'JME': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['echarts'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            //exports: 'JME'
        },
        'wordCloud': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['echarts'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            //exports: 'JME'
        },
    }
});