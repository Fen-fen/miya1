/**
 * Created by Administrator on 2016/6/22.
 */
var tplIndex=require('../templates/index.string');
//var tplHome=require('../templates/index.string');
var util = require('../utils/fn.js');
SPA.defineView('index',{
    html:tplIndex,

    plugins: ['delegated'],


    init: {
            mySwiper: null,

    },

    modules: [{
        name: 'content', // 子视图的名字，用作后边引用的句柄
        views: ['home', 'search','message', 'my'], // 定义子视图的列表数组
        defaultTag: 'home', // 定义默认视图
        container: '.I-container' // 子视图的容器
    }],

    bindActions:{
        'switch.tabs': function (e, data) {
            // 设置当前 tab 高亮
            util.setFocus(e.el);

            // 切换子视图
            this.modules.content.launch(data.tag);
        },

    },

    bindEvents: {
            'show': function () {



            },

    },

}
)