$(function() {

  // Translate selected project
  $('.project .menu li').unbind('click.main').bind('click', function (e) {
    e.preventDefault();
    window.location = $('#server')
      .data('locale') + '/' + $(this).find('.name').data('slug');
  });

});
