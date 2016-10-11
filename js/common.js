$(document).ready(function() {
  $('.owl-slider').owlCarousel({
    nav: true,
    autoplay:true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive:{
        0:{
          items:1,
          stagePadding: 50,
          nav: false,
        },
        660:{
          items:1,
          stagePadding: 50,
          nav: false,
        },
        768:{
          items:2,
        },
        980:{
            items:3,
        },
        1000:{
          items:3,
        }
    }
  });

  $(".sect-what-slider").owlCarousel({
    autoplay:true, //Set AutoPlay to 3 seconds
    items : 1,
    itemsDesktop: false,
    itemsDesktopSmall: false,
    itemsTablet: false,
    itemsMobile: false,
    nav: true,
  });

  $('.rew-text-sn, .branch-text-sn').mCustomScrollbar({
    scrollButtons:{ enable: true },
    axis:'y'
  });

/**top-menu-mobile**/
  $(".btn-menu").click(function() {
   $(".main-menu-sn").slideToggle("slow");
    //alert();
  });

  $(".close-sn, .main-menu-sn  li a").click(function() {
    $(".main-menu-sn").slideToggle("slow");
  });
  
  $(window).resize(function(){
    if($(window).width()>751){
      $(".main-menu-sn").show();
    }
    if($(window).width()<751){
      $(".main-menu-sn").hide();
    }
  });
/**End-top-menu-mobile**/

  $("#tab-casein").easyResponsiveTabs({
    type: 'vertical', //Типы: default, vertical, accordion           
    width: 'auto', //auto или любое значение ширины
    fit: true, // 100% пространства занимает в контейнере
    activate: function() {} // Функция обратного вызова, используется, когда происходит переключение вкладок
  });

  $(".main-link-servic").click(function() {
    $(".main-branch-sn, .main-link-servic").toggleClass('active');
  });

  $(".name-casein span").click(function() {
    $(".main-list-main-sn").toggleClass('active');
    $(".name-casein").toggleClass('active');

  });

 
  
});//end ready
 

		
