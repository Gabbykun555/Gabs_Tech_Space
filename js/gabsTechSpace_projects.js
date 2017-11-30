
$(document).ready(function() {
  $('.nav-link').on('click', function() {
    $(this).parents().siblings().children().removeClass('active');
    $(this).addClass('active');
  });
  
  $('.mobile-a').on('click', function() {
    $(this).parents().siblings().children().removeClass('selected');
    $(this).addClass('selected');
  });
    
    $('.panel').on('hover', function() {
        
    });
  
  $('.mobile-menu-icon').on('click', function() {
   // $('.main').toggleClass('expand');
    $('.mobile-dropdown').slideToggle(200);
  });
});