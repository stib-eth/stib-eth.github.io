$(document).ready(function () {
	$('.n1').click(function (event) {
		event.preventDefault();
		$('body,html').animate({ scrollTop: $('#p2p').offset().top - 100 }, 500);
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
		$('body,html').animate({ scrollTop: $('#team').offset().top }, 500);
	});
	$('.n5').click(function (event) {
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
	//  change language 
	//  get ipa local 
	// fetch('https://freegeoip.app/json/')
	// 	.then(res => res.json())
	// 	.then(json => {
	// 		const { country_code } = json;
	// 		if (country_code === 'VN') {
	// 			$("#currentLang").html(`<span>VN</span> <img src="img/svg/down-arrow.svg" alt=""
	// 		class="img-lang-current img-lang">`)
	// 			vnlang.addClass("active");
	// 			enlang.removeClass("active");
	// 			SetVnLang();
	// 		}
	// 	})
	// 	.catch(err => {
	// 		console.log(err);

	// 	})


	const menu1 = $('.dual-lang');
	const enlang = $("#en-lang");
	const vnlang = $("#vn-lang");
	var Vietnam = {
		header: {
			p2p: "Giao Dịch P2P",
			token: "Tokens",
			charity: "Từ Thiện",
			team: "Đội Ngũ",
			contact: "Liên Hệ",
			title: "Giao Dịch (mua/bán + cho vay/mượn) P2P trên Hợp Đồng Thông Minh StiB"
		},
		tokens:
		{
			learn: "TÌM HIỂU THÊM",
			instruction: "Sti' là tên của Token trong hệ sinh thái của StiB và người giữ token sẽ có quyền lợi trong nghiên cứu, dịch vụ và các sản phẩm trong tương lai.Sử dụng nhiều phương pháp thông minh hơn, chủ sở hữu StiB Tokens đều có cơ hội đầu tư thay vì bị quyết định theo phương thức quay số truyền thống hoặc phải tham gia vào trò chơi may rủi mà người thắng cuộc là người nhanh tay nhất. "
		},
		contact: {
			phone: "(+84) 906 097 525",
			local: "Saigon, Vietnam",
			term: "Điều Khoản",
			privacy: "Bảo Mật"
		}
	}
	var header = Vietnam.header;
	var token = Vietnam.tokens;
	var contact = Vietnam.contact;
	$(menu1).click(function (e) {
		if ($("#optionLang").hasClass("active")) {
			$("#optionLang").removeClass("active")
			$(".img-lang-current").removeClass("active")
		} else {
			$("#optionLang").addClass("active")
			$(".img-lang-current").addClass("active")
		}
		if (vnlang.has(e.target).length != 0) {
			$("#currentLang").html(`<span>VN</span> <img src="img/svg/down-arrow.svg" alt=""
			class="img-lang-current img-lang">`)
			vnlang.addClass("active");
			enlang.removeClass("active");
			SetVnLang();
		}
		if (enlang.has(e.target).length != 0) {
			SetEnLang();
		}
	});
	function SetVnLang() {
	
		$(".n1").html(header.p2p)
		$(".n2").html(header.token)
		$(".n3").html(header.charity)
		$(".n4").html(header.team)
		$(".n5").html(header.contact)
		$(".swap-div").html(
			`<img src="img/back/banner pr fb-01.png" />
			<div class="button">
				<p >Giao Dịch/cho vay-mượn P2P trên Hợp Đồng Thông Minh StiB</p>
				<a href="https://m.stib.co/" class="example_e" target="blank"> TÌM HIỂU THÊM</a>
			</div>`
		)
		$(".example_e , .button_e").html("TÌM HIỂU THÊM")
		$(".tieude-2").html(`<p>'Sti' là tên của Token trong hệ sinh thái của StiB và người giữ token sẽ có
		quyền lợi trong nghiên cứu, dịch vụ và các sản phẩm trong tương lai. Sử dụng nhiều phương pháp thông minh hơn, chủ sở hữu StiB Tokens đều có cơ hội đầu
				tư thay vì bị quyết định theo phương thức quay số truyền thống hoặc phải tham
				gia vào trò chơi may rủi mà người thắng cuộc là người nhanh tay nhất.
			</p>`)
			$(".title-team h1").html("ĐỘI NGŨ")
			$(".title-contact h1").html("LIÊN HỆ")
			$("#phone-number").html(" <span>(+84) </span>906 097 525")
			$(".localvn").html(contact.local) 
			$(".link_ToS").html(contact.term)
			$(".link_Pri").html(contact.privacy)
			$(".tooltip").html("Phóng To")
			$("#img-future,#img-roadmap-mobile").attr("src","img/back/roadmap-vn.png");
			$("#banner_img").attr("src","img/back/banner pr fb-01.png"); 
			$("#link-telegram").attr("href", "https://t.me/StiBvietnam")
			  
	}
	function SetEnLang() {
		location.reload();
	}
	$(document).click(function (e) {
		if (menu1.has(e.target).length == 0) {
			$("#optionLang").removeClass("active")
		}
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
// $('.owl-1').owlCarousel({
// 	loop: true,
// 	margin: 20,
// 	autoplay: 3000,
// 	responsive: {
// 		0: {
// 			items: 1
// 		},
// 		// 768:{
// 		// 	items:1
// 		// },
// 	}
// });

