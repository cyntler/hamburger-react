$(document).ready(function() {

	$('.icon').click(function() {
		$(this).next('.tabs-container').toggleClass('active');

    $('.tab-title').click(function() {
      $(this).parent().find('.tab-title').removeClass('active');
      $(this).parent().find('.tab-content').hide();

      $(this).addClass('active');
      $($(this).data('tab')).show();
    });
	});

});
