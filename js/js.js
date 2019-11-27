$(document).ready(function () {
	$('.n1').click(function (event) {
		event.preventDefault();
		$('body,html').animate({ scrollTop: $('#tokens').offset().top - 100 }, 500);
		// if ($('#topnav').hasClass('active')) {
		// 	$('#topnav').removeClass('active');
		// }
	});
	$('.n2').click(function (event) {
		event.preventDefault();
		if ($('#topnav').hasClass('active')) {
			$('#topnav').removeClass('active');
		}
		$('body,html').animate({ scrollTop: $('#future').offset().top - 10 }, 500);
	});
	$('.n3').click(function (event) {
		event.preventDefault();
		if ($('#topnav').hasClass('active')) {
			$('#topnav').removeClass('active');
		}
		$('body,html').animate({ scrollTop: $('#charity').offset().top }, 500);
	});
	$('.n4').click(function (event) {
		event.preventDefault();
		if ($('#topnav').hasClass('active')) {
			$('#topnav').removeClass('active');
		}
		$('body,html').animate({ scrollTop: $('#contact').offset().top }, 500);
	});
	$('#future .tooltip').click(function (event) {
		event.preventDefault();
		$('#modal').addClass('active');
	})
	$('.img-toggler-close').click(function (event) {
		event.preventDefault();
		$('#modal').removeClass('active')
	})
})
for (let index = 0; index < $('.q-li').length; index++) {
	$('.q-li').eq(index).click(function (event) {
		event.preventDefault();
		for (let j = 0; j < $('.q-li').length; j++) {
			if ($('.q-li').eq(j).hasClass('active')) {
				$('.q-li').eq(j).removeClass('active');
			}
		}

		for (let k = 0; k < $('.q-li').length; k++) {
			if ($('.answers-p').eq(k).hasClass('move-left-in')) {
				$('.answers-p').eq(k).removeClass('move-left-in');
			}
		}

		$('.q-li').eq(index).addClass('active');
		$('.answers-p').eq(index).addClass('move-left-in');
	})
}
$('.owl-1').owlCarousel({
	loop: true,
	margin: 20,
	autoplay: 3000,
	responsive: {
		0: {
			items: 1
		},
		// 768:{
		// 	items:1
		// },
	}
});

