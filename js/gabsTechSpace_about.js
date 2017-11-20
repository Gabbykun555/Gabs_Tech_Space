
$(document).ready(function() {
  $('.nav-link').on('click', function() {
    $(this).parents().siblings().children().removeClass('active');
    $(this).addClass('active');
  });
  
  $('.mobile-a').on('click', function() {
    $(this).parents().siblings().children().removeClass('selected');
    $(this).addClass('selected');
  });

 /*
  $('.menu-icon').on('click', function() {
    $('.nav-bar').toggleClass('hide-nav');
    $('.main').toggleClass('expand-main');
    $('h1').toggleClass('shift-h1');
    $('.button').toggleClass('shift-h1');
  }); */
    
  $('.mobile-menu-icon').on('click', function() {
    $('body').toggleClass('purple-background');
  });
    
  $('.mobile-menu-icon').on('click', function() {
    $('.mobile-dropdown').slideToggle(200);
  });
});