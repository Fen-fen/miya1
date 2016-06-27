/**
 * Created by Administrator on 2016/6/23.
 */
var Util = {
    setFocus: function (e) {
        $(e).addClass('active').siblings().removeClass('active');
    }
};

module.exports = Util;
