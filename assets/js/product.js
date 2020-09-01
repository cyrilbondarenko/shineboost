$(document).ready(function(){
  $( ".slider-range" ).slider({
      range: true,
      min: 1,
      max: 60,
      values: [ 10, 45 ],
      slide: function( event, ui ) {
        vui = ui;
        $(this).find('.value').text(i => ui.values[i]);
      }
    });
    $('.ui-slider-handle').append('<span class="value">45</span>');
    $('.ui-slider-handle:nth-child(even)').html('<span class="value">10</span>');
    $('.top .slider').slick({
      infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    nextArrow: $('.top .next'),
    prevArrow: $('.top .prev'),
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
  $('.select > .selected').click(function(){
    if ($(this).parent().find('.sub-selects').is(':hidden')) {
      $(this).parent().find('.sub-selects').css('display', 'flex');
      $(this).find('img').css('transform', 'rotate(-90deg)');
    } else {
      $(this).parent().find('.sub-selects').css('display', 'none');
      $(this).find('img').css('transform', 'rotate(90deg)');
    }
  });
  $('.select .sub-selects span').click(function(){
    select = $(this).text();
    $(this).parent().parent().find('> .selected span').text(select);
    $(this).parent().find('.selected').removeClass('selected');
    $(this).addClass('selected');
    $(this).parent().css('display', 'none');
    $('.select .arrow').css('transform', 'rotate(90deg)');
  });
  $('.options > div').click(function(){
    $('.options .selected').removeClass('selected');
    $(this).addClass('selected');
  });
  $('.tabs li').click(function(){
    $('.tabs .selected').removeClass('selected');
    $('.description .tab-text').removeClass('selected');
    name = $(this).attr('class');
    $(this).addClass('selected');
    $('.description .container > .' + name).addClass('selected');
  });
  $('.mobile-select > span').click(function(){
    if ($('.mobile-select .sub').is(':hidden')) {
      $('.mobile-select .sub').css('display', 'flex');
      $('.mobile-select .arrow').css('transform', 'rotate(270deg)');
    } else {
      $('.mobile-select .sub').css('display', 'none');
      $('.mobile-select > span img').css('transform', 'rotate(90deg)');
    }
  });
  $('.mobile-select .sub span').click(function(){
    text = $(this).text();
    $('.mobile-select > span').html(text);
    tab = $(this).attr('class');
    $('.mobile-select .sub').css('display', 'none');
    $('.mobile-select .arrow').css('transform', 'rotate(90deg)');
    $('.description .tab-text').removeClass('selected');
    $('.description .container > .' + tab).addClass('selected');
  });
});
