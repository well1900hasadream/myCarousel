require(['./config'], () => {
    require(['my-carousel'], () => {
        class Index {
            constructor() {
                this.useMyCarousel();
            }

            useMyCarousel() {
                $('#my-carousel-frame').myCarousel({
                    width: 900,
                    height: 550,
                    isAutoPlay : "true",
                    method: "fade"
                })
            }
        }
        new Index();
    })
})