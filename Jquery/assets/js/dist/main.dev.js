"use strict";

$(function () {
  $('h1').css({
    color: 'tomato',
    fontSize: '42px',
    backgroundColor: 'blue'
  }); // toast.success('lorem ipsum');

  $(document).on('click', '.item', function () {
    $(this).css('color', 'red');
  });
});
$('.list h3').on('click', function () {
  $(this).next('div').slideToggle(200);
}); // document.addEventListener('DOMContentLoaded',function(e){
//     console.log(e);
//     console.log($('h1').text()); 
// })