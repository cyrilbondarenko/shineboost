$(document).ready(function(){
  $('#step-1').click(function(){
    $('.breadcrumbs .container a').css('color', '#B2B2C6');
    $('.breadcrumbs .container a').css('font-weight', 'normal');
    $('.step-1').css('display', 'none');
    $('.step-2').css('display', 'flex');
    $('.breadcrumbs .container .step-2-bread').css('color', 'white');
    $('.breadcrumbs .container .step-2-bread').css('font-weight', 'bold');
  });
  $('#step-2').click(function(){
    if ($('#check1').is(':checked')) {
      $('.breadcrumbs .container a').css('color', '#B2B2C6');
      $('.breadcrumbs .container a').css('font-weight', 'normal');
      $('.step-2').css('display', 'none');
      $('.step-3').css('display', 'flex');
      $('.breadcrumbs .container .step-3-bread').css('color', 'white');
      $('.breadcrumbs .container .step-3-bread').css('font-weight', 'bold');
    }
  });
  $('.select > .selected').click(function(){
    if ($(this).parent().find('.sub-selects').is(':hidden')) {
      $(this).parent().find('.sub-selects').css('display', 'flex');
      $(this).find('.arrow').css('transform', 'rotate(-90deg)');
    } else {
      $(this).parent().find('.sub-selects').css('display', 'none');
      $(this).find('.arrow').css('transform', 'rotate(90deg)');
    }
  });
  $('.select .sub-selects > span').click(function(){
    select = $(this).text();
    $(this).parent().parent().find('> .selected span').text(select);
    $(this).parent().find('.selected').removeClass('selected');
    $(this).addClass('selected');
    $(this).parent().css('display', 'none');
    $(this).find('.arrow').css('transform', 'rotate(-90deg)');
    $('.select > .selected .arrow').css('transform', 'rotate(90deg)');
  });
  $('.select .sub-selects > div').click(function(){
    select = $(this).html();
    $(this).parent().parent().find('> .selected div').html(select);
    $(this).parent().find('.selected').removeClass('selected');
    $(this).addClass('selected');
    $(this).parent().css('display', 'none');
    $(this).find('.arrow').css('transform', 'rotate(-90deg)');
    $('.select > .selected .arrow').css('transform', 'rotate(90deg)');
  });
  $('.step-1 .qty input').on('input', function(){
    val = $(this).val();
    price = $(this).parent().parent().find('.price').text();
    price = price.slice(1);
    price = (Number(price) * val).toFixed(2);
    $(this).parent().parent().find('.total span').text('$' + price);
  });
  $('.step-1 table .close').click(function(){
    $(this).parent().parent().remove();
  });
});
