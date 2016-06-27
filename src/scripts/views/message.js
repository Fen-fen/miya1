/**
 * Created by Administrator on 2016/6/23.
 */
var tplMessage = require('../templates/message.string');

SPA.defineView('message',{
    html:tplMessage,
    plugins: ['delegated'],
    bindActions: {

        'tap.message.slide': function (e, data) {

            this.messageSectionSwiper.slideTo($(e.el).index());

        },
    },
    bindEvents: {
        'show': function () {
            this.messageSectionSwiper = new Swiper('#message-section-swiper', {
                loop: false,
                //onSlideChangeStart: function (swiper) {
                //    var index = swiper.activeIndex;
                //    var $lis = $('.m-home .message-nav li');
                //    util.setFocus($lis.eq(index));
                //}

            })
        }
    }


})