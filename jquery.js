$(document).ready(function() {
  $('section').on('click', function() {
    $(this).closest('section').find('expand').slideToggle();
  });
});
