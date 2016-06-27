/**
 * Created by Administrator on 2016/6/23.
 */
var tplHome = require('../templates/home.string');
var util = require('../utils/fn.js');
SPA.defineView('home',{
        html:tplHome,

        plugins: ['delegated'],

        init: {
            mySwiper: null,

        },

        bindActions:{
            'tap.slide': function (e, data) {
                this.homeSwiper.slideTo($(e.el).index())
                util.setFocus(e.el);
            }
        },

        bindEvents: {
            'show': function () {
                this.mySwiper = new Swiper('#banner-swiper', {
                    loop: true,
                    autoplay:1000,
                })

                this.homeSwiper = new Swiper('#home-swiper', {
                    loop: false,
                    onSlideChangeStart: function (swiper) {
                        var index = swiper.activeIndex;
                        var $lis = $('.m-home nav li');
                        util.setFocus($lis.eq(index));
                    }
                });

            },

        },

    }
)