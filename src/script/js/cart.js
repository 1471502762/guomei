!function($){
    let id=$.cookie('sid');
    // console.log($.cookie('sid'));
    if ($.cookie('sid') && $.cookie('num')) {
        let $arrsid = $.cookie('sid').split(',');//将获取的cookie转换成数组
        let $arrnum = $.cookie('num').split(',');
        // for(let i=0;i<arrsid.length;i++){
        //     showgoods(arrsid[i],arrnum[i]);
        // }
        $.each($arrsid,function(index,$arrayid){
                car($arrayid,$arrnum[index]);
        })
    };

function car(id,num){
    $.ajax({
		type: "POST",
		url: "http://localhost/guomei/php/cart.php",
		async: true,
		dataType: 'json',
		data: {
			sid: id
		},
	}).done(function (shoppingdata) {
        // console.log(shoppingdata);
        let $carlist='';
        $carlist+=`<div class="commodity">
        <div class="cart-shop-header">
            <div class="cart-col-1">
                <!--VNPOP：把联合促销活动作为虚拟店铺，它是它的ID-->
                <div act-check-shop-item="" gui-checkbox="" gui-class-unchecked="good-checkboxs-no" gui-class-checked="c-i checkbox_chose" gui-class-disabled="no_check" data-sid="80015811" class="c-i checkbox_chose" style="margin-top: 13px;">
                    <input type="checkbox" checked="" style="display: none;"> </div>
            </div>
            <div class="cart-col-2">
                <a href="//mall.gome.com.cn/80015811/" title="英集电器专营店" class="black cart-shop-name  " target="_blank">
                    英集电器专营店 </a>
                <span style="display: inline-block" class="cart-kf cart-header-kf customerServiceAshes" customer-service-button-id="80015811" customer-entry="composite" data-customer_service_id="80015811" data-shopname="英集电器专营店" orgi="80015811" orgitype="3">
                    <i style="cursor: pointer;vertical-align: middle;" class="c-i c-kf-on"></i>
                    <span class="contact-customer-word contact-font">在线客服</span>
                </span>
            </div>
        </div>
        <div id="shopping-coupon-80015811" class="shopping-coupon-box">
            <span href="javascript:void 0" class="fl tip pr30 cl pr" hoverup="">
                <i class="c-i tips_icon fl" style="margin:5px 5px 0px 0px;"></i>
                <div class="pabs desc hide box-sd1 coupon-remind" hover="">
                    <div class="white-arrow" style="top: -8px;left: 14px;font-size:3px;">◆</div>
                    <h3>国美购物券是国美第三方店铺专属购物券，可跨店使用。</h3>
                    <p>1. 您可在支持使用购物券的店铺商品详情页，或购物车页面领取购物券。</p>
                    <p>2. 领取购物券成功后，购买商品达到购物券使用条件则可在提交订单前勾选并使用购物券。</p>
                    <p>3. 同一订单同一店铺最多只可使用一张购物券，且不能和该店铺的店铺券同时使用。</p>
                    <p>4. 商品参加本店铺的满减、满返、多买优惠、满赠、跨店铺满减、跨店铺满免活动后，不可再使用购物券。</p>
                    <a class="foot fr" href="http://help.gome.com.cn/article/279-297-0.html">了解更多
                        <span class="jt">&gt;</span>
                    </a>
                </div>
            </span>
            <a href="javascript:;" class="c-i  cart-coupon-trigger-icon  cart-coupon-show" style="line-height: 29px">
                <i style="margin-left: 19px; margin-right: 3px;" class=""></i> 购物券 </a>
            <span class="title-txt"></span>
        </div>
        <div class="cart-shop-goods cart-shop-goods-normal">
            <div class="cart-shop-good                        clearfix            cart-shop-good-common            cart-shop-good-checked             cart-item-last           " data-good="true" data-sid="pop8012460447" data-pid="A0006519168" bigdata-pid="A0006519168">
                <div class="cart-col-1                border-top         ">
                    <div act-check-item="" gui-checkbox="" gui-class-unchecked="good-checkboxs-no" gui-class-checked="c-i checkbox_chose" gui-class-disabled="no_check" data-cid="5376421095" class="c-i checkbox_chose">
                        <input type="checkbox" name="good" path="0.commerceItemsGroups.0.commerceItemsGroup.0" checked="" value="5376421095" data-save="true" style="display: none;"> </div>
                </div>
                <div class="cart-col-2" style="height: 82px;">
                    <a href="//item.gome.com.cn/A0006519168-pop8012460447.html" target="_blank" class="g-img">
                        <img src="${shoppingdata.href}" alt="" sid=${id}> </a>
                </div>
                <div class="fl">
                    <div class="clearfix">
                        <div class="cart-col-3">
                            <div class="cart-good-name">
                                <a href="//item.gome.com.cn/A0006519168-pop8012460447.html" target="_blank" title="Haier海尔 32EU3000a 32英寸高清蓝光液晶平板电视机(黑色 40寸以下)">
                                ${shoppingdata.tradename}</a>
                            </div>
                            <div class="support-server clearfix">
                                <i class="c-i seven border-radius-icon" title="支持7天无理由退货"></i>
                            </div>
                            <!--start 增值服务选择框模板-->
                            <!--end 增值服务选择框模板-->
                        </div>
                        <!--sales property -->
                        <div class="cart-col-8">
                            <div class="cart-good-pro">
                                <div class="cart-salesPro-item">
                                    <span class="cart-good-key" title="颜色">颜色</span>
                                    <span class="cart-good-value" title="黑色">：黑色</span>
                                </div>
                                <div class="cart-salesPro-item">
                                    <span class="cart-good-key" title="版本">版本</span>
                                    <span class="cart-good-value" title="40寸以下">：40寸以下</span>
                                </div>
                            </div>
                        </div>
                        <!--sales property -->
                        <div class="cart-col-4 cart-price-height47">
                            <div class="cart-good-real-price ">
                                <!--主品-->¥&nbsp;${shoppingdata.price}</div>
                            <div class="red"> </div>
                        </div>
                        <div class="cart-col-5">
                            <div gui-count="" click-document-pre="" gui-count-min="1" gui-count-animate="1" gui-count-change-interval="1000" act-change-count="" data-cid="5376421095" data-limit="99" data-sku="pop8012460447" class="gui-count cart-count" data-limit-pop8012460447-a0006519168="99">
                                <a href="javascript:;" gui-count-sub="" class="gui-count-btn gui-count-sub gui-count-disabled">-</a>
                                <a href="javascript:;" gui-count-add="" class="gui-count-btn gui-count-add">+</a>
                                <div class="gui-count-input">
                                    <input dytest="" class="dytest " type="text" value="${num}">
                                </div>
                            </div>
                            <div class="red"> 限购99件 </div>
                        </div>
                        <div class="cart-col-6 ">
                            <div class="cart-good-amount"> ¥&nbsp;${num*shoppingdata.price} </div>
                            <!-- 重量展示(只展示全球百货的重量) -->
                        </div>
                    </div>
                    <div class="cart-good-box">
                        <!--选中增值服务列表-->&nbsp;
                        <!--预约-->
                        <!--赠品-->
                    </div>
                </div>
                <div class="cart-col-7">
                    <div class="cart-good-fun delfixed">
                        <a href="javascript:;" class="deletee" act-remove-item="" path="0.commerceItemsGroups.0.commerceItemsGroup.0" data-sku="pop8012460447" data-save="true">
                        删除 </a>
                    </div>
                    <div class="cart-good-fun">
                        <a href="javascript:" act-add-wishlist="" path="0.commerceItemsGroups.0.commerceItemsGroup.0">
                            移入收藏夹</a>
                    </div>
                </div>
            </div>
            <!-- /本组商品列表 -->
            <!-- /单个促销分组 -->
        </div>
    </div>`;
    $('.carlist').prepend($carlist);
    dianji();
    del(id,num);
    });
};
   
    


// function dianji(){
//     if($('.carlist')){
//         // const $guicountsub=$('.carlist').find(".gui-count-sub");//减数量
//         const $guicountadd=$('.carlist').find(".gui-count-add");//加数量
//         // const $dytest =$('.dytest ');//数量
//         // 加数量
//         let num=0;
//         $guicountadd.on("click",function(){
//             // console.log($(this));
//             let $input=$(this).parent('.gui-count').find('.gui-count-input');
//             // console.log($input);
//             num= $input.val();
//              if(num>1){
//             // 显示减号按钮
//             let $guicountsubb=$input.siblings('.gui-count-sub');
//             // console.log($guicountsubb);
//             $guicountsubb.removeClass("gui-count-disabled"); 
//             }
//             console.log(num);
//             $input.val(function(){
//                 // console.log(++num);
//             return num=Number(num)+1;
            
//         });
        
//     });
//     // // 减数量
//     //     $jgACbtn.on("click",function(){
            
//     //          if(num>1){
//     //         $jgACvalinput.val(function(){
//     //             return --num;
//     //         });
//     //     };
//     //     if(num==1){
//     //         // 关闭减号按钮
//     //         $jgACbtn.addClass("disab"); 
//     //     }
//     //     });
//     }
    



// };

// // function del(id,num){
// //     let $arrnumm = $.cookie('num').split(',');
// //     let $arrsidd = $.cookie('sid').split(',');
// //     $('.deletee').on("click",function(){
// //         $arrnumm[$arrsidd.indexOf(id)]=null;
// //         $arrnumm.push( $arrnumm[$arrsidd.indexOf(id)]);
		
// // 			$.cookie('num', $arrnumm.toString(),{ expires: 7 });
// //     //    console.log($arrnumm[$arrsidd.indexOf(id)]); 
// //         //  $.cookie("num",num[$arrsidd.indexOf(id)],null);
// //     })
   
// // }

    
}(jQuery)