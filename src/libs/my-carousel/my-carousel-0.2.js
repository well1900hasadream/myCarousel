

/**  Time : 2019-7-23 15:06:49
 *   By : 1900
 *   Version : 0.2
 *   U could trace my code with these KeyWords : 
 *      init / setBasicParams / autoPlay / fadeClick / extendTojQ
 * 
 *   Warn : U should use all the params with no specific unit!!
*/


(function(j){

    class MyCarousel {

        constructor(elem, userParams) {
            this.defaultsParams = {
                "width" : 800, // width of frame --- no px; // 容器的宽 --- 不带单位
                "height" : 600, // height of frame --- no px; 
                "direction" : "r_t_l", // refs 'right to left'; // 方向从右到左
                "method" : "slide", // slide, fade;
                "playInterval" : 3000,
                "isAutoPlay" : false,

                //btn params 
                "btnSize" : 80,
                "btnPositionToSideEdge" : 50, // 按钮距离frame的两边的距离
                "btnBgColor" : "#e9e9e9",

            };
            // 重载参数对象
            this.params = j.extend({}, this.defaultsParams, userParams);
            this.init(elem);
        }

        // init 启动项
        init(elem) {
            // params final
            // 最终应用的参数
            let params = this.params;
            const width = params.width,
                height = params.height,
                direction = params.direction,
                method = params.method,
                playInterval = params.playInterval,
                isAutoPlay = params.isAutoPlay,
                // 按钮参数
                btnSize = params.btnSize,
                btnPositionToSideEdge = params.btnPositionToSideEdge,
                btnBgColor = params.btnBgColor
            
            // functions
            // 调用函数
            this.setBasicParams(elem, width, height, method, 
                btnSize, btnPositionToSideEdge, btnBgColor);
            this.autoPlay(elem, isAutoPlay, playInterval, method);
        }

        // basic parameters 
        // 一些基础参数
        setBasicParams(elem, width, height, method, btnSize 
                    ,btnPositionToSideEdge, btnBgColor) {

            console.log(btnBgColor);
            
            // styles among all method
            elem.css({
                width,
                height,
                position : "relative"
            });
            // position of n,p-click btn
            $('#next-and-prev-btns').css({
                display : 'flex',
                'align-items' : 'center',
                width : (width - 2 * btnPositionToSideEdge) + "px",
                height : "100px",
                'line-height' : "100px",
                position : "absolute",
                top : "calc(50% - 50px)",
                margin : `0 ${btnPositionToSideEdge}px`
            })
            $('#prev-btn').css({
                float : "left", 
                width : btnSize + 'px',
                height : btnSize + 'px',
                'border-radius' : "50%",
                'background-color' : btnBgColor
            })
            // set style for fade in-and-out carousel
            // 预设 淡入淡出轮播 样式
            if(method == "fade") {
                $(elem).children("#my-carousel-container").css({
                    width : "100%",
                    height : "100%"
                })
                $(".my-carousel-li").css({
                    position : "absolute",
                    width : "100%",
                    height : "100%"
                }).children('a').css({

                }).on("click", function(e){
                    e.preventDefault();
                })
                $(".display-image").css({
                    width : "100%",
                    height : "100%",
                    cursor : "pointer"
                })
            // set style for slide carousel
            // 预设 滑动轮播 样式
            }else if(method == "slide") {
                
            }
        }

        // autoplay controller 
        // 自动播放
        autoPlay(elem,isAutoPlay,playInterval,method) {
            const self = this;
            console.log(method);
            
            let interTimer = setInterval(function(){
                
            }, playInterval);
            if(isAutoPlay) {
                clearInterval(interTimer);
            }
        }
        
        // click Next or prev button of the fade carousel
        // 淡入淡出点击Next及Prev按钮
        fadeClickNext() {
            const self = this;
        }
        fadeCilckPrev() {
            const self = this;
        }
    }

    // extendTojQ
    // extend this tool to jQ
    // 绑定方法到jQ上
    j.fn.myCarousel = function(userParams) {
        var myCarousel = new MyCarousel(j(this), userParams);
    }
    
})(jQuery)