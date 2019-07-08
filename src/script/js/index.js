; !function ($) {
	//banner数据
	// $.ajax({
	// 	url: 'p',
	// 	dataType: 'json'
	// }).done(function (bannerdata) {
	// 	$.each(bannerdata, function (index, value) {
	// 		var $bannerstr = '<ul>';

	// 	});
	// });

	//lunbo数据
	$.ajax({
		type: "POST",
		url: "http://localhost/guomei/php/index1.php",
		async:true,
		dataType:'json',
	}).done(function (bannerdata) {
		// console.log(bannerdata);
				let $largr_icon=$('.largr_icon');
				let $small_button=$('.small_button');
				$jegouli='';
				$jegouol='';

			$.each(bannerdata, function (index, $value) {
				// console.log($value.id);
				// console.log($value.url);	
				$jegouli+=`
				<li style="background:${$value.background}">
							<a href="//prom.gome.com.cn/html/prodhtml/topics/201906/28/1152022682.html?intcmp=sy-1000060757-1" data-code="1000060757-1"
							 target="_blank">
								<img class="lazyloading" src=${$value.url} alt="" title="" width="100" height="100">
							</a>
							<span class="promotion_tags">
								<img src="//app.gomein.net.cn/images/grey.gif">
							</span>
				</li>
				`;
				$jegouol+=`
				<li class="">
							<a></a>
				</li>
				`

			});
			$largr_icon.html($jegouli);
			$small_button.html($jegouol);
			
		});
	//tab切换数据
	// $.ajax({
	// 	url: 'php/banner.php',
	// 	dataType: 'json'
	// }).done(function (bannerdata) {
	// 	$.each(bannerdata, function (index, value) {
	// 		var $bannerstr = '<ul>';

	// 	});
	// });
}(jQuery);

!function () {
	//banner效果

}(jQuery);

!function ($) {
	//lunbo效果
	$.fn.extend({
        lunbo:function(option){
			// 遍历DOM元素
            $(this).each(function(index,ele){
                //获取当前DOM元素的子元素
                let $qh=null;

                //用于存当前li的索引
                let $num=null;
                // 默认属性
                let $obj={
					$bannerol:$(ele).find('.edit-mode'),
					$bannerul:$(ele).find('.focus_box'),
					$left:$(ele).find('.left'),
					$right:$(ele).find('.right'),
                    type:'click',//事件类型
                    qihuantype:'display',//图片切换形式
                    jtxianshi:true,//是否显示箭头
                    zdswitchover:true//是否自动切换  自动：true  'true' 时间 不自动切换： false 'false'
                };
                // 深拷贝
				$.extend(true,$obj,option);
                // 判断切换类型
                if($obj.type==='click'||$obj.type!=='mouseover'){
					// 给当前li添加事件
					
                    $obj.$bannerol.find("li").on('click',function(){
                        // 把当前li的索引赋给$num
                        $num=$(this).index();
                        qiehuan();
                    });
                }else{
                    // 给当前li添加事件
                    $obj.$bannerol.find("li").on('mouseover',function(){
                        // 把当前li的索引赋给$num
                        $num=$(this).index();
                        qiehuan();
                    });
                };
                // 鼠标经过  显示箭头
                    $(this).on("mouseover",function(){
                        xs();
                        // 鼠标经过 停止切换
                        clearInterval($qh);
                    });
                    // 鼠标移出  隐藏箭头
                    $(this).on("mouseout",function(){
                        jtyc();
                        // 鼠标移出 继续切换
                        $qh=setInterval(function(){
                            djright();
                        },typeof $obj.zdswitchover==='number'?$obj.zdswitchover:4000)//判断时间是否是数字 
                    
                    });
                // 点击左箭头进行图片切换
                $obj.$left.on("click",function(){
                    djleft();
                });

                 // 点击右箭头进行图片切换
                 $obj.$right.on("click",function(){
                    djright();
                });
                // 是否自动切换
                if($obj.zdswitchover===true ||$obj.zdswitchover==='true' || typeof $obj.zdswitchover==='number'){
                    $qh=setInterval(function(){
                        djright();
                    },typeof $obj.zdswitchover==='number'?$obj.zdswitchover:4000)//判断时间是否是数字 
				}
				



                // 切换形式
                function qiehuan(){
                    // 直接切换
                    if($obj.qihuantype==='display'|| $obj.qihuantype!=='opacity'){
                        $obj.$bannerol.find("li").eq($num).addClass('cur').siblings().removeClass('cur');
                        $obj.$bannerul.find("li").eq($num).show().siblings().hide();
                    }else{
					//透明度切换
                        $obj.$bannerul.find("li").eq($num).css('transition','all 1s');
                        $obj.$bannerol.find("li").eq($num).addClass('cur').siblings().removeClass('cur');
                        $obj.$bannerul.find("li").eq($num).show().siblings().hide();
                    }
                    
                };

                //判断箭头是否显示
                function xs(){
                    if($obj.jtxianshi===true||$obj.jtxianshi==='true'){
                        jtxs();
                     }
                }


                // 箭头显示
                function jtxs(){
                    $obj.$left.show();
                    $obj.$right.show();
                    // $obj.$left.css('display','block');
                    // $obj.$right.css('display','block');
                }


                // 箭头隐藏
                function jtyc(){
                    $obj.$left.hide();
                    $obj.$right.hide();
                    // $obj.$left.css('display','none');
                    // $obj.$right.css('display','none');
                };

                //点击左箭头进行图片切换
                function djleft(){
                    $num--;
                    if($num<0){
                        $num=$obj.$bannerol.find("li").length-1;
                    }
                    qiehuan();
                };

                //点击右箭头进行图片切换
                function djright(){
                    $num++;
                    if($num>$obj.$bannerol.find("li").length-1){
                        $num=0;
                    }
                    qiehuan();
                }
            })
        }
    })
}(jQuery);

// !function ($) {
// 	//小效果
// 	const $gometoprightli=$('#gome-top-right li');
// 	const $gometoprightdro=$('#gome-top-right .public-dropdown');
// 	$gometoprightli.hover(function(){
		
// 	})
// }(jQuery);



!function ($) {
	const $handler = $('.handler');//所有的楼梯
	const $floor = $('.floor');//所有的楼层
	//楼梯效果
	const $elevator = $('#elevator');
	// 滚动条事件
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

		// 滚动条事件   楼层变化楼梯跟着变化
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
	//点击楼梯  调到相对应的楼层
	$handler.on("click", function () {
		$('html,body').animate({
			scrollTop: $floor.eq($(this).index()).offset().top
		});
	});


	// 回到顶部
	const $fl_gotoli = $('.fl_goto li');
	const $flTop = $('.fl_goto .flTop');//回到顶部
	const $fl_bottom = $('.fl_goto .fl_bottom');//回到底部
	// 鼠标经过
	$fl_gotoli.hover(function () {
		$(this).find("a").addClass('hover').siblings().removeClass('hover');
	}, function () {
		$(this).find("a").removeClass('hover');
	});
	//回到顶部
	$flTop.on("click", function () {
		$('html,body').animate({
			scrollTop: 0
		});
	});
	//回到底部
	$fl_bottom.on("click", function () {
		$('html,body').animate({
			scrollTop: $('body').height(),
		});
	})
}(jQuery);