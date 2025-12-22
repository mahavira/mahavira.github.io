/**
 * Created by linmingxiong on 15/8/11.
 */
var gigoloKnit = {},
    user = {};


function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r !== null)return unescape(r[2]);
    return null;
}

function _isIos() {
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isiOS)
        return true;
    else
        return false;
}
var isIos = _isIos();
/**
 * Created by linmingxiong on 15/8/5.
 */
function talkObj() {
    this.url = {
        home: 'index.html',
        money: 'money.html',
        register: 'register.html',
        game: 'game.html',
        lists: 'lists.html'
    };
    this.content = {
        //title: "秀恩爱 Si得快\n拆散一对赚一块！",
        //gameOver: '你一共拆散了 X 对情侣\n赚了 X 元',
        //shareBtn: '分享再玩一次',
        //podiumBtn: '不玩了，领奖去',
        //notPlay: '哎呦，掐指一算，貌似你已领了红包咯，明天可以继续领哈~',
        //share: [
        //    '秀恩爱死得快，拆散X对赚X块！'
        //],


        score: [
            'label-score-1.png',
            'label-score-7.png',
            'label-score-2.png',
            'label-score-5.png',
            'label-score-4.png'
        ],
        //分享
        shareTitle: '秀恩爱Si得快，拆散一对赚一块！',
        shareDesc: '过什么七夕？！来帮我赚钱！',
        wxInitUrl: '/serve/jssign',
        shareImg: 'http://weixin2.souyidai.com/7xi/res/goutou2.jpg',
        shareUrl: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5ff6c76bdf3b5cce&redirect_uri=http%3A%2F%2Fweixin.souyidai.com%2Foauth%2F&response_type=code&scope=snsapi_userinfo&state=7xi{1}#wechat_redirect',
        shareOk: '分享成功',
        shareClose: '分享取消',

        //friendHelp: "{1}\n邀请你爽High一局，帮他赚钱\n今天还能帮Ta再爽{2}次",
        //userMoney: "获得的奖励总计：{1}元",
        //seeRoleBtn: '查看游戏规则',
        cantPlay: '今天你的机会已经用完了，明天再来吧',
        cantPlayHelp: '今天帮他的机会已经用完了，明天再来吧',

        //campaignTime: '搜易贷“拆情侣赢红包”活动时间为\n2015年8月19日-21日',
        //ruleGame: '1. 用手指划过牛郎&织女，将其拆散可得1分\n'
        //+ '2. 未能成功拆散或误拆基友，均会减1分\n'
        //+ '3. 每1积分可兑换1元搜易贷投资红包\n'
        //+ '4. 每位用户每天能进行多次刷分操作，但\n    仅可选择一次成绩进行兑换\n'
        //+ '5. 当日机会用完后果断邀朋友帮“拆”，\n    拆的分数会累计到邀请人的账户中\n'
        //+ '6. 每位用户每日最高能兑换2次奖励，其中\n    包含1次“自理更生”和1次“好友助力”的奖\n    励，且总额累计不超过88元\n'
        //+ '7. 兑换奖励当日有效，次日清零',

        regPhoneNull: '请输入手机号码!',
        regCaptchaNull: '请输入验证码!',
        regCaptchaError: '验证码不正确!',
        regPhoneError: '您的手机号码不正确!',
        regPhoneCaptchaNull: '请输入手机验证码!',
        regPhoneCaptchaError: '手机号码验证错误!',
        regPwNull: '请输入搜易贷登录密码!',
        regPwMinSize: '登录密码长度不可少于6位!',
        regClause: '请勾选搜易贷在线服务协议!',
        maxMoney: '每日累计兑换奖励金额为88元红包，当前申请的兑换额度已超出总额。您今日还可再兑换{1}元红包。',
        toDayUse: '今日兑换已用完，明天再来吧。',
        notMoneyYou: '0分？今天太背了！快去邀请朋友来帮你玩',
        notFriendHelpYou: '今天还没有朋友帮你哦，快找人来帮你赚钱啦！',
        cashOk: '兑换成功！',
        notMoney: '你当前的余额是0哦！',
        taskGame: '* 每人每天只能“兑换”一次自己的分数奖励哦。\n  对目前分数不满意，可以“重玩”！'
    };

    this.loves = [
        {
            lovers: true,
            role: [
                {
                    key: 'role/f1.png',
                    x: 100, y: -20,
                    direction: 1
                },
                {
                    key: 'role/1.png',
                    x: 0, y: 0,
                    direction: 0
                }
            ]
        }, {
            lovers: true,
            role: [
                {
                    key: 'role/2.png',
                    x: 0, y: 0,
                    direction: 0
                },
                {
                    key: 'role/f2.png',
                    x: 100, y: -20,
                    direction: 1
                }
            ]
        }, {
            lovers: false,
            role: [
                {
                    key: 'role/3.png',
                    x: 0, y: 0,
                    direction: 0
                },
                {
                    key: 'role/5.png',
                    x: 150, y: 0,
                    direction: 1
                }
            ]
        }, {
            lovers: true,
            role: [
                {
                    key: 'role/4.png',
                    x: 0, y: 0,
                    direction: 0
                },
                {
                    key: 'role/f3.png',
                    x: 60, y: 0,
                    direction: 1
                }
            ]
        }, {
            lovers: false,
            role: [
                {
                    key: 'role/f4.png',
                    x: 0, y: 0,
                    direction: 0
                },
                {
                    key: 'role/f5.png',
                    x: 180, y: 0,
                    direction: 1
                }
            ]
        }
    ];

    this.tipsClear = null;

}
talkObj.prototype = {
    get: function () {
        var _args = arguments;
        if (typeof _args[0] === 'object') {
            _args = _args[0];
        }
        var txt = this.content[_args[0]];
        if (_args.length == 1) {
            return txt;
        }

        for (var i = 1; i < _args.length; i++) {
            var re = new RegExp('\\{' + (i) + '\\}', 'gm');
            txt = txt.replace(re, _args[i]);
        }
        return txt;
    },
    tips: function () {
        var _txt = this.get(arguments);
        if (!$('.tips').length) {
            $('body').append('<div class="tips"><div class="tips-warp"><span></span></div></div>');
        }
        $('.tips span').text(_txt);
        $('.tips').show();
        clearTimeout(this.tipsClear);
        this.tipsClear = setTimeout(function () {
            $('.tips').hide();
        }, 2000);
    }
};
var talk = new talkObj();
$.ajax({
    url: talk.get('wxInitUrl'),
    type: 'GET',
    dataType: 'json',
    data: {
        url: location.href
    },
    success: function (res) {
        if (res.errorCode === 0) {
            wx.config(res.result);
        }
    }
});

function setShare() {

    var link = '';
    if (arguments[0]) {

        var _str = '_help_' + arguments[0];
        link = talk.get('shareUrl', _str);
    }else{
        link = talk.get('shareUrl', '');
    }
    var title = arguments[1] ? arguments[1] : talk.get('shareTitle');
    var imgUrl = arguments[2] ? arguments[2] : talk.get('shareImg');
    var desc = arguments[3] ? arguments[3] : talk.get('shareDesc');
    var obj = {
        title: title,
        link: link,
        imgUrl: imgUrl,
        desc: desc,
        success: function () {
            _paq.push(['trackEvent', '7xi', 'share', 'success']);
            talk.tips('shareOk');
        },
        cancel: function () {
            talk.tips('shareClose');
        }
    };
    wx.ready(function () {
        wx.onMenuShareTimeline(obj);
        wx.onMenuShareAppMessage(obj);
    });
}
//setShare();

function api(type, data, callback) {
    this.url = {
        user: {
            url: "examples/user.json",
            method: "GET",
            dataType: 'json',
            data: data
        },
        reward: {
            url: "examples/reward.json",
            method: "GET",
            dataType: 'json',
            data: data
        },
        reward_post: {
            url: "examples/reward.post.json",
            method: "GET", dataType: 'json',
            data: data
        },
        list:{
            url: "examples/reward.list.json",
            method: "GET", dataType: 'json',
            data: data
        },
        verify:{
            url: "examples/user.verify.json",
            method: "GET", dataType: 'json',
            data: data
        },
        register:{
            url: "examples/user.register.json",
            method: "GET", dataType: 'json',
            data: data
        },
        user_game_log:{
            url: "examples/user.log.json",
            method: "GET", dataType: 'json',
            data: data
        },
        reCaptcha:{
            url: "examples/user.captcha.json",
            method: "GET", dataType: 'json',
            data: data
        }
    };

    $.ajax(this.url[type]).done(callback).fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
}
/**
 * Created by linmingxiong on 15/8/2.
 */
gigoloKnit.boot = {
    preload: function () {
        this.load.image('preloaderBarEye', './res/bg-eye.png');
        this.load.image('preloaderBarBg', './res/loading-kuang.png');
        this.load.image('preloaderBarLine', './res/loading-jiazai.png');
        this.load.image('loadingEnd', './res/loading-end.png');
    },
    create: function (game) {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //this.scale.pageAlignHorizontally = true;
        //this.scale.pageAlignVertically = true;
        this.state.start('preloader');
        if(!isIos){
            this.time.desiredFps = 40;
        }
    }
};
/**
 * Created by linmingxiong on 15/8/2.
 */

gigoloKnit.gameNozzle = function (game) {
    gigoloKnit.score = 0;
    gigoloKnit.time = 18;
    gigoloKnit.musicState = true;
    gigoloKnit.scoreText = null;
    gigoloKnit.timeText = null;
    gigoloKnit.musicBtn = null;
    gigoloKnit.soundTmd = null;
    gigoloKnit.soundYy = null;

    this.font = {
        fontSize: '60px',
        fill: "#000"
    };

    this.init = function () {
        gigoloKnit.score = 0;
        gigoloKnit.time = 18;

        this.add.image(0, this.world.height - 457, 'img', 'bg-fangzi.png');
        this.add.image(this.world.centerX, this.world.height - 170, 'img', 'label-score.png').anchor.setTo(0.5, 0);
        this.add.image(65, 90, 'img', 'label-time.png');

        //声音开关
        gigoloKnit.musicBtn = this.add.sprite(this.world.width - 132 - 80, 50, 'img', 'music-on.png');
        gigoloKnit.musicBtn.inputEnabled = true;
        gigoloKnit.musicBtn.events.onInputDown.add(this.musicSwitch, this);
        gigoloKnit.soundTmd = this.add.audio('sound-ymd');
        gigoloKnit.soundYy = this.add.audio('sound-yy');

        //分数,时间
        gigoloKnit.scoreText = this.add.text(600, this.world.height - 130, gigoloKnit.score, this.font);
        gigoloKnit.timeText = this.add.text(255, 84, gigoloKnit.time, this.font);
    };
    this.musicSwitch = function (musicBtn) {
        gigoloKnit.musicState = !gigoloKnit.musicState;
        if (gigoloKnit.musicState) {
            gigoloKnit.musicBtn.loadTexture('img', 'music-on.png');
        } else {
            gigoloKnit.musicBtn.loadTexture('img', 'music-off.png');
        }
    };
    this.setScore = function () {

    };
};
/**
 * Created by linmingxiong on 15/8/2.
 */

gigoloKnit.game = function (game) {
    gigoloKnit.gameNozzle.call(this);

    this._loversGroup = null;
    this._marksGroup = null;
    this._spawnLoversTimer = 0;
    this._spawnLoversSpeed = 1000;
    this._spawnLoversSpeedYAndroid = 20;

    //line
    this.slashes = null;
    this.points = [];
};

gigoloKnit.game.prototype = {
    create: function (game) {
        this._spawnLoversTimer = 0;
        this._spawnLoversSpeed = 1000;
        this._spawnLoversSpeedYAndroid = 20;

        if (isIos) {
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.physics.arcade.gravity.y = 1500;
        }
        // create new group for lovers
        this._loversGroup = this.add.group();
        this._marksGroup = this.add.group();
        // spawn first lovers
        this.spawnLovers();
        //gigoloKnit.slashes = this.add.graphics(0, 0);
        this.time.events.loop(1000, this.updateTime, this);

        //this.slashes = game.add.graphics(0, 0);
    },

    update: function (game) {
        // update timer every frame
        this._spawnLoversTimer += this.time.elapsed;
        ////if spawn timer reach one second (1000 miliseconds)
        if (this._spawnLoversTimer > this._spawnLoversSpeed && this._loversGroup.length < 3) {
            // reset it
            this._spawnLoversTimer = 0;
            this.spawnLovers();
            this._spawnLoversSpeed -= 30;
            this.physics.arcade.gravity.y += 180;
        }


        // loop through all lovers on the screen
        this._loversGroup.forEach(function (lovers) {

            if (!isIos) {
                if (lovers.state.kill) {
                    this._loversGroup.remove(lovers);
                    lovers.kill();
                    return false;
                }
                lovers.y += this._spawnLoversSpeedYAndroid;
            }


            if (lovers.y > gigoloKnit.GAME_HEIGHT || lovers.x > gigoloKnit.GAME_WIDTH || lovers.x < 0) {
                if (lovers.state.lovers && !lovers.state.kill) {
                    if (gigoloKnit.score > 0) {
                        gigoloKnit.score--;
                        this.setScoreText();
                        lovers.state.kill = true;
                    }
                }
                this._loversGroup.remove(lovers);
                lovers.kill();
            }

            if (isIos) {
                //lovers.y += lovers.state.speed;
                if (lovers.state.kill) {
                    lovers.state.countdownToDeath--;

                    if (lovers.state.countdownToDeath <= 0) {
                        if (lovers.direction === 0) {
                            lovers.angle -= 15;
                            lovers.x -= 10;
                        } else {
                            lovers.angle += 15;
                            lovers.x += 10;
                        }
                    } else {
                        if (lovers.direction === 0) {
                            lovers.angle -= 2;
                            lovers.x -= 7;
                        } else {
                            lovers.angle += 2;
                            lovers.x += 7;
                        }
                    }
                }
            }
        }, this);

        // loop through all lovers on the screen
        if (this._marksGroup) {
            this._marksGroup.forEach(function (marks) {
                if (marks.alpha <= 0.1) {
                    this._marksGroup.remove(marks);
                    marks.kill();
                } else {
                    marks.alpha -= 0.03;
                    marks.y -= 10;
                }
            }, this);
        }

    },

    updateTime: function () {
        if (gigoloKnit.time <= 0) {
            this.gameOver();
        } else {
            gigoloKnit.time--;
            gigoloKnit.timeText.setText(gigoloKnit.time);
        }
    },
    gameOver: function () {
        this.pausedText = this.add.text(this.world.centerX, this.world.centerY - 300, "游戏结束", {
            font: "90px Arial",
            fill: "#68d1ef",
            strokeThickness: 5,
            align: "center"
        }).anchor.setTo(0.5, 0.5);
        // pause the game
        this.game.paused = true;

        if (gigoloKnit.score < 0)
            gigoloKnit.score = 0;
        user.money = gigoloKnit.score;

        var obj = this;
        setTimeout(function () {
            obj.game.paused = false;
            obj.state.start('scoreState');
        }, 1000);
    },

    spawnLovers: function (game) {
        this._spawnLoversSpeedYAndroid += 1;
        // calculate drop position (from 0 to game width) on the x axis
        var _dropPos = Math.floor(Math.random() * gigoloKnit.GAME_WIDTH);
        if (_dropPos > gigoloKnit.GAME_WIDTH - 400)
            _dropPos = gigoloKnit.GAME_WIDTH - 400;
        else if (_dropPos < 200) {
            _dropPos = 200;
        }

        var _love_index = 0;
        var _m = Math.floor(Math.random() * 10);
        if (_m >= 5) {
            _love_index = [0, 1, 3][Math.floor(Math.random() * 3)];
        } else {
            _love_index = [2, 4][Math.floor(Math.random() * 2)];
        }
        //var _love_index = Math.floor(Math.random() * 5);
        if (gigoloKnit.score > 11) {
            _love_index = [2, 4][Math.floor(Math.random() * 2)];
        }

        //情侣(同性)，性别
        var _loveTwain = talk.loves[_love_index];
        var _state = {
            kill: false,
            lovers: _loveTwain.lovers,
            countdownToDeath: 20
            //speed:Math.ceil(Math.random() * 20)
        };

        var _y = -200;
        var _x = _dropPos;

        for (var i = 0; i < 2; i++) {
            var _love = _loveTwain.role[i];
            var lovers = this.add.sprite(_x + _love.x, _y + _love.y, 'img', _love.key);
            // 存在状态
            lovers.state = _state;
            lovers.direction = _love.direction;

            if (isIos) {
                // enable lovers body for physic engine
                this.physics.enable(lovers, Phaser.Physics.ARCADE);
            }

            // enable lovers to be clicked/tapped
            lovers.inputEnabled = true;
            // add event listener to click/tap
            lovers.events.onInputDown.add(this.clickLovers, this);
            lovers.anchor.setTo(0.5, 0.5);
            // add lovers to the group
            this._loversGroup.add(lovers);
        }
    },
    clickLovers: function (lovers) {
        if (lovers.state.kill)
            return false;
        lovers.state.kill = true;

        var _mark = 'label-plus.png';
        if (lovers.state.lovers) {
            gigoloKnit.score += 1;
        } else {
            if (gigoloKnit.score > 0) {
                gigoloKnit.score -= 1;
            }
            _mark = 'label-dim.png';
        }

        var mark = this.add.sprite(lovers.x - 100, lovers.y - 100, 'img', _mark);
        mark.anchor.setTo(0.5, 0.5);
        mark.alpha = 1;
        this._marksGroup.add(mark);

        this.setScoreText();
        this.playAudio(lovers.state.lovers);
    },
    setScoreText: function () {
        gigoloKnit.scoreText.setText(gigoloKnit.score);
    },
    playAudio: function (lovers) {
        if (gigoloKnit.musicState) {
            if (lovers) {
                gigoloKnit.soundTmd.play();
            } else {
                gigoloKnit.soundYy.play();
            }

        }
    }
};

/**
 * Created by linmingxiong on 15/8/2.
 */
gigoloKnit.preloader = function (game) {
    this.progress = 0;
};

gigoloKnit.preloader.prototype = {
    preload: function (game) {

        game.load.onFileComplete.add(function (progress, key) {
            if (progress === 100) {
                this.startMenu();
            }
        }, this);

        game.stage.backgroundColor = gigoloKnit.BACKGROUND;
        this.preloaderBarEye = this.add.sprite(this.world.centerX, this.world.centerY - 300, 'preloaderBarEye');
        this.preloaderBarEye.anchor.setTo(0.5, 0.5);

        this.preloaderBarBg = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBarBg');
        this.preloaderBarBg.anchor.setTo(0.5, 0);

        this.preloaderBarLine = this.add.sprite(this.world.centerX - 162, this.world.centerY, 'preloaderBarLine');
        game.load.setPreloadSprite(this.preloaderBarLine);
        var ses = this.load.atlas('img', 'res/images.png', 'res/images.json');

        //音频
        this.load.audio('sound-ymd', './res/ymd.mp3');
        this.load.audio('sound-yy', './res/yy.mp3');
        //this.load.audio('sound-lwbsn', './res/lwbsn.mp3');
        this.load.audio('sound-321readygo', './res/321readygo.mp3');

        this.loadUserInfo();
    },
    create: function () {
        this.preloaderBarBg.kill();
        this.preloaderBarLine.kill();
        this.add.image(this.world.centerX, this.world.centerY, 'loadingEnd').anchor.setTo(0.5, 0.5);
    },
    startMenu: function () {

        if (this.load.progress == 100 && this.progress == 100) {
            //var obj = this;
            //延时显示
            //setTimeout(function () {
            this.state.start('readyGo');
            //}, 1000);
        }
    },
    /***
     * 接口
     * user
     */
    loadUserInfo: function () {
        var obj = this;
        //判断是否有好友ID
        var friend_uid = this.game.net.getQueryString('friend_uid');
        if (typeof friend_uid !== 'object') {
            user.friend_uid = friend_uid;
            user.is_help = 1;
        } else {
            user.is_help = 0;
        }
        //接口-加载用户
        api('user', user, function (res) {
            if (res.errorCode === 0) {
                user = $.extend(user, res.data);
                setShare(user.uid);
                if (user.is_help) {
                    obj.load.image('picture-friend', user.friend_picture);
                    obj.load.image('picture', user.picture);

                    if (!user.count_help) {
                        talk.tips('cantPlayHelp');
                        window.location.href = talk.url.home;
                    }
                } else {
                    if (!user.count_play) {
                        talk.tips('cantPlay');
                        window.location.href = talk.url.home;
                    }
                }
            } else{
                alert(res.errorMessage);
            }
            obj.progress = 100;
            obj.startMenu();
        });

        //接口-加载奖励信息
        //api('reward',user,function(res){
        //    if (res.errorCode === 0) {
        //        user = $.extend(user, res.data);
        //    } else{
        //        alert(res.errorMessage);
        //    }
        //    user.progress = user.progress ? 100 : 50;
        //    obj.startMenu();
        //});
    }
};
/**
 * Created by linmingxiong on 15/8/2.
 */
gigoloKnit.readyGo = function (game) {
    this._readyGoTime = 3;
    this._countdown = null;
};
gigoloKnit.readyGo.prototype = {
    create: function (game) {
        //招待所
        this.add.image(0, this.world.height - 457, 'img', 'bg-fangzi.png');
        //分数
        this.add.image(this.world.centerX, this.world.height - 170, 'img', 'label-score.png').anchor.setTo(0.5, 0);
        //时间
        this.add.image(65, 90, 'img', 'label-time.png');
        //音乐开头
        gigoloKnit.musicBtn = this.add.sprite(this.world.width - 132 - 80, 50, 'img', 'music-on.png');

        //蒙层
        this.graphics = this.add.graphics(0, 0);
        this.graphics.beginFill(0x000000);
        this.graphics.alpha = 0.9;
        this.graphics.drawRect(0, 0, gigoloKnit.GAME_WIDTH, gigoloKnit.GAME_HEIGHT);

        //引导文字,情侣
        this.plus = this.add.sprite(this.world.centerX + 0, this.world.centerY - 650, 'img', 'label-plus.png');
        this.guide1 = this.add.sprite(this.world.centerX, this.world.centerY - 390, 'img', 'label-guide-1.png');
        this.guide1.angle = -20;

        //引导文字,基友
        this.dim = this.add.sprite(this.world.centerX - 80, this.world.centerY + 200, 'img', 'label-dim.png');
        this.guide2 = this.add.sprite(this.world.centerX - 450, this.world.centerY + 250, 'img', 'label-guide-2.png');
        this.guide2.angle = 20;

        this._loversGroup = this.add.group();

        //第一对情侣
        this._x = this.world.centerX - 250;
        this._y = this.world.centerY - 500;
        this.spawnLovers(3);

        this._x = this.world.centerX + 250;
        this._y = this.world.centerY + 400;
        this.spawnLovers(2);

        //手形
        this.hand = this.add.sprite(this.world.centerX - 160, this.world.centerY - 360, 'img', 'bg-hand.png');
        this.hand.anchor.setTo(0.5, 0.5);
        this.hand.angle = 10;

        //统计
        _paq.push(['trackEvent', '7xi', 'game', 'play']);
    },
    loopStart: function () {
        this._readyGoTime = 3;
        this._countdown = this.add.sprite(this.world.centerX, this.world.centerY - 300, 'img', this._readyGoTime + '.png');
        this._countdown.anchor.setTo(0.5, 0);
        var _loop = this.time.events.loop(700, this.updateCounter, this);
        gigoloKnit.soundReadygo = this.add.audio('sound-321readygo');
        gigoloKnit.soundReadygo.play();
    },
    update: function (game) {
        this._loversGroup.forEach(function (lovers) {
            if (lovers.y > gigoloKnit.GAME_HEIGHT || lovers.x > gigoloKnit.GAME_WIDTH || lovers.x < 0) {
                this._loversGroup.removeAll();
            }

            if (lovers.state.kill) {
                if (lovers.direction === 0) {
                    lovers.angle -= 15;
                    lovers.x -= 10;
                    lovers.y += 10;
                }
                if (lovers.direction === 1) {
                    lovers.angle += 15;
                    lovers.x += 10;
                    lovers.y += 10;
                }

                var _score_e = this.dim;
                if (lovers.state.lovers) {
                    _score_e = this.plus;
                }
                if (_score_e.alpha <= 0.1) {
                    _score_e.kill();
                } else {
                    _score_e.y -= 5;
                    _score_e.alpha -= 0.03;
                }
            }
            if (!this._loversGroup.length) {
                this.graphics.kill();

                this.guide1.kill();
                this.guide2.kill();

                this.plus.kill();
                this.dim.kill();

                this.loopStart();
            }
        }, this);

        if (this.hand.visible) {
            if (this.hand.x <= 380) {
                this.cc = 10;
            } else if (this.hand.x >= 500) {
                this.cc = -10;
            }
            this.hand.x += this.cc;
            this.hand.y += this.cc;
        }
    },
    spawnLovers: function (index) {
        var _loveTwain = talk.loves[index];

        var _state = {
            kill: false,
            lovers: _loveTwain.lovers
        };

        for (var i = 0; i < 2; i++) {
            var _love = _loveTwain.role[i];
            var lovers = this.add.sprite(this._x + _love.x - 20, this._y + _love.y - 20, 'img', _love.key);
            lovers.inputEnabled = true;
            lovers.events.onInputDown.add(this.clickLovers, this);
            lovers.anchor.setTo(0.5, 0.5);
            lovers.direction = _love.direction;
            lovers.state = _state;

            this._loversGroup.add(lovers);
        }
    },
    clickLovers: function (lovers) {
        lovers.state.kill = true;
        this.hand.kill();
    },

    updateCounter: function () {
        this._readyGoTime--;
        if (this._readyGoTime > 0) {
            this._countdown.loadTexture('img', this._readyGoTime + '.png');
        } else {
            this.state.start('game');
        }
    }
};
/**
 * Created by linmingxiong on 15/8/2.
 */
gigoloKnit.ruleGame = function (game) {
    this.font = {
        font: "45px Arial",
        fill: "#000",
        align: "left",
        boundsAlignH: "center",
        boundsAlignV: "middle"
    };
};
gigoloKnit.ruleGame.prototype = {
    create: function (game) {
        this.add.image(this.world.centerX - 10, 620, 'img', 'label-game-of-rule.png').anchor.setTo(0.5, 0);
        this.add.image(this.world.centerX - 10, 150, 'img', 'label-game-of-time.png').anchor.setTo(0.5, 0);
        this.add.button(gigoloKnit.GAME_WIDTH - 120, 16, 'img', this.close, this, 'cha.png', 'cha.png');
        this.add.text(150, 380, talk.get('campaignTime'), this.font);
        this.add.text(150, 850, talk.get('ruleGame'), this.font);
    },
    close: function () {
        this.state.start('menu');
    }
};
gigoloKnit.scoreState = function (game) {
    this.font = {
        font: "85px Arial",
        fill: "#000",
        boundsAlignH: "center",
        boundsAlignV: "middle"
    };
};

gigoloKnit.scoreState.prototype = {
    create: function (game) {

        this.add.image(this.world.centerX, 250, 'img', 'bg-eye.png').anchor.setTo(0.5, 0.5);

        if (user.is_help) {
            this.add.image(this.world.centerX, 400, 'img', 'label-tag.png').anchor.setTo(0.5, 0.5);
            this.add.image(this.world.centerX, 590, 'img', 'label-think.png').anchor.setTo(0.5, 0.5);

            this.add.image(this.world.centerX, 860, 'img', 'label-help-success.png').anchor.setTo(0.5, 0.5);
            this.add.image(this.world.centerX, 1020, 'img', 'label-m.png').anchor.setTo(0.5, 0.5);

            //this.add.image(this.world.centerX-300, 850, 'img', 'touxiang.png').anchor.setTo(0.5, 0.5);
            //this.add.image(this.world.centerX+300, 850, 'img', 'touxiang.png').anchor.setTo(0.5, 0.5);
            //
            this.picture = this.add.image(this.world.centerX - 300, 850, 'picture');
            this.picture.anchor.setTo(0.5, 0.5);
            this.picture.width = 150;
            this.picture.height = 150;
            //
            this.friendPicture = this.add.image(this.world.centerX + 300, 850, 'picture-friend');
            this.friendPicture.anchor.setTo(0.5, 0.5);
            this.friendPicture.width = 150;
            this.friendPicture.height = 150;


            this.add.text(this.world.centerX + 33, 1023, gigoloKnit.score, this.font).anchor.setTo(0.5, 0.5);

            this.add.button(this.world.centerX, this.world.centerY + 450, 'img', this.againByMe, this, 'btn-by-me.png', 'btn-by-me.png').anchor.setTo(0.5, 0.5);

            this.submitUserLog();
        } else {
            var _ranScoreLabel = Math.floor(Math.random() * 5);
            this.add.image(this.world.centerX, 400, 'img', talk.get('score')[_ranScoreLabel]).anchor.setTo(0.5, 0.5);
            this.add.image(this.world.centerX, 650, 'img', 'label-money.png').anchor.setTo(0.5, 0.5);
            this.add.text(this.world.centerX + 185, 655, gigoloKnit.score, this.font).anchor.setTo(0.5, 0.5);
            this.add.button(50, 1000, 'img', this.again, this, 'btn-again.png', 'btn-again.png');
            this.add.button(gigoloKnit.GAME_WIDTH - 500, 1000, 'img', this.moneyState, this, 'btn-money.png', 'btn-money.png');
            this.add.text(60,1250, talk.get('taskGame'),  {
                font: "40px Arial",
                fill: "#000",
                boundsAlignH: "center",
                boundsAlignV: "middle"
            });
        }
    },
    moneyState: function () {
        api('user_game_log', user, function (res) {
            //请求状态
            if (res.errorCode === 0) {
                window.location.href = talk.url.register;
            } else {
                alert(res.errorMessage);
            }
        });
    },
    /***
     * 接口 - 提交用户游戏信息
     */
    submitUserLog: function () {
        api('user_game_log', user, function (res) {
            //请求状态
            if (res.errorCode === 0) {

            } else {
                alert(res.errorMessage);
            }
        });
    },
    //seeShare: function () {
    //    this.graphics = this.add.graphics(0, 0);
    //    this.graphics.beginFill(0x000000);
    //    this.graphics.alpha = 0.7;
    //    this.graphics.drawRect(0, 0, gigoloKnit.GAME_WIDTH, gigoloKnit.GAME_HEIGHT);
    //    this.role = this.add.sprite(gigoloKnit.GAME_WIDTH - 700, 10, 'img', 'label-share.png');
    //    this.input.onDown.add(this.closeMouse, this);
    //},
    again: function () {
        this.state.start('readyGo');
    },
    againByMe: function () {
        //user.is_help = 0;
        window.location.href = talk.url.home;
        //this.state.start('readyGo');
    },
    closeMouse: function () {
        this.graphics.kill();
        this.role.kill();
    }
};
var homeHelpObj = function () {
    this.setText = function () {
        $('.friend-play-count').text(user.count_help);
        $('.friend-picture').attr('src', user.friend_picture);
        $('.friend-username').text(user.friend_username);
        if (!user.count_help) {
            $('.btn-by-me').addClass('not-play');
        }
    };

    this.bind = function () {
        $('.btn-share').click(this.showShare);
        $('#shareState').click(this.hideShare);

        $('.btn-rule').click(this.showRole);
        $('.btn-close').click(this.hideRole);

        $('.btn-start').click(this.playGameByHelp);
        $('.btn-by-me').click(this.playGame);
    };
    this.playGameByHelp = function () {
        if (user.count_help) {
            window.location.href = talk.url.game + '?friend_uid=' + user.friend_uid;
        } else {
            talk.tips('cantPlayHelp');
        }
    };
    this.playGame = function () {
        window.location.href = talk.url.home;
        //if (user.count_play) {
        //    window.location.href = talk.url.home;
        //} else {
        //    talk.tips('cantPlay');
        //}
    };
    this.update = function () {
        this.setText();
        this.bind();
    };
};
var homeSelfObj = function () {
    this.setText = function () {
    };
    this.bind = function () {
        $('.btn-share').click(this.showShare);
        $('#shareState').click(this.hideShare);

        $('.btn-rule').click(this.showRole);
        $('.btn-close').click(this.hideRole);

        $('.btn-start').click(this.playGame);
    };
    this.showShare = function () {
        _paq.push(['trackEvent', '7xi', 'share', 'start']);
        $('#shareState').show();
    };
    this.hideShare = function () {
        $('#shareState').hide();
    };
    this.showRole = function () {
        $('#roleState').show();
    };
    this.hideRole = function () {
        $('#roleState').hide();
    };
    this.playGame = function () {
        if (user.count_play) {
            window.location.href = talk.url.game;
        } else {
            talk.tips('cantPlay');
        }
    };
    this.update = function () {
        this.setText();
        this.bind();
        rewardsList.init();
    };
};
var homeObj = function () {
};
homeObj.prototype = {
    init: function () {
        user.is_help = 0;
        //判断是否有好友ID
        var friend_uid = getQueryString('friend_uid');
        if (friend_uid) {
            user.friend_uid = friend_uid;
            user.is_help = 1;
        }
        if (user.is_help) {
            homeHelpObj.call(this);
            $('.by-friend').show();
        } else {
            homeSelfObj.call(this);
            $('.by-me').show();
        }
        this.loadRewardInfo();
    },

    /***
     * 接口
     */
    loadRewardInfo: function () {
        var obj = this;
        //接口-加载奖励信息
        api('user', user, function (res) {
            if (res.errorCode === 0) {
                user = $.extend(user, res.data);
                home.update();
                //setting share
                setShare(user.uid);
            } else {
                alert(res.errorMessage);
            }
        });
    }
};
var home = new homeObj();
function registerObj() {
    this.reSendCountDown = null;
    //重新请求验证码
    this.isReCaptcha = false;
    //同意条款
    this.clause = true;
    this.isVerifyIng = 0;
    this.isRegisterIng = 0;
}
registerObj.prototype = {
    init: function () {
        this.bind();

        user.type = 1;
        var _cashType = getQueryString('cashType');
        if (_cashType) {
            if (_cashType == "2")
                user.type = 2;
        }

        api('user', {is_help: 0}, function (res) {
            if (res.errorCode === 0) {
                user = $.extend(user, res.data);
                setShare(user.uid);
            } else {
                alert(res.errorMessage);
            }
        });
    },
    bind: function () {
        $('.input-reset input').on('input', function () {
            $('.input-captcha').removeClass('error');
            if ($(this).val()) {
                $(this).next('.input-reset-btn').show();
            } else {
                $(this).next('.input-reset-btn').hide();
            }
        });

        $('.input-reset input').on('focus', function () {
            if ($(this).val()) {
                $(this).next('.input-reset-btn').show();
            } else {
                $(this).next('.input-reset-btn').hide();
            }
        }).on('blur', function () {
            var obj = this;
            setTimeout(function () {
                $(obj).next('.input-reset-btn').hide();
            }, 200);
        });
        //删除输入框文本
        $('.input-reset-btn').on('click', function () {
            $(this).prev('input').val('');
            $(this).hide();
            $('.input-captcha').removeClass('error');
        });

        $('.clause').on('click', function () {
            register.clause = !register.clause;
            $(this).toggleClass('not');
        });

        //重新发送验证码
        $('.btn-reset').on('click', this.reCaptcha);


        $('#goRegisterState').click(function () {
            if(register.isVerifyIng)
                return false;

            var phoneNumber = $('#phoneNumber').val();
            var captcha = $('#captchaImg').val();
            if (!phoneNumber) {
                talk.tips('regPhoneNull');
                return false;
            }
            if (!captcha) {
                talk.tips('regCaptchaNull');
                return false;
            }
            var p1 = /1[3-8]+\d{9}/;
            if (!p1.test(phoneNumber)) {
                talk.tips('regPhoneError');
                return false;
            }
            user.phone = phoneNumber;
            user.captcha = captcha;


            register.userVerify();
        });

        $('#goRegisterSuccessState').click(function () {
            if(register.isRegisterIng)
                return false;
            var password = $('#password').val();
            var captcha = $('#captcha').val();
            if (!captcha) {
                talk.tips('regPhoneCaptchaNull');
                return false;
            }
            if (!password) {
                talk.tips('regPwNull');
                return false;
            }
            if (password.length < 6) {
                talk.tips('regPwMinSize');
                return false;
            }

            if (!register.clause) {
                talk.tips('regClause');
                return false;
            }

            user.password = password;
            user.captcha = captcha;
            register.userRegister();
        });


        $('#loadCaptcha').click(register.loadCaptcha);
        $('.download-share').click(this.showShare);
        $('#shareState').click(this.hideShare);
    },

    showShare: function () {
        _paq.push(['trackEvent', '7xi', 'share', 'start']);
        $('#shareState').show();
    },
    hideShare: function () {
        $('#shareState').hide();
    },

    loadCaptcha: function () {
        $('#loadCaptcha img').attr('src', 'https://passport.souyidai.com/authimage.jpg?' + Math.random());
    },

    /**
     * 接口 - 验证用户
     */
    userVerify: function () {
        register.isVerifyIng = 1;
        api('verify', user, function (res) {
            register.isVerifyIng = 0;
            //请求状态
            if (res.errorCode === 0) {
                //新用户
                if (res.data.is_bind === 0) {
                    register.toStateRegister(res);
                    //老用户
                } else if (res.data.is_bind === 1) {
                    register.isVerifyIng = 1;
                    register.toStateOldSuccess();
                    //验证码不正确
                } else if (res.data.is_bind === 2) {
                    $('.input-captcha').addClass('error');
                    talk.tips('regCaptchaError');
                }
            } else {
                alert(res.errorMessage);
            }
        });
    },
    /**
     * 接口 - 用户注册
     */
    userRegister: function () {
        register.isRegisterIng = 1;
        api('register', user, function (res) {
            register.isRegisterIng = 0;
            //请求状态
            if (res.errorCode === 0) {
                register.isRegisterIng = 1;
                register.toStateRegisterSuccess();
            } else {
                talk.tips('regPhoneCaptchaError');
                //alert(res.errorMessage);
            }
        });
    },
    toStateRegister: function (res) {
        $('#phoneState').hide();
        $('#registerState').show();
        //
        register.reSendSms($('.btn-reset'), res.data.needWaitTime || 60);
    },
    toStateRegisterSuccess: function () {
        //兑换奖励
        api('reward_post', user, function (res) {
            register.isRegisterIng = 0;
            if (res.errorCode === 0) {
                $('#registerState').hide();
                $('#registerSuccessState').show();
            } else {
                alert(res.errorMessage);
            }
        });
    },
    toStateOldSuccess: function () {
        $('#phone').text(user.phone);
        //兑换奖励
        api('reward_post', user, function (res) {
            register.isVerifyIng = 0;
            if (res.errorCode === 0) {
                $('#phoneState').hide();
                $('#moneySuccessState').show();
            } else {
                alert(res.errorMessage);
            }
        });
    },
    reSendSms: function (el, times) {
        register.disBtn();
        clearInterval(register.reSendCountDown);
        register.reSendCountDown = setInterval(function () {
            el.text('重新获取(' + times + ')');
            times--;
            if (times === 0) {
                clearInterval(register.reSendCountDown);
                el.text('重新发送');
                register.enBtn();
            }
        }, 1000);
    },
    disBtn: function (el) {
        this.isReCaptcha = false;
    },
    enBtn: function (el) {
        this.isReCaptcha = true;
    },
    reCaptcha: function () {
        if (!register.isReCaptcha)
            return false;
        api('reCaptcha', user, function (res) {
            if (res.errorCode === 0) {
                register.reSendSms($('.btn-reset'), res.data.needWaitTime || 60);
            } else {
                //register.reSendSms($('.btn-reset'), 60);
                alert(res.errorMessage);
            }
        });
    }
};

var register = new registerObj();
function RewardsObj() {
    this.maxMoney = 88;
    this.cashType = 1;
    this.cashMoney = 0;
}
RewardsObj.prototype = {
    init: function () {
        this.loadRewardInfo();
    },
    /***
     * 接口
     */
    loadRewardInfo: function () {
        var obj = this;
        //接口-加载奖励信息
        api('reward', user, function (res) {
            if (res.errorCode === 0) {
                user = $.extend(user, res.data);
                obj.setText();
                obj.bind();
            } else {
                alert(res.errorMessage);
            }
        });
        api('user', {is_help: 0}, function (res) {
            if (res.errorCode === 0) {
                user = $.extend(user, res.data);
                setShare(user.uid);
            } else {
                alert(res.errorMessage);
            }
        });
    },

    setText: function () {
        $('#moneyUsable').text(user.money_usable);
        $('#moneyUse').text(user.money_use);
        $('#moneySelf').text(user.money_self);
        $('#moneyFriend').text(user.money_friend);

        if (user.is_cash_self === 1) {
            $('#convertSelf').removeClass('use');
        } else {
            $('#convertSelf').addClass('use');
        }
        if (user.is_cash_friend === 1) {
            $('#convertFriend').removeClass('use');
        } else {
            $('#convertFriend').addClass('use');
        }
    },
    bind: function () {
        $('#convertSelf').on('click', this.cashMoneySelf);
        $('#convertFriend').on('click', this.cashMoneyFriend);
        //关闭对话框
        $('#cashFriendModal .modal-close').on('click', this.closeModal);
        //确认兑换
        $('#cashFriendModal .modal-ok').on('click', this.postReward);
    },
    closeModal: function () {
        $('#cashFriendModal').hide();
    },
    openModal: function (txt) {
        $('#cashFriendModal .modal-body').text(txt);
        $('#cashFriendModal').show();
    },
    /**
     * 自力更生兑换
     */
    cashMoneySelf: function () {
        if (!user.money_self) {
            talk.tips('notMoneyYou');
            return false;
        }

        rewards.cashType = 1;
        if (user.is_cash_self === 1) {
            rewards.cashMoney = user.money_self;
            if (user.money_self > user.money_usable) {
                rewards.cashMoney = user.money_usable;
                rewards.openModal(talk.get('maxMoney', user.money_usable));
            } else {
                rewards.postReward();
            }
        } else {
            //talk.tips('toDayUse');
        }
    },
    /**
     * 好友助力兑换
     */
    cashMoneyFriend: function () {
        if (!user.money_friend) {
            talk.tips('notFriendHelpYou');
            return false;
        }
        rewards.cashType = 2;
        if (user.is_cash_friend === 1) {
            rewards.cashMoney = user.money_friend;
            if (user.money_friend > user.money_usable) {
                rewards.cashMoney = user.money_usable;
                rewards.openModal(talk.get('maxMoney', user.money_usable));
            } else {
                rewards.postReward();
            }
        } else {
            //talk.tips('toDayUse');
        }
    },
    /**
     * 接口-兑换金额
     */
    postReward: function () {
        window.location.href = talk.url.register + '?cashType=' + rewards.cashType;
        return false;
        //if(!user.is_bind) {
        //    window.location.href = talk.url.register + '?cashType=' + rewards.cashType;
        //}
        //api('reward_post', {
        //    type: rewards.cashType,
        //    money: rewards.cashMoney
        //}, function (res) {
        //    //请求状态
        //    if (res.errorCode === 0) {
        //        rewards.closeModal();
        //        talk.tips('cashOk');
        //        rewards.resetMoney();
        //    } else {
        //        alert(res.errorMessage);
        //    }
        //});
    },

    resetMoney: function () {
        if (this.cashType === 1) {
            user.is_cash_self = 0;
        } else if (this.cashType === 2) {
            user.is_cash_friend = 0;
        }

        user.money_usable -= this.cashMoney;
        user.money_use += this.cashMoney;

        //if (user.money_usable === 0) {
        //    user.is_cash_self = 0;
        //    user.is_cash_friend = 0;
        //}

        this.setText();
    }
};
var rewards = new RewardsObj();



//列表
function RewardsListObj() {
    this.lists = [];
}
RewardsListObj.prototype = {
    init: function () {
        rewardsList.getUser();
    },
    setText: function () {
        $('.today-data').text(this.getTodayDate());
        $('.today-money').text(this.getTotalMoney());

    },
    /**
     * 接口 - 用户列表
     */
    getUser: function () {
        var _p = {is_help: 1};
        if ($('#homeState').length) {
            _p.is_help = 0;
        }
        api('list', _p, function (res) {
            //请求状态
            if (res.errorCode === 0) {
                rewardsList.lists = res.data.list;
                rewardsList.list();
                rewardsList.setText();
                $('#todayMoney').text(res.data.score);
            } else {
                alert(res.errorMessage);
            }
        });
    },
    __list: function () {
        var html = '';
        if (user.money_self) {
            html += rewardsList.getTpl({
                picture: user.picture,
                username: user.username,
                money: user.money_self,
                is_self: 1
            });
        }

        if (!user.money_self && !this.lists.length) {
            html += '<p class="list-null">您今日尚未获得奖励</p>';
        } else if (user.money_self && !this.lists.length) {
            html += '<p class="list-null">艰苦奋斗自力更生，没朋友也能活下去</p>';
        } else {
            $.each(this.lists, function (i, item) {
                html += rewardsList.getTpl(item);
            });
        }
        $('.user-list').append(html);
    },
    list: function () {
        var html = '';
        if (!this.lists.length) {
            html += '<p class="list-null">您今日尚未获得奖励</p>';
        } else if (this.lists.length === 1 && this.lists[0].is_self === 1) {
            html += rewardsList.getTpl(this.lists[0]);
            html += '<p class="list-null">艰苦奋斗自力更生，没朋友也能活下去</p>';
        } else {
            $.each(this.lists, function (i, item) {
                html += rewardsList.getTpl(item);
            });
        }

        $('.user-list').append(html);
    },
    getTpl: function (data) {
        return '<li class="user-item">' +
            '<div class="picture pull-left">' +
            '<img src="' + (data.picture ? data.picture : './res/share.png') + '">' +
            '</div>' +
            '<div class="username pull-left">' + (data.username ? data.username : '未知') + '</div>' +
            '<div class="help-money pull-right">' + (data.is_self ? '自立更生赚' : '帮我赚') + '<span>' + data.money + '</span>元</div>' +
            '</li>';
    },

    getTotalMoney: function () {
        var _money = 0;
        $.each(this.lists, function (i, item) {
            _money += item.money;
        });
        return _money;
    },
    /**
     * 当日日期
     * YYY年MM月DD日
     * @returns {string}
     */
    getTodayDate: function () {
        var myDate = new Date(),
            YYYY = myDate.getFullYear(),
            MM = myDate.getMonth() + 1,
            DD = myDate.getDate();
        return YYYY + '年' + MM + '月' + DD + '日';
    }
};
var rewardsList = new RewardsListObj();
(function () {
    if ($('#game').length) {
        var w = window.innerWidth,
            h = window.innerHeight;

        //gigoloKnit.GAME_WIDTH = 1080;
        //gigoloKnit.GAME_HEIGHT = 1920;
        gigoloKnit.GAME_WIDTH = 1080;
        gigoloKnit.GAME_HEIGHT = h / w * 1080;
        gigoloKnit.BACKGROUND = '#F7E6B3';

        var game = new Phaser.Game(gigoloKnit.GAME_WIDTH, gigoloKnit.GAME_HEIGHT, Phaser.CANVAS, 'game');
        game.cache = false;
        game.state.add('boot', gigoloKnit.boot);
        game.state.add('preloader', gigoloKnit.preloader);
        game.state.add('menu', gigoloKnit.menu);
        game.state.add('game', gigoloKnit.game);
        game.state.add('scoreState', gigoloKnit.scoreState);
        game.state.add('readyGo', gigoloKnit.readyGo);
        game.state.add('ruleGame', gigoloKnit.ruleGame);
        game.state.start('boot');
    } else if ($('#homeState').length) {
        home.init();
    } else if ($('#moneyState').length) {
        rewards.init();
    } else if ($('#listState').length) {
        rewardsList.init();
    } else if ($('#registerState').length) {
        register.init();
    }
})();