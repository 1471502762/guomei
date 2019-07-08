!function ($) {
    // 表单验证
    const $items1 = $('.items-1 #name');//用户名表单
    const $nameFocusTips = $('#nameFocusTips');//4-20个字符，支持汉字、字母、数字及“-”、“_”组合
    const $nameTips = $('#nameTips');//请输入用户名父元素
    const $msgconttishsi = $('.msg-cont-tishsi');//请输入用户名
    const $username = /^[\u4e00-\u9fa5\w-]{4,20}$/;//用户名正确
    const $usernamenum = /^[\d]{4,20}$/;//全是数字
    let $usname = '';//接收表单的value值
    const $nameSuc = $('#nameSuc');//对号





    // 鼠标点击
    $items1.on("focus", function () {
        $nameSuc.hide();
        $nameTips.hide();
        $nameFocusTips.show();
    });
    //鼠标离开
    $items1.on("blur", function () {
        $usname = $items1.val();//表单的值
        $nameFocusTips.hide();
        if (!$usname == '') {//判断不为空时
            if ($usernamenum.test($usname)) {// 全是数字
                $msgconttishsi.html('不能是纯数字，请重新输入');
                $nameTips.show();
            } else if ($username.test($usname)) {//输入正确
                $.ajax({
                    type: "POST",
                    url: "http://localhost/guomei/php/registor.php",
                    data: {
                        $name: $usname,
                    },
                    success: function (name) {
                        if (!name) {//数据库中已存在
                            $nameSuc.show();
                        } else {//数据库中不存在
                            $msgconttishsi.html('该用户名已存在，立刻登录或更换用户名');
                            $nameTips.show();
                        }
                    }
                });
            } else {//其他情况
                console.log($items1.val());
                $msgconttishsi.html('用户名长度只能在4-20个字符之间');
                $nameTips.show();
            }
        } else if ($usname == '') {//为空时
            $nameTips.show();
            $msgconttishsi.html('请输入用户名');
        }
    });













    // 弹窗
    const $popBoxWrapper = $('.popBoxWrapper');
    //点击同意
    const $inpBtn = $('.inpBtn');
    $inpBtn.click(function(){
         $popBoxWrapper.hide();
    });
}(jQuery);