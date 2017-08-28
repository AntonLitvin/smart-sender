$(function() {

// toggle button
$('.toggle-btn').on('click', function() {
	$(this).toggleClass('on');
	$('.menu-top, .menu-bottom, .sidebar-menu, .langswitcher, .logo').toggleClass('narrow');
	return false;
});

$(window).resize(function(){
	narrowSidebar();
	$('.toggle-btn').removeClass('on');
});


function narrowSidebar() {
	if ($(window).width() < 1200) {
		$('.menu-top, .menu-bottom, .sidebar-menu, .langswitcher, .logo').addClass('narrow');
	} else {
		$('.menu-top, .menu-bottom, .sidebar-menu, .langswitcher, .logo').removeClass('narrow');
	}
}

narrowSidebar();


});
