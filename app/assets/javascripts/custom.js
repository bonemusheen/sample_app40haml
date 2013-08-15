function updateCountdown() {
  var remaining = 140 - $('#micropost_content').val().length;
  $('.countdown').text(remaining + '/140');
}

$(document).ready(function() {
  updateCountdown();
  $('#micropost_content').on('change', updateCountdown);
  $('#micropost_content').on('keyup', updateCountdown);
});