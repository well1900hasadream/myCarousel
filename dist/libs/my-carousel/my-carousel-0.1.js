class MyCarousel {
    constructor() {
        jQuery.fn.extend({
            'myCarousel': this.myCarousel
        })
        // console.log(this);
        this.time = 1;
    }

    //绑定函数到$上面
    myCarousel(params) {
        // console.dir(this);
        frame_handler(params.width, params.height);

        function frame_handler(width, height) {
            $('#my-carousel-frame').css({
                width: width + "px",
                height: height + "px"
            });
        }
    }

    // ul_containner_handler(width, height) {
    //     $('#my-carousel-frame').css({
    //         width: width + "px",
    //         height: height + "px"
    //     })
    // }

}
let myCarousel = new MyCarousel();

