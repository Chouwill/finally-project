$(function(){
  let is_open = 0;
  // $('.navbar').slideUp();
  $('.menu-icon').click(function(){
      // if(is_open == 0){
      //     // $('.navbar').css("display","block");
      //     $('.navbar').slideDown();
      //     is_open = 1;
      // }else{
      //     $('.navbar').slideUp();
      //     is_open = 0;
      // }
      $('.navbar').slideToggle();
  })
})