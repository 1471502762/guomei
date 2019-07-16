; !function ($) {

	// 获取地址栏的id
	var picid = location.search.substring(1).split('=')[1];
	//渲染
	$.ajax({
		type: "POST",
		url: "http://10.31.158.35/guomei/php/details.php",
		async: true,
		dataType: 'json',
		data: {
			sid: picid
		},
	}).done(function (glassdata) {
		let $jqzoomimg = $('.pic-big .jqzoom').find("img");//小图
		let $magnifyingimg=$('.zoomdiv').find("img");// 大图
		let $jpichover = $('.j-pichover ul');//下 小图片
		let $prdimgitemimg = $('.prd-img-item-img');//商品颜色图片
		let $urlarr=glassdata.url.split(',');
		$smallglass = '';
		$smallicons='';
		$itemimg='';
		$list='';
		$.each($urlarr,function(index,value){
			// 切换图片
			$list+=`<li>
			<a href="javascript:;">
				<img rpic="//gfs.gomein.net.cn/T1f.DsB4Av1RCvBVdK_800_pc.jpg" bpic="//gfs.gomein.net.cn/T1f.DsB4Av1RCvBVdK_360.jpg" alt="【8包*100抽】江娃原木抽纸整箱家庭装婴儿抽取式面巾纸(默认)第2张高清大图" title="【8包*100抽】江娃原木抽纸整箱家庭装婴儿抽取式面巾纸(默认)第2张高清大图" src="${value}" class="" width="50" height="50">
			</a>
		</li>`
		});
		// 小图
		$jqzoomimg.attr({
			src:`${glassdata.href}`,
			sid:`${glassdata.id}`
		});
		// //商品颜色图片
		$itemimg += `<img src="${glassdata.href}" gome-src="//gfs17.gomein.net.cn/T1tzKjB7b_1RCvBVdK_60.jpg" alt="橡胶杆中性笔0.38mm#2支装">
		<span>${glassdata.describe}</span>`;
		// 大图
		$magnifyingimg.attr("src",`${$urlarr[0]}`);
		$prdimgitemimg.prepend($itemimg);
		$jpichover.html($list);
	});


	// 放大镜效果
	!function($){
		let $jqzoom=$('.jqzoom');
		let $df=$('.zoomdiv');//大放
		const $xf=$('.jqZoomPup');//小放
		let $bpic=$('.zoomdiv').find("img");// 大图
		let $spic=$('.jqzoom').find("img");//小图
		$jqzoom.mouseover(function(){
			// 显示放大镜
			$df.css('visibility','visible');
			$xf.css('visibility','visible');
			// 求小放的比例
			$widthbiliw=$spic.width() * $df.width()/ $bpic.width();
			$widthbilih=$spic.height() * $df.height() / $bpic.height();
			$xf.width($widthbiliw);
			$xf.height($widthbilih);
			 //求比例
			 let $bili = $df.width() /  $xf.width();
			$(this).on("mousemove",function(ev){
				let l = ev.pageX- $xf.width()/ 2;
				let t = ev.pageY- $xf.height() / 2; 
				let ll = ev.pageX-$('.jqzoom').offset().left- $xf.width()/ 2;
				let tt = ev.pageY-$('.jqzoom').offset().top- $xf.height() / 2; 
				if (ll < 0) {
					ll = 0;
				} else if (ll >=( $spic.width() - $xf.width() - 2)) {
					ll = $spic.width() - $xf.width() - 2;
				};
				if (tt < 0) {
					tt = 0;
				} else if (tt >= $spic.height() - $xf.height() - 2) {
					tt = $spic.height() - $xf.height() - 2;
				};
				$xf.css({top:tt,left:ll});
				$bpic.css({top:-tt* $bili,left:-ll * $bili});
			})
		});
		$jqzoom.mouseout(function () {
			$df.css('visibility','hidden');
			$xf.css('visibility','hidden');
		});









		//小图切换
		let $jpichover = $('.j-pichover ul');
		$jpichover.on("mouseover","li",function(){
			let $imgsrc=$(this).find("img").attr("src");
			$jqzoom.find('img').attr("src",$imgsrc);
			$df.find("img").attr("src",$imgsrc)
		});


		//点击箭头进行切换
		let $num=5;
		// 点击右箭头
		$('.pic-btn-r').on("click",function(){
			if($jpichover.find("li").length>$num){
				$num++;
				$jpichover.animate({
					left:-($num-5)*($jpichover.find("li").eq(0).innerWidth()+10)
				});
			}
		});
		// 点击左箭头
		$('.pic-btn-l').on("click",function(){
			if($jpichover.find("li").length>=$num&&$num>5){
				$num--;
				$jpichover.animate({
					left:-($num-5)*($jpichover.find("li").eq(0).innerWidth()+10)
				});
			}
		});
		

	}(jQuery);





	// 点击加入购物车
	!function($){
		const $jgACbtn=$('.j-gACbtn');//减数量
		const $jgACbtnA=$('.j-gACbtnA');//加数量
		const $jgACvalinput=$('.j-gACval-input');//数量
		const $btnaddcart=$('.btn-addcart');//加入购物车按钮
		// 加数量
			let num=1;
			$jgACbtnA.on("click",function(){
				
			$jgACvalinput.val(function(){
				return ++num;
			});
			if(num>1){
				// 显示减号按钮
					$jgACbtn.removeClass("disab"); 
			}
		});
		// 减数量
			$jgACbtn.on("click",function(){
				
				 if(num>1){
				$jgACvalinput.val(function(){
					return --num;
				});
			};
			if(num==1){
				// 关闭减号按钮
				$jgACbtn.addClass("disab"); 
			}
			});
		







		//购物车的操作
    let arrsid = [];  //商品的编号sid [1,3,5]
    let arrnum = [];  //商品的数量 [12,24,36]

    //如果cookie存在，获取cookie的值，并转换成数组。
    function cookievalue() {
		$.cookie('sid');
        if ($.cookie('sid') && $.cookie('num')) {
            arrsid = $.cookie('sid').split(',');//将获取的cookie转换成数组
            arrnum = $.cookie('num').split(',');
        }
    }
	$btnaddcart.on("click",function(){
        cookievalue();
		//当前按钮对应得sid，如果当前按钮对应得sid存在arrsid中，存在
		let $jqzoomimg = $('.pic-big .jqzoom').find("img");//小图
		let id = $jqzoomimg.attr('sid');//当前页面的sid
        if (arrsid.indexOf(id) === -1) {//不存在
            arrsid.push(id);
			arrnum.push($jgACvalinput.val());
			$.cookie('sid', arrsid.toString(),{ expires: 7 });
			$.cookie('num', arrnum.toString(),{ expires: 7 });
		}else{//存在，数量累计
           let sum=Number(arrnum[arrsid.indexOf(id)]) + Number($jgACvalinput.val());
           arrnum[arrsid.indexOf(id)]=sum;
		   $.cookie('num', arrnum.toString(),{ expires: 7 });
		}
    });
	}(jQuery);
}(jQuery);
