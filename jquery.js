$(document).ready(function (){
  $('section').on('click', 'h2', function(){
  $(this).closest('section').find('expand').fadeToggle();
});
});
