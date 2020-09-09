$(document).ready(function(){
    new Swiper('.swiper-container',{
        pagination:{
            el: '.swiper-pagination',
            clickable:true,
        },
        navigation:{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev'
        },
        slidesPerView : 2,
        spaceBetwwen : 0,
        slidesPerGroup : 2,
        loop : true

    });
})