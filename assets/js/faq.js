$(document).ready(function(){
  $('.question').click(function(){
    if ($(this).parent().find('.answer').is(':hidden')) {
      $(this).parent().find('.answer').slideDown(500);
      $(this).css('color', '#B2B2C6');
      $(this).css('border-bottom', '1px dashed #B2B2C6');
      $(this).find('img').css('transform', 'rotate(270deg)');
    } else {
        $(this).parent().find('.answer').slideUp(500);
        $(this).css('color', 'white');
        $(this).css('border-bottom', '1px dashed white');
        $(this).find('img').css('transform', 'rotate(90deg)');
    }
  });
});
