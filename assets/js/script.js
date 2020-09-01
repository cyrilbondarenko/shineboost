$(document).ready(function(){
  var z;
$('.search .sub-search span').on('click', function(){
  $('.search input').val($(this).text());
});
$('.search .cross').on('click', function(){
  $('.search input').val('');
});
$('footer .subscribe button').on('click', function(){
  let email = $(this).parent().find('input').val();
  if (email.length >= 0
  && (email.match(/.+?\@.+/g) || []).length !== 1) {
    let email = $(this).parent().find('input').addClass('incorrect');
    $(this).addClass('incorrect');
  } else {
    $('footer .subscribe .unsubscribe').css('display', 'none');
    $('footer .subscribe .success').css('display', 'flex');
    $(this).removeClass('incorrect');
    $(this).parent().find('input').removeClass('incorrect');
  }
});
$('footer .subscribe a').on('click', function(e){
  e.preventDefault();
  $('footer .subscribe .unsubscribe').css('display', 'flex');
  $('footer .subscribe .success').css('display', 'none');
});
oldpos = $('header').css('position');
oldcolor = $('header').css('background-color');
window.onscroll = function() {
  posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  if (posTop > 0 || z == 1) {
    $('header').css('position', 'fixed');
    $('header').css('background-color', '#1F1F2E');
  } else {
    $('body').css('margin-top', '0px');
    $('header').css('position', oldpos);
    $('header').css('background-color', oldcolor);
  }
}
$('header .burger').click(function(){
  z = 1;
  $('header').css('position', 'fixed');
  $('header').css('background-color', '#1F1F2E');
  $('header .container > ul').slideDown();
  $('header .burger').css('display', 'none');
  $('header .close').css('display', 'flex');
  $('header .search').css('display', 'flex');
  $('body').css('overflow', 'hidden');
});
$('header .close').click(function(){
  z = 0;
  $('header .container > ul').slideUp();
  $('header .burger').css('display', 'flex');
  $('header .close').css('display', 'none');
  $('header .search').css('display', 'none');
  $('body').css('overflow', 'auto');
});
$('.sub-games a').click(function(){
  $('.sub-catalog .selected').removeClass('selected');
  game = $(this).attr('class');
  $(this).addClass('selected');
  $('.sub-catalog > .' + game).addClass('selected');
});
if ($(window).width() <= '1130'){
  $('header .container > ul > li a').click(function(){
    z = 0;
    $('header').css('position', oldpos);
    $('header').css('background-color', 'transparent');
    $('header .container > ul').slideDown();
    $('header .burger').css('display', 'flex');
    $('header .close').css('display', 'none');
    $('header .search').css('display', 'none');
    $('body').css('overflow', 'auto');
  });
}
$('.cookies > a').click(function(e){
  e.preventDefault();
  $('.cookies').css('display', 'none');
});
$('.reviews-slider').slick({
  infinite: true,
  vertical: true,
  nextArrow: $('.slider-block .next'),
  prevArrow: $('.slider-block .prev'),
  responsive: [
      {
        breakpoint: 1130,
        settings: {
          vertical: false,
          dots: true
        }
      },
    ]
});
$('.loading').click(function(e){
  e.preventDefault();
  $(this).html('<div class="load-1"></div><div class="load-2"></div><div class="load-3"></div><div class="load-4"></div>');
});
$('.toTop').click(function(e){
  e.preventDefault;
  $('body,html').animate({scrollTop: 0}, 750);
});
});
