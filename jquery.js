$(document).ready(function() {
  $('h2').on('click', function() {
    $('section').find('expand').slideToggle();
  });
});
