require.config({
    baseUrl : '/',

    paths : {
        'jquery' : '/libs/jquery/jquery-1.11.3.min',
        'my-carousel' : '/libs/my-carousel/my-carousel-0.2'
    },

    shim : {
        'my-carousel' : {
            deps : ['jquery']
        }
    }
})