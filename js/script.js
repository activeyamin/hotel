// ============sidemanu js start=====
$(".bar").click(function(){
  $(".sidemanu").toggleClass("test")
})
$(".bar").click(function(){
  $(".bar1").toggleClass("sidemanu_bar1_rotate")
})
$(".bar").click(function(){
  $(".bar2").toggleClass("d-none")
})
$(".bar").click(function(){
  $(".bar3").toggleClass("sidemanu_bar3_rotate")
})

$(".lang_dis_none").click(function(){
  $(".language_btm_item").toggleClass("d-block")
})
// =======sidemanu js end============
// =======mega manu dropdown js start============
$(".mega_home_drop_dis_none").click(function(){
  $(".mega_home_drop_btm_item").toggleClass("d-block")
})
$(".mega_rooms_drop_dis_none").click(function(){
  $(".mega_rooms_drop_btm_item").toggleClass("d-block")
})
$(".mega_page_drop_dis_none").click(function(){
  $(".mega_page_drop_btm_item").toggleClass("d-block")
})
// =======mega manu dropdown js end============
// =======nav sticky manu js start==========
$window = $(window);
    $window.scroll(function() {
        $scroll_position = $window.scrollTop();
        if ($scroll_position > 100) { // if body is scrolled down by 300 pixels
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
        });

// =======nav sticky manu js end============
// =======venobox js start============
$(document).ready(function(){
  $('.hero_video_btn_icon').venobox();
});
// =======venobox js end============
// =======jquery datepicker js start============
    $(".date_picker_text_item_pos").click(function(){
      $(".calendar_wrap").toggleClass("d-block")
    })
    $(".date_picker_text_item_right_visible").click(function(){
      $(".calendar_wrap_right").toggleClass("d-block")
    })

// =======jquery datepicker js end============
// =======jquery owl-carousel js start============
  $('.owl-carousel-1').owlCarousel({
    stagePadding: 0,
    items:1,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
        1600:{
            items:1
        }
    }
});
// =======jquery owl-carousel js end============
// =======special offer slide start============
$('.owl-carousel-2').owlCarousel({
    stagePadding: 360,
    items: 3,
    center: true,
    smartSpeed: 600,
    loop: true,
    margin: 10,
    nav:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 1
        },
        1600: {
            items: 1
        }
    }
});
// =======special offer slide end============

