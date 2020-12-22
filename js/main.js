$(function () {
    $(window).scroll(function () {
      var scrollVal = $(this).scrollTop();
      const $chi = $('.chi');
      const $grass = $('.grass');

      // $grass.css('bottom', `${-200 + scrollVal}px`)

      if(scrollVal <= 300){
        $grass.css('bottom', `${-300 + scrollVal}px`)
      }
      if(scrollVal >= 600){
        $grass.css('left', `${scrollVal-600}px`)
      }

      // if(scrollVal >= 100){
      //   $grass.removeClass('down');
      //   // $('.chi').addClass('scroll_100')
      // }else {
      //   // $('.chi').removeClass('scroll_100')
      // }
      console.log(scrollVal)
    });
  });