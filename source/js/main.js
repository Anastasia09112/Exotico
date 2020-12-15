jQuery (function($){
    "use strict"

    if($('.header_slider').length){
        $('.header_slider').slick({
            vertical: true,
            arrows: false,
            dots: true,
        });
    }

    if($('.shop-slider_karusel').length) {
        $('.shop-slider_karusel').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 2,
            appendArrows: $('.shop-slider_arrows'),
            prevArrow: '<button class="shop-slider_left"><svg width="18" height="19" ><path d="M16 7.1L6.8 7.1L10.5 3.4C11.3 2.6 11.3 1.4 10.5 0.6C9.7 -0.2 8.5 -0.2 7.7 0.6L0.7 7.7C0.3 8 0 8.6 0 9.1C0 9.6 0.3 10.2 0.7 10.6L7.8 17.7C8.2 18.1 8.7 18.3 9.2 18.3C9.7 18.3 10.2 18.1 10.6 17.7C11.4 16.9 11.4 15.7 10.6 14.9L6.9 11.2L16 11.2C17.1 11.2 18 10.3 18 9.2C18 8.1 17.1 7.1 16 7.1Z" fill="#FFCAAE"/></svg></button>',
            nextArrow: '<button class="shop-slider_right"><svg width="18" height="19"><path d="M2 11.2L11.2 11.2L7.5 14.9C6.7 15.7 6.7 16.9 7.5 17.7C8.3 18.5 9.5 18.5 10.3 17.7L17.3 10.6C17.7 10.3 18 9.69999 18 9.19999C18 8.69999 17.7 8.09999 17.3 7.69999L10.2 0.599986C9.8 0.199986 9.3 -1.22047e-05 8.8 -1.22484e-05C8.3 -1.22921e-05 7.8 0.199986 7.4 0.599986C6.6 1.39999 6.6 2.59999 7.4 3.39999L11.1 7.09999L2 7.09999C0.900001 7.09999 9.00455e-07 7.99999 8.0429e-07 9.09999C7.08124e-07 10.2 0.900001 11.2 2 11.2Z" fill="#FFCAAE"/></svg></button>'
          });
    }

    if($('.video_icon').length) {
    $('.video_icon').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false,
        });
    }

});