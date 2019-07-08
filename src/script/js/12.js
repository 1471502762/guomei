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
					$bannerolli:$(ele).find('.edit-mode li'),
					$bannerulli:$(ele).find('.focus_box li'),
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
                    $obj.$bannerolli.on('click',function(){
                        // 把当前li的索引赋给$num
                        $num=$(this).index();
                        qiehuan();
                    });
                }else{
                    // 给当前li添加事件
                    $obj.$bannerolli.on('mouseover',function(){
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
                    // 透明度切换
                    if($obj.qihuantype==='display'|| $obj.qihuantype!=='opacity'){
                        $obj.$bannerolli.eq($num).addClass('active').siblings().removeClass('active');
                        $obj.$bannerulli.eq($num).addClass('showpic').siblings().removeClass('showpic');
                    }else{
                    //直接切换
                        $obj.$bannerulli.eq($num).css('transition','all 0.7s');
                        $obj.$bannerolli.eq($num).addClass('active').siblings().removeClass('active');
                        $obj.$bannerulli.eq($num).addClass('showpic').siblings().removeClass('showpic');
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
                        $num=$obj.$bannerolli.length-1;
                    }
                    qiehuan();
                };

                //点击右箭头进行图片切换
                function djright(){
                    $num++;
                    if($num>$obj.$bannerolli.length-1){
                        $num=0;
                    }
                    qiehuan();
                }
            })
        }
    })
}(jQuery);
