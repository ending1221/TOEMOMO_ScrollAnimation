$(function () {
    $(window).scroll(function () {
      var scrollVal = $(this).scrollTop();
      const $chi = $('.chi');
      const $grass = $('.grass');
      
      if(scrollVal >= 100){
        $('.chi').addClass('scroll_100')
      }else {
        $('.chi').removeClass('scroll_100')
      }
      console.log(scrollVal)
    });
  });