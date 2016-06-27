/**
 * Created by Administrator on 2016/6/23.
 */
var tplMy = require('../templates/my.string');
util = require('../utils/fn.js');
SPA.defineView('my', {
    html: tplMy,
    plugins: ['delegated'],
    bindActions: {
        'tap.my.slide': function (e, data) {
            this.mySectionSwiper.slideTo($(e.el).index());
        }
    },

    bindEvents: {
        'show': function () {
            this.mySectionSwiper = new Swiper('#my-section-swiper', {
                loop: false,
                onSlideChangeStart: function (swiper) {
                    var index = swiper.activeIndex;
                    var $lis = $('.m-home .my-nav li');
                    util.setFocus($lis.eq(index));
                }
            })
        }
    }
})