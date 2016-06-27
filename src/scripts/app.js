/**
 * Created by Administrator on 2016/6/22.
 */
require('./lib/spa.min.js');
require('./lib/iscroll-probe.js');
require('./views/index.js');
require('./lib/swiper-3.3.1.min.js');
require('./views/home.js');
require('./views/message.js');
require('./views/search.js');
require('./views/my.js');
require('./views/guide.js');

SPA.config({
    indexView: 'guide'
});
