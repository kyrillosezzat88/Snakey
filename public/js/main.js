
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  $(window).scroll(function(){
      if($(this).scrollTop() >= 200){
          $('div > #nv').addClass('sticky');
      } else{
        $('div > #nv').removeClass('sticky');
    }
  })
  /*preload screen */
  $(window).on('load' , function(){
      $('.preload').fadeOut('1000');
  })