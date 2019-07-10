; !function ($) {

	// 获取地址栏的id
	var picid = location.search.substring(1).split('=')[1];
	//渲染
	$.ajax({
		type: "POST",
		url: "http://localhost/guomei/php/details.php",
		async: true,
		dataType: 'json',
		data: {
			sid: picid
		},
	}).done(function (glassdata) {
		let $jqzoom = $('.pic-big .jqzoom');//放大镜的小图图片
		let $magnifying=$('.zoomdiv');
		let $jpichover = $('.j-pichover ul');//下 小图片
		let $urlarr=glassdata.url.split(',');
		// console.log($urlarr);
		$smallglass = '';
		$smallicons='';
		$list='';
		$.each($urlarr,function(index,value){
			$list+=`<li>
			<a href="javascript:;">
				<img rpic="//gfs.gomein.net.cn/T1f.DsB4Av1RCvBVdK_800_pc.jpg" bpic="//gfs.gomein.net.cn/T1f.DsB4Av1RCvBVdK_360.jpg" alt="【8包*100抽】江娃原木抽纸整箱家庭装婴儿抽取式面巾纸(默认)第2张高清大图" title="【8包*100抽】江娃原木抽纸整箱家庭装婴儿抽取式面巾纸(默认)第2张高清大图" src="${value}" class="" width="50" height="50">
			</a>
		</li>`
		});
		$smallglass += `<img class="j-bpic-b" alt="【8包*100抽】江娃原木抽纸整箱家庭装婴儿抽取式面巾纸(默认)" src="${glassdata.href}" width="360" height="360">
				`;
		$smallicons+=`<img class="bigimg" src="${$urlarr[0]}">`;
		$jqzoom.prepend($smallglass);
		$magnifying.html($smallicons);
		$jpichover.html($list);
	});


	// 放大镜效果
	!function($){
		let $jqzoom=$('.jqzoom');
		let $zoomdiv=$('.zoomdiv');
		$jqzoom.hover(function(){
			$zoomdiv.css('visibility','visible');
		},function(){
			$zoomdiv.css('visibility','hidden');
		});









		//小图切换
		let $jpichover = $('.j-pichover ul');
		$jpichover.on("mouseover","li",function(){
			let $imgsrc=$(this).find("img").attr("src");
			$jqzoom.find('img').attr("src",$imgsrc);
			$zoomdiv.find("img").attr("src",$imgsrc)
		});


		//点击箭头进行切换
		let $num=5;
		$('.pic-btn-r').on("click",function(){
			
			if($jpichover.find("li").length>$num){
				$num++;
				console.log($jpichover.find("li").eq(0).innerWidth()*$num);
				$jpichover.animate({
					left:-($num-5)*$jpichover.find("li").eq(0).innerWidth()
				});
			}
			
		})

	}(jQuery);

}(jQuery);
