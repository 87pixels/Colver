$(window).fadeThis();
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var covertop = $('.cover').outerHeight();

    if (scroll > covertop) {
        $(".navbar-fixed-top").addClass("scrollingheader");
    } else {
        $(".navbar-fixed-top").removeClass("scrollingheader");
    }
});
$('a.mobilemenu').click(function(){
	$('.mainnav').slideToggle('fast');
});