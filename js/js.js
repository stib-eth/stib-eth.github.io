//  console.clear();
$(document).ready(function () {
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  $("figure").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  // scroll
  $(window).scroll(function (event) {
    var vitrihientai = $('html').scrollTop();
    // console.log(vitrihientai);
    if(vitrihientai > 800){
      $('.wrapper-scrolltop').addClass('show-scrolltop');
  }
  else{
      $('.wrapper-scrolltop').removeClass('show-scrolltop');
  }
  if(vitrihientai > 420){
      $('.img-responsive').addClass('adjust-width');
      $('.header-menu').addClass('adjust-height');
  }
  else{
      $('.img-responsive').removeClass('adjust-width');
      $('.header-menu').removeClass('adjust-height');
  }
  })
  $('.wrapper-scrolltop').click(function (event) {
    event.preventDefault();
    $('html').animate({ scrollTop: 0 }, 500);
  });
})

$('#icon_menu').click(function (event) {
  event.preventDefault();
  $("#menu_show").fadeToggle("slow");
  $('.container_header .sub_menu').addClass('active');
  $('#icon_menu_close').addClass('active');
  })
  $('#icon_menu_close').click(function (event) {
  event.preventDefault();
  $('.container_header .sub_menu').removeClass('active');
  $('#icon_menu_close').removeClass('active');
  })




