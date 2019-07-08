; !function ($) {
	//banner数据
	$.ajax({
		url: 'php/banner.php',
		dataType: 'json'
	}).done(function (bannerdata) {
		$.each(bannerdata, function (index, value) {
			var $bannerstr = '<ul>';

		});
	});

	//lunbo数据
	$.ajax({
		url: 'php/banner.php',
		dataType: 'json'
	}).done(function (bannerdata) {
		$.each(bannerdata, function (index, value) {
			var $bannerstr = '<ul>';

		});
	});
	//tab切换数据
	$.ajax({
		url: 'php/banner.php',
		dataType: 'json'
	}).done(function (bannerdata) {
		$.each(bannerdata, function (index, value) {
			var $bannerstr = '<ul>';

		});
	});
}(jQuery);

!function () {
	//banner效果

}(jQuery);

!function () {
	//lunbo效果

}(jQuery);

!function () {
	//小效果

}(jQuery);



!function () {
	const $handler = $('.handler');//所有的楼梯
	const $floor = $('.floor');//所有的楼层
	//楼梯效果
	const $elevator = $('#elevator');
	$(window).scroll(function () {
		//楼梯显示隐藏
		$heightall = $('body').height();
		if ($(window).scrollTop() >= 1400 && $(window).scrollTop() <= $heightall - 1000) {
			$elevator.show();
		} else {
			setTimeout(function () {
				$elevator.hide();
			}, 500)
		};

		// 滚动条事件 
		$floor.each(function (index, ele) {
			let $floortop = $floor.eq(index).offset().top;
			if ($floortop >= $(window).scrollTop()) {
				$handler.eq(index).addClass('current').siblings().removeClass('current');
				return false;
			}
		});
	});
	// 鼠标经过楼梯
	$handler.hover(function () {
		$(this).addClass('current').siblings().removeClass('current');
	});

	$handler.on("click", function () {
		$('html,body').animate({
			scrollTop: $floor.eq($(this).index()).offset().top
		});
	});


	// 回到顶部
	const $fl_gotoli = $('.fl_goto li');
	const $flTop = $('.fl_goto .flTop');//回到顶部
	const $fl_bottom = $('.fl_goto .fl_bottom');//回到顶部
	$fl_gotoli.hover(function () {
		$(this).find("a").addClass('hover').siblings().removeClass('hover');
	}, function () {
		$(this).find("a").removeClass('hover');
	});
	$flTop.on("click", function () {
		$('html,body').animate({
			scrollTop: 0
		});
	});
	$fl_bottom.on("click", function () {
		$('html,body').animate({
			scrollTop: $('body').height(),
		});
	})
}(jQuery);