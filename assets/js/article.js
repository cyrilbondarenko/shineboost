$(document).ready(function(){
  $('.gallery').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  infinite: false,
  prevArrow: $('.gallery-block .prev'),
  nextArrow: $('.gallery-block .next'),
  responsive: [
      {
        breakpoint: 1130,
        settings: {
          dots: true,
          infinite: true,
        }
      },
    ]
});
$('.news .slider').slick({
  infinite: false,
slidesToShow: 4,
slidesToScroll: 1,
autoplay: false,
arrows: true,
nextArrow: $('.news .next'),
prevArrow: $('.news .prev'),
responsive: [
    {
      breakpoint: 1130,
      settings: {
        slidesToShow: 3,
        dots: true,
        infinite: true,
      }
    },
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 2,
        dots: true,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        dots: true,
        infinite: true,
      }
    },
  ]
});
$('.video').click(function(){
  src = $(this).attr('video');
  $(this).html('<div class="thumb-wrap">' + src + '</div>');
});
});
