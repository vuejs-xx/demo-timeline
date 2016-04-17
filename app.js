/**
 * Created by edwin on 2016/4/17.
 */
var Robot = require("./roboot.js");
var oOptions = {
    domain:'mamicode.com', //抓取网站的域名
    firstUrl:'http://www.mamicode.com/info-list-2-1.html', //抓取的初始URL地址
    saveDir:"E:\\wwwroot/mamicode/", //抓取内容保存目录
    debug:true, //是否开启调试模式
};
var o = new Robot(oOptions);
o.crawl(); //开始抓取