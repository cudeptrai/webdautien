
$(document).ready(function() {
    $("#headerMobileBtnMenu").on('click', function() {
        $(this).toggleClass("active");  // adding active class
        $('.header-mobile-menu').toggleClass("active");
    });

    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
$(document).ready(function() {
    // Lấy đường dẫn trang hiện tại
    var currentPath = window.location.pathname;

    // Xác định liên kết phù hợp với đường dẫn hiện tại và đặt lớp active
    $('.header-list a').each(function() {
        var linkPath = $(this).attr('href');

        // Kiểm tra nếu đường dẫn hiện tại kết thúc bằng đường dẫn của liên kết
        if (currentPath.endsWith(linkPath)) {
            $(this).addClass('active');
        }
    });

    $('.header-list a').on('click', function(e) {
        $('.header-list a').removeClass('active');
        $(this).addClass('active');

        if ($(this).next('.header-item-project').length > 0) {
            $(this).addClass('active');
        }
    });

    $('.header-item-project a').on('click', function() {
        $('.header-list a').removeClass('active');
        $(this).closest('.header-item-a, .header-item-b').find('a:first').addClass('active');
        $(this).parents('.header-list').find('a').eq(1).addClass('active');
    });
});
