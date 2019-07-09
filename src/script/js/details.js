; !function ($) {
	//渲染
	$.ajax({
		type: "POST",
		url: "http://localhost/guomei/php/details.php",
		async:true,
		dataType:'json',
	}).done(function (glassdata) {
				let $jqzoom=$('.pic-big .jqzoom');//图片
				let $jpichover=$('.j-pichover');//小图片
				$smallglass='';
				$smallicons='';
                // console.log(glassdata);//返回值是数组
                let urlarr=glassdata[0].url.split(',')//将url字符串拆分成数组
			$.each(glassdata, function (index, $value) {	
				$smallglass+=`
				<div class="jqzoom">
                        <img width="360" height="360" class="j-bpic-b" jqimg="//gfs3.gomein.net.cn/T13nZgBgYv1RCvBVdK_800_pc.jpg" alt="【限购1000件】两支装 中性笔橡胶杆0.38mm黑色水笔学生笔碳素笔办公签字笔(橡胶杆中性笔0.38mm#2支装)"
                            _src="${$value[index].url[0]}">
                        <a title="点击看【限购1000件】两支装 中性笔橡胶杆0.38mm黑色水笔学生笔碳素笔办公签字笔(橡胶杆中性笔0.38mm#2支装)大图" target="_blank" href="//item.gome.com.cn/bigimage/A0006529651-pop8012541258.html"
                            class="pic-l-b" style="display: block;"></a>
                    </div>
				`;
				$smallicons+=`
				<li class="">
							<a></a>
				</li>
				`

			});
			// $jqzoom.html($smallglass);
			// $jpichover.html($smallicons);
			
		});
}(jQuery);
