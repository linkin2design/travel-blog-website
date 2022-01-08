$(document).ready(function () {

    $('.banner-slider').slick({
        autoplay: true,
        dots: true,
        prevArrow: '<i class="fas fa-chevron-left left-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right right-arrow"></i>',
    });
});



var swiper = new Swiper(".product-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },

    },
});


var swiper = new Swiper(".blog-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 10,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },

    },
});

var swiper = new Swiper(".clients-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 10,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

// back to top button nav fix 

$(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    // back to top 
    if (scrolling > 500) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
    // nav fix 

    if (scrolling > 1000) {
        $('nav').addClass('nav-fix');
    } else {
        $('nav').removeClass('nav-fix')
    }
});

$('.back-to-top').click(function () {
    $('html,body').animate({
        scrollTop: '0px',
    }, 2000);
})

// preloder 
$(document).ready(function () {
    $('.preloader').delay(2000).fadeOut();
});