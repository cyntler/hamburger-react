$(document).ready(function() {

  $('html').click(function() {
    $('.tabs').hide();
    $('.icon').removeClass('animate');
  });

  $('.tabs').click(function(event) {
    event.stopPropagation();
  });

	$('.icon').click(function(event) {
    event.stopPropagation();

    var _this = $(this);
    var tabs = $(this).next('.tabs');

    $('.icon').each(function() {
      if($(this)[0] != _this[0]) {
        $(this).removeClass('animate');
      }
    });

    $('.tabs').each(function() {
      if($(this)[0] != tabs[0]) {
        $(this).hide();
      }
    });

    _this.toggleClass('animate');
    tabs.toggle();

    $('.tab-title').click(function() {
      var tab = $(this).parent();

      tab.find('.tab-title').removeClass('active');
      tab.find('.tab-content').hide();

      $(this).addClass('active');
      tab.find($(this).data('tab')).show();
    });
	});

});
