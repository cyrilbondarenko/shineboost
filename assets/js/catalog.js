$(document).ready(function(){
  $('.sort').click(function(){
    if ($('.sort .sub').is(':hidden')) {
      $('.sort .sub').css('display', 'flex');
      $('.sort > img').css('transform', 'rotate(-90deg)');
      $(this).find(' > div > span').css('background-color', '#2E2E44');
      $('.sort .sub').css('background-color', '#2E2E44');
      $('.sort > div > span').css('border-bottom', '1px solid #383851');
    } else {
      $('.sort .sub').css('display', 'none');
      $('.sort > img').css('transform', 'rotate(90deg)');
      $(this).find(' > div > span').css('background-color', 'transparent');
      $('.sort .sub').css('background-color', 'transparent');
      $('.sort > div > span').css('border-bottom', '1px solid transparent');
    }
});
  $('.sort .sub span').click(function(){
    a = $(this).text();
    $('.sort > div > span').text(a);
    $('.sort > img').css('transform', 'rotate(90deg)');
    $('.sort .sub').css('display', 'none!important');
    $('.sort > div > span').css('background-color', 'transparent');
    $('.sort .sub').css('background-color', 'transparent');
    $('.sort > div > span').css('border-bottom', '1px solid transparent');
  });
  $('.button-container a').click(function(){
    $('.catalog-list').append('<div class="catalog-item"><div class="mask"><a href="#">Add to Cart</a><a href="#">More</a></div><img src="assets/images/catalog-item.jpg" alt=""><span class="name">Operation: Mechagon</span><span class="price">$40</span></div>');
    $('.catalog-list').append('<div class="catalog-item"><div class="mask"><a href="#">Add to Cart</a><a href="#">More</a></div><img src="assets/images/catalog-item.jpg" alt=""><span class="name">Operation: Mechagon</span><span class="price">$40</span></div>');
    $('.catalog-list').append('<div class="catalog-item"><div class="mask"><a href="#">Add to Cart</a><a href="#">More</a></div><img src="assets/images/catalog-item.jpg" alt=""><span class="name">Operation: Mechagon</span><span class="price">$40</span></div>');
    $('.catalog-list').append('<div class="catalog-item"><div class="mask"><a href="#">Add to Cart</a><a href="#">More</a></div><img src="assets/images/catalog-item.jpg" alt=""><span class="name">Operation: Mechagon</span><span class="price">$40</span></div>');
    setTimeout(function(){
      $('.button-container a').html('Show More');
    }, 1000);
  });
});
