Mugeda.script.push(function (mugeda) {
mugeda.addEventListener('renderReady', function () {
     _mwt=window._mwt||[];
   _mwt.push(['_setAutoPageview',false]);

       var scene = mugeda.scene;
    var currentIndex = -1;



   (function() {
       var mz = document.createElement("script");
      mz.src = "//wechat.uar.hubpd.com/tracking-code/wx.js?mzzwpok7";
       var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(mz, s);
   })();

       scene.addEventListener('enterframe', function () {
        var pageIdx = scene.currentPageIndex;

        if (currentIndex !== pageIdx) {
           _mwt.push(['_trackPageview',"/"+pageIdx,pageIdx+""]);
            currentIndex = pageIdx;
        }
    });
    defineWechatParameters({
       url_callback: function () {
           // 微信分享链接
           var shareurl = window.location.href;
           return _mz_wx_shareUrl(shareurl);
       },
       success_share_callback: function (type) {
           if (type === 'share') { //朋友圈
               // TODO;

               _mwt.push(['_trackWxEvent', 'timeline']);
           } else if (type === 'send') { //好友
               // TODO;
             _mwt.push(['_trackWxEvent', 'friend']);

           }
       }
    });
});

});