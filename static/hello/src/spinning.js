define(function(require,exports,module){
    var $=require('jquery');
    function Spinning(str){
        this.container=$(str);
        this.imgs=this.container.children();
        this.spinnings=[];
    }
    module.exports=Spinning;

    Spinning.prototype={
        render:function(){
            this._init();
            this.container.css('background','white');
            this.imgs.show();
            this._spin();
        },
        _init:function(){
            var spinnings=this.spinnings;
            this.imgs.each(function(i,x){
                var startDeg=random(360);
                var node=$(x);
                var timer;
                node.css({
                    top:random(40),
                    left:i*82+random(10),
                    zIndex:1000
                }).hover(function(){
                    node.fadeTo(250,1).css('zIndex',1001).css('transform','rotate(0deg)');
                },function(){
                    node.fadeTo(250,0.6).css('zIndex',1000);
                    if(timer) clearTimeout(timer);
                    timer=setTimeout(spin,Math.ceil(random(10000)));
                })
                function spin(){
                    node.css('transform','rotate('+startDeg+'deg)');
                }
                spinnings[i]=spin;
            })
            return this;
        },
        _spin:function(){
            $(this.spinnings).each(function(i,fn){
                setTimeout(fn,Math.ceil(random(3000)));
            })
            return this;
        }
    }
    function random(x){return Math.random()*x};
})