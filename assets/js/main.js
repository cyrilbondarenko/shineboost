$(document).ready(function(){
  $('.main .slider').slick({
  slidesToShow: 1,
  autoplaySpeed: 3000,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow: $('.main .arrows .left'),
  nextArrow: $('.main .arrows .right'),
  dots: true,
  speed: 750,
  appendDots: $('.main'),
  pauseOnHover: false,
  pauseOnFocus: false
});
$('.sell .top .slider').slick({
  infinite: false,
slidesToShow: 4,
slidesToScroll: 1,
autoplay: true,
arrows: true,
nextArrow: $('.sell .top .next'),
prevArrow: $('.sell .top .prev'),
responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        infinite: true,
        centerPadding: '70px',
      }
    },
  ]
});
$('.sell .sale .slider').slick({
infinite: true,
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
arrows: true,
nextArrow: $('.sell .sale .next'),
prevArrow: $('.sell .sale .prev'),
dots: true
});
$('.reviews .slider').slick({
  infinite: false,
slidesToShow: 3,
slidesToScroll: 1,
autoplay: true,
arrows: true,
dots: true,
nextArrow: $('.reviews .container > .next'),
prevArrow: $('.reviews .container > .prev'),
appendDots: $('.reviews .container'),
responsive: [
    {
      breakpoint: 1000,
      settings: {
        infinite: true,
        slidesToShow: 2,
        dots: true
      }
    },
    {
      breakpoint: 700,
      settings: {
        infinite: true,
        slidesToShow: 1
      }
    },
  ]
});
  $('.news .slider').slick({
    infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
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
});
