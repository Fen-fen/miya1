/**
 * Created by Administrator on 2016/6/23.
 */
var tplSearch = require('../templates/search.string');
var util = require('../utils/fn.js');
SPA.defineView('search',{
    html:tplSearch,
    plugins: ['delegated'],

    bindActions:{

        'tap.search.slide': function (e, data) {
            // 设置当前 tab 高亮
            util.setFocus(e.el);
            this.searchNavSwiper.slideTo($(e.el).index());


        },
        'tap.navchild.slide': function (e, data) {
            // 设置当前 tab 高亮
            util.setFocus(e.el);
            this.searchNavChildSwiper.slideTo($(e.el).index());


        },
    },
    bindEvents: {
        'show': function () {
            this.mySwiper = new Swiper('#search-swiper', {
                loop: true,
                pagination: '.swiper-pagination',
                autoplay:1000,
            }),
            this.searchNavSwiper = new Swiper('#search-nav-swiper', {
                loop: false,
                onSlideChangeStart: function (swiper) {
                    var index = swiper.activeIndex;
                    var $lis = $('.m-home #home-nav li');
                    util.setFocus($lis.eq(index));
                }

            }),
            this.searchNavChildSwiper = new Swiper('#search-navchild-swiper', {
                loop: false,
                onSlideChangeStart: function (swiper) {
                    var index = swiper.activeIndex;
                    var $lis = $('.m-home #search-nav-swiper span');
                    util.setFocus($lis.eq(index));
                }

            }),
            this.mySwiper = new Swiper('#search-single-banner', {
                 loop: false,
                 pagination: '.swiper-pagination',
            })
        },
    },
})