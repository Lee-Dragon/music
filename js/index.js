//删除 判断删除的index 是在当前播放的上 下 ；删除下边的话 需+1；批量删除需实现
$(function () {
    var data=[
        {songname:'Always Getting ',singer:'Angela',src:'mp3/1.mp3',dur:'04:12'},
        {songname:'迷人的危险 ',singer:'Dance Flow',src:'mp3/2.mp3',dur:'03:26'},
        {songname:' Life Is Cool',singer:'Sweetbox',src:'mp3/3.mp3',dur:'02:49'},
        {songname:'方的言',singer:'赵英俊',src:'mp3/4.mp3',dur:'03:38'},
        {songname:'Bomba ',singer:'Jessy ',src:'mp3/5.mp3',dur:'02:46'},
        {songname:'宁负天下不负她',singer:'马旭东',src:'mp3/6.mp3',dur:'04:12'},
        {songname:' 一万次悲伤',singer:'逃跑计划',src:'mp3/7.mp3',dur:'04:15'},
        {songname:'我的梦 + Undo',singer:'吴映香   ',src:'mp3/8.mp3',dur:'04:12'},
        {songname:'如果这就是爱情',singer:'张靓颖',src:'mp3/9.mp3',dur:'04:42'},
        {songname:'겁 (怯)',singer:'송민호',src:'mp3/10.mp3',dur:'04:09'}

    ];
    var lyricData = [
        // '[ti:夜曲]',
        // '[ar:周杰伦]',
    //     // '[al:十一月的萧邦]',
    //     '[00:00.00] 夜曲',
    //     '[00:04.73]',
    //     '[00:06.01]词：方文山   曲：周杰伦',
    //     '[00:09.79]演唱：周杰伦',
    //     '[00:13.64]',
    //     '[00:25.09]一群嗜血的蚂蚁 被腐肉所吸引',
    //     '[00:28.12]我面无表情 看孤独的风景',
    //     '[00:31.23]失去你 爱恨开始分明',
    //     '[00:33.66]失去你 还有什么事好关心',
    //     '[00:36.69]当鸽子不再象征和平',
    //     '[00:38.61]我终于被提醒 广场上喂食的是秃鹰',
    //     '[00:42.28]我用漂亮的押韵 形容被掠夺一空的爱情',
    //     '[00:46.25]',
    //     '[00:47.26]啊 乌云开始遮蔽 夜色不干净',
    //     '[00:49.90]公园裡 葬礼的回音 在漫天飞行',
    //     '[00:52.79]送你的 白色玫瑰 在纯黑的环境凋零',
    //     '[00:55.97]乌鸦在树枝上诡异的很安静',
    //     '[00:58.12]静静听 我黑色的大衣',
    //     '[01:00.62]想溫暖你 日渐冰冷的回忆',
    //     '[01:02.76]走过的 走过的生命',
    //     '[01:04.07]啊 四周弥漫雾气 啊 我在空旷的墓地',
    //     '[01:06.87]老去后还爱你',
    //     '[01:08.85]',
    //     '[01:09.46]为你弹奏萧邦的夜曲 纪念我死去的爱情',
    //     '[01:14.94]跟夜风一样的声音 心碎的很好听',
    //     '[01:20.49]手在键盘敲很轻 我给的思念很小心',
    //     '[01:25.94]你埋葬的地方叫幽冥',
    //     '[01:30.18]',
    //     '[01:30.60]为你弹奏萧邦的夜曲 纪念我死去的爱情',
    //     '[01:37.08]而我为你隐姓埋名 在月光下弹琴',
    //     '[01:42.54]对你心跳的感应 还是如此温热亲近',
    //     '[01:48.06]怀念你那鲜红的唇印',
    //     '[01:54.17]',
    //     '[02:15.47]那些断翅的蜻蜓 散落在这森林',
    //     '[02:18.43]而我的眼睛 没有丝毫同情',
    //     '[02:21.55]失去你 泪水混浊不清',
    //     '[02:23.93]失去你 我连笑容都有阴影',
    //     '[02:27.02]风在长满青苔的屋顶 嘲笑我的伤心',
    //     '[02:30.32]像一口没有水的枯井',
    //     '[02:32.50]我用凄美的字型 描绘后悔莫及的那爱情',
    //     '[02:36.64]',
    //     '[02:37.54]为你弹奏萧邦的夜曲 纪念我死去的爱情',
    //     '[02:43.21]跟夜风一样的声音 心碎的很好听',
    //     '[02:48.75]手在键盘敲很轻 我给的思念很小心',
    //     '[02:54.26]你埋葬的地方叫幽冥',
    //     '[02:58.42]',
    //     '[02:58.82]为你弹奏萧邦的夜曲 纪念我死去的爱情',
    //     '[03:05.36]而我为你隐姓埋名 在月光下弹琴',
    //     '[03:10.85]对你心跳的感应 还是如此温热亲近',
    //     '[03:16.34]怀念你那鲜红的唇印',
    //     '[03:21.04]',
    //     '[03:21.77]一群嗜血的蚂蚁 被腐肉所吸引',
    //     '[03:24.66]我面无表情 看孤独的风景',
    //     '[03:27.67]失去你 爱恨开始分明',
    //     '[03:30.13]失去你 还有什么事好关心',
    //     '[03:33.07]当鸽子不再象征和平',
    //     '[03:35.11]我终于被提醒 广场上喂食的是秃鹰',
    //     '[03:38.74]我用漂亮的押韵 形容被掠夺一空的爱情',
    //     '[03:43.24]'
    // ]
    //     ,
    //     [
    //         '[ti:如果这就是爱情]',
    // '[ar:张靓颖',
    // '[al:我相信(旗舰版)]',
    '[00:01.00] 张靓颖 - 如果这就是爱情',

        '[00:05.00] 作词：阿弟仔',
        '[00:07.00] 作曲：阿弟仔',
        '[00:09.00] 编曲：廖伟杰',
        '[00:11.00]',
    '[00:15.80] 你做了选择 对的错的',
        '[00:22.30] 我只能承认 心是痛的',
        '[00:28.33] 怀疑你舍得 我被伤的那么深',
        '[00:35.62] 就放声哭了 何必再强忍',
        '[00:40.37]',
    '[00:41.14] 我没有选择 我不再完整',
        '[00:47.48] 原来最后的吻' ,
        '[00:53.84] 你只能默认 我要被割舍',
        '[01:00.16] 眼看着 你走了',
        '[01:06.37]',
    '[01:06.59] 如果这不是结局 如果我还爱你',
        '[01:13.26] 如果我愿相信 你就是唯一',
        '[01:19.04] 如果你听到这里 如果你依然放弃',
        '[01:25.38] 那这就是爱情 我难以抗拒',
        '[01:31.66]',
    '[01:31.81] 如果这就是爱情 本来就不公平',
        '[01:38.52] 你不需要讲理 我可以离去',
        '[01:44.40] 如果我成全了你 如果我能祝福你',
        '[01:50.80] 那不是我看清 是我证明 我爱你',
        '[02:00.51]',
    '[02:03.46] 灰色的天空 无法猜透',
        '[02:09.87] 多余的眼泪 无法挽留',
        '[02:15.89] 什么都牵动 感觉真的好脆弱',
        '[02:23.45] 被呵护的人 原来不是我',
        '[02:28.11]',
    '[02:28.70] 我不要你走 我不想放手',
        '[02:34.63] 却又不能够奢求 同情的温柔',
        '[02:41.04] 你可以自由 我愿意承受',
        '[02:47.47] 把昨天 留给我',
     '[02:53.90]',
    '[02:54.08] 如果这不是结局 如果我还爱你',
        '[03:00.76] 如果我愿相信 你就是唯一',
        '[03:06.62] 如果你听到这里 如果你依然放弃',
        '[03:13.11] 那这就是爱情 我难以抗拒',
        '[03:19.17]',
    '[03:19.34] 如果这就是爱情 本来就不公平',
        '[03:26.02] 你不需要讲理 我可以离去',
        '[03:31.82] 如果我成全了你 如果我能祝福你',
        '[03:38.20] 那不是我看清 是我证明 我爱你',
        '[03:49.52]',
    '[03:58.56] 如果这就是爱情 本来就不公平',
        '[04:05.31] 你不需要讲理 我可以离去',
        '[04:11.36] 如果我成全了你 如果我能祝福你',
        '[04:17.59] 那不是我看清 是我证明 我爱你'
        // ]
    ]


    var ing=$('#ing');
    var prev=$('#prev');
    var next=$('#next');
    var index=0;
    var audio=$('audio').get(0);
    var timeyuan= $('.time-jindu .yuan');
    var volyuan=$('.volume-jindu .yuan');
    var timedone= $('.time-jindu .done');
    var voldone=$('.volume-jindu .done');
    var geci=$('.lyric-box .lyric-container');
    var vw=$('.volume-jindu').width();
    volyuan.css('left',vw-10);
    voldone.css('width',vw);
    var timeformat=function (time) {
        var m=time.split(':')[0];//分
        var s=time.split(':')[1];//秒
        return Number(m)*60+Number(s);
    }

    //歌词处理
        var lyricarr=[];//存放每句歌词，以对象的形式[{2s:'第一句'},{4s:'第二句'}]
        for(var i=0;i<lyricData.length;i++){
            var temtime=/\d+:\d+.\d+/.exec(lyricData[i]);
            var temlyric=lyricData[i].slice(10);
            // if(temtime!=null){
            //     lyricarr.push({time:timeformat(temtime[0]),lyric:temlyric})
            // }
            lyricarr.push(temlyric)
        }

        //歌词输出到页面
        for(var i=0;i<lyricData.length;i++){
            $('<li>').text(lyricarr[i]).appendTo('.lyric-container');
            $('<p>').text(lyricarr[i]).appendTo('#music-box .only .only-lyric');


        }
    // function lyric() {
    //     //歌词处理
    //     var lyricarr=[];//存放每句歌词，以对象的形式[{2s:'第一句'},{4s:'第二句'}]
    //     for(var i=0;i<lyricData[1].length;i++){
    //         var temtime=/\d+:\d+.\d+/.exec(lyricData[i]);
    //         var temlyric=lyricData[i].slice(10);
    //         if(temtime!=null){
    //             lyricarr.push({time:timeformat(temtime[0]),lyric:temlyric})
    //         }
    //     }
    //
    //     //歌词输出到页面
    //     for(var i=0;i<lyricData[1].length;i++){
    //         $('<li>').text(lyricarr[i].lyric).appendTo('.lyric-container');
    //     }
    //     //歌词动态
    //     var ind=0;
    //     //timeupdate
    //     if(!iftime(audio.currentTime,ind)){
    //         ind++;
    //     }
    //     $('.ablum-box .lyric-container li').removeClass('active');
    //     $('.ablum-box .lyric-container li').eq(ind).addClass('active');
    //     geci.css('top',-ind*30)
    //
    // }

    // var iftime=function (time,index) {
    //     // var aa=audio.currentTime;
    //     if(index<lyricarr.length-1){
    //         if(time<lyricarr[index+1].time&&time>lyricarr[index].time){
    //             return true
    //         }else{
    //             return false;
    //         };
    //     }
    //
    // };



    var yi=geci.height()/150;//结合audio.timeupdate
    //纯净页面切换
    var simflag=true;
    $('.simple').on('click',function () {
        // alert(22)
        if(simflag){
            $(this).addClass('off');
            $('#music-box .default').css('display','none');
            $('#music-box .only').css('display','block').slideDown();
            simflag=false;

        }else{

            $(this).removeClass('off');
            $('#music-box .default').css('display','block');
            $('#music-box .only').css('display','none');

            simflag=true;
           
        }
    });

    //创建列表 渲染页面

    (function render(data) {
        $('.song-list-container .song-list').empty()
        for(var i=0;i<data.length;i++){
            $('<li>').appendTo('.song-list');
        }
        var song=$('.song-list-container .song-list li');
        $(data).each(function(i,v){

            $('<div class="check"><input type="checkbox" ></div><div class="num" id="'+(i+1)+'"></div><div class="name"></div><div class="singer"></div><div class="dur"></div><div class="other"></div><i></i>' ).appendTo($('.song-list li').eq(i));

            $('<a id="del-icon">').appendTo(song.eq(i).find('.dur'));
            $('<span>').appendTo(song.eq(i).find('.name'));
            // $('<span>').text(audio.duration).appendTo(song.eq(i).find('.dur'))
            $('<div class="song-icon">').appendTo(song.eq(i).find('.name'));
            $('<a id="play-icon"></a><a id="add-icon" alt="添加到"></a><a id="down-icon" alt="下载"></a><a id="share-icon" alt="分享到"></a>').appendTo(song.eq(i).find('.name .song-icon'))
            song.eq(i).find('.name span').text(data[i].songname);
            song.eq(i).find('.singer').text(data[i].singer);
            song.eq(i).find('.dur #del-icon').text(data[i].dur);
            var num=song.eq(i).find('.num').attr('id');
            song.eq(i).find('.num').text(num)
        });

        //删除
        $('.song-list li .dur #del-icon').on('click',function () {
            var index=$(this).closest('li').index();
            data.splice(index,1)
            render(data);
            $('.song-list').triggerHandler('mouseenter mouseleave')
        });

    })(data);
    // render(data)
    $('.time-jindu .song-info a').eq(0).text(data[index].songname);
    $('.time-jindu .song-info a').eq(1).text(data[index].singer);

    //列表切歌

    $('.song-list ').on('mouseenter mouseleave','li ',function () {
        $(this).find('.name .song-icon').toggleClass('active').end().find('.dur').toggleClass('active');
        var listflag=true;
        var text=$(this).find('.num').text();
        $(this).parent().find('li .num').removeClass('active');

        $(this).find('.name .song-icon #play-icon').on('click',function(){
            // $(this).closest('li').find('.num').text(text);
            // $('.ablum-box .lyric-container').empty();
            if(listflag){
                console.log(11)
                $(this).addClass('pause')
                var i=$(this).closest('li').index();
                audio.src=data[i].src;
                index=i;
                audio.play();
                listflag=false;
                $('.song-list li ').removeClass('active');
                $('.song-list li ').eq(index).addClass('active');
                $('.time-jindu .song-info a').eq(0).text(data[index].songname);
                $('.time-jindu .song-info a').eq(1).text(data[index].singer);
                $('.ablum-box .song-info a img').css('background-image','url(img/'+index+'.jpg)');
                $('#bg').css('background-image','url(img/'+index+'.jpg)')


                $(this).closest('li').find('.num').text('').addClass('active')
            }else{
                $(this).removeClass('pause')
                audio.pause();
                listflag=true;
                $(this).closest('li').find('.num').text(text).removeClass('active');
            }
        })

    })

    //播放模式切换
    var qie=0
    $('.control #mode').on('click',function () {
        $(this).removeAttr('class');
        qie++;
        if(qie>3){
            qie=1
        }
        if(qie==1){
            console.log('only')
            $(this).attr('class','only');
        }else if(qie==2){
            console.log('random')
            $(this).attr('class','random');

        }else if(qie==3){
            $(this).attr('class','xun')
        }
    })
    //左右切歌

        $('#prev').on('click',function () {

            if($('.control #mode').attr('class')=='xun'){
                index--;
                if(index==-1){
                    index=data.length-1
                }
                $('.song-list li ').removeClass('active');
                $('.song-list li ').eq(index).addClass('active');

                $('.time-jindu .song-info a').eq(0).text(data[index].songname);
                $('.time-jindu .song-info a').eq(1).text(data[index].singer);
                $('.ablum-box .song-info a img').css('background-image','url(img/'+index+'.jpg)');
                $('#bg').css('background-image','url(img/'+index+'.jpg)')


                audio.src=data[index].src;
                audio.play();

            }else if($('.control #mode').attr('class')=='random'){
                var num=Math.floor(Math.random()*data.length);
                $('.song-list li ').removeClass('active');
                $('.song-list li ').eq(num).addClass('active');

                $('.time-jindu .song-info a').eq(0).text(data[num].songname);
                $('.time-jindu .song-info a').eq(1).text(data[num].singer);
                $('.ablum-box .song-info a img').css('background-image','url(img/'+num+'.jpg)');
                $('#bg').css('background-image','url(img/'+index+'.jpg)')


                index=num;
                ;
            }else if($('.control #mode').attr('class')=='only'){
                $('.song-list li').removeClass('active');
                $('.song-list li').eq(index).addClass('active');
                $('.time-jindu .song-info a').eq(0).text(data[index].songname);
                $('.time-jindu .song-info a').eq(1).text(data[index].singer);
                $('.ablum-box .song-info a img').css('background-image','url(img/'+index+'.jpg)');
                $('#bg').css('background-image','url(img/'+index+'.jpg)')


                audio.src=data[index].src;
                audio.play();


            }

        })
        $('#next').on('click',function () {

            if($('.control #mode').attr('class')=='xun'){
                index++;
                if(index==data.length){
                    index=0
                }
                $('.song-list li').removeClass('active');
                $('.song-list li').eq(index).addClass('active');
                $('.time-jindu .song-info a').eq(0).text(data[index].songname);
                $('.time-jindu .song-info a').eq(1).text(data[index].singer);
                $('.ablum-box .song-info a img').css('background-image','url(img/'+index+'.jpg)');
                $('#bg').css('background-image','url(img/'+index+'.jpg)')

                audio.src=data[index].src;
                audio.play()
            }else if($('.control #mode').attr('class')=='random'){
                var num=Math.floor(Math.random()*data.length);
                $('.song-list li ').removeClass('active');
                $('.song-list li ').eq(num).addClass('active');

                $('.time-jindu .song-info a').eq(0).text(data[num].songname);
                $('.time-jindu .song-info a').eq(1).text(data[num].singer);
                $('.ablum-box .song-info a img').css('background-image','url(img/'+num+'.jpg)');
                $('#bg').css('background-image','url(img/'+index+'.jpg)');



                index=num;
            }else if($('.control #mode').attr('class')=='only'){
                $('.song-list li').removeClass('active');
                $('.song-list li').eq(index).addClass('active');
                $('.time-jindu .song-info a').eq(0).text(data[index].songname);
                $('.time-jindu .song-info a').eq(1).text(data[index].singer);
                $('.ablum-box .song-info a img').css('background-image','url(img/'+index+'.jpg)');
                $('#bg').css('background-image','url(img/'+index+'.jpg)')


                audio.src=data[index].src;
                audio.play()
            }
        })


    //自动下一首
    $(audio).on('ended',function () {
        $('#next').triggerHandler('click');
    })
    //时间转换
    var time=function (t) {
        // var t=350;

        var m,s,diff,r,str;
        m=Math.floor(t/60);
        s=Math.floor(t%60);
        // s=s==0?'00':s;
        if(s>=0&&s<9){
            return "00:0"+s;
        }

        m=m>=0&&m<=9?'0'+m:m;
        m=m==0?'00':m
        return m+':'+s;
    }

    ing.on('click',function () {
        if(audio.paused){
            audio.play();
        }else{
            audio.pause()
        }
    })
    ////////////////播放 暂停状态的改变/////////////
    $(audio).on('play',function () {
        $('#ing').addClass('pause');
    })
    $(audio).on('pause',function () {
        $('#ing').removeClass('pause');
    })
    ////////////////////音源加载完成后将时间输入到页面中///////////////////////
    $(audio).on('canplay',function () {

        $('#current').text(time(audio.currentTime));
        var shi=audio.duration;
        $('#zong').text( time(shi) );
    })
    //


    /////////////////////////实时监控时间进度//////////////////////////
    $(audio).on('timeupdate',function (e) {
        $('#current').text(time(audio.currentTime));

        var c= audio.currentTime/audio.duration*$('.time-jindu').width();
           timeyuan.css('left',c)
        timedone.width(c);
        geci.css('top',-yi*audio.currentTime);//可移动


    })
    //////////////////时间控制///////////////////
    $('.time-jindu .progress').on('click',function (e) {
        var a=e.offsetX||e.pageX;
        // -$(this).find('.yuan').width()/2
        var b= ( a/$(this).width() )*audio.duration ;
        audio.currentTime=b;
        console.log(b)
        // console.log(audio.currentTime)//ff可以输出  谷歌不行
        audio.play();
    })
    timeyuan.on('click',false);
    /////////////////
    $('.ing').triggerHandler('timeupdate')
    ////////////////音量控制////////////////////
    $('.volume-jindu').on('click',function (e) {
        var a=e.offsetX;
        // volyuan.css('left',a);
        audio.volume=a/$(this).width()

    })
    ////////////////////////////////////
    $(audio).on('volumechange',function (e) {
        var a = audio.volume*$('.volume-jindu').width();
        // console.log(a)
        if(a==0){
            $('.volume-icon').addClass('mute')
        }
        volyuan.css('left',a);
        voldone.width(a);
    })
    //静音
    $('.volume-icon').on('click',function () {
        $(this).toggleClass('mute')
        if($(this).attr('mute')){
           audio.volume=$(this).attr('mute')
            $(this).removeAttr('mute')
        }else{
            $(this).attr('mute',audio.volume);//保存之前的音量值
            audio.volume=0;
        }


        // volyuan.css('left',0)
    })
   volyuan.on('click',false);
    //拖拽
    var tw=$('.time-jindu').get(0).offsetWidth;
    var th=$('.time-jindu').get(0).offsetHeight;


    function drag(obj){

        var ow=obj.get(0).offsetWidth;
        var oh=obj.get(0).offsetHeight;
        console.log('drag')
        $('.time-jindu .yuan').get(0).onmousedown=function (e) {
            console.log('down')

            var cw=this.offsetLeft;
            var ch=this.offsetTop;
            var ev=e||window.event;
            var pw=ev.clientX;
            var ph=ev.clientY;
            var lenx=pw-cw;
            var leny=ph-ch;
            document.onmouseover=function (e) {
                var ev=e||window.event;
                console.log('over')

                var pw=ev.clientX;
                var ph=ev.clientY;
                var x=pw-lenx;
                var y=ph-leny;
                if (x<0) {
                    x=0
                }
                if (y<0) {
                    y=0
                }
                if (x>tw-ow) {
                    x=tw-ow
                }
                if (y>th-oh) {
                    y=th-oh
                }
                $('.time-jindu .yuan').css('left',x);//不能用obj。find('.yuan')

            }
            document.onmouseup=function (e) {
                document.onmouseover=null;
                document.onmouseup=null;
            }
        }

    }//drag
    // function drag(box){
    //     var ow=box.offsetWidth;
    //     var oh=box.offsetHeight;
    //     box.onmousedown=function(e){
    //         var ev=e||window.event;
    //         var ox=this.offsetLeft;//距离有定位的父元素的左边距
    //         var oy=this.offsetTop;//距离有定位的父元素的上边距
    //         var cx=ev.clientX;//距离浏览器的左边距
    //         var cy=ev.clientY;//距离浏览器的上边距
    //
    //         var lenx=cx-ox;
    //         // alert(lenx)
    //         var leny=cy-oy;
    //         document.onmousemove=function(e){
    //             var ev=e||window.event;
    //             var x=ev.clientX-lenx;
    //             var y=ev.clientY-leny;
    //             // alert(x)
    //             if (x<0) {
    //                 x=0
    //             }
    //             if (y<0) {
    //                 y=0
    //             }
    //             if (x>pw-ow) {
    //                 x=pw-ow
    //             }
    //             if (y>ph-oh) {
    //                 y=ph-oh
    //             }
    //             box.style.left=x+'px';
    //             box.style.top=y+'px';
    //         }
    //         document.onmouseup=function(){//移动到顶部的时候,抬起的时候对象找不到；将范围放大到document
    //             document.onmousemove=null;
    //             document.onmouseup=null;
    //         }
    //     }
    // }
    drag($('.time-jindu .yuan'));
    drag($('.volume .yuan'));

    //ablum-box
    // $('.ablum-box .lyric-box .songname a').text('歌曲名：'+data[index].songname+'');
    // $('.ablum-box .lyric-box .singer a').text('歌手：'+data[index].singer+'');



})//加载结束