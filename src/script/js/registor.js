!function ($) {
    // 表单验证
    let $items1 = $('.items-1 #name');
    let $nameFocusTips = $('#nameFocusTips');
    let $nameTips = $('#nameTips');
    let $msgconttishsi = $('.msg-cont-tishsi');
    let $username = /^[\u4e00-\u9fa5\w-]{4,20}$/;
    let $usernamenum = /^[\d]{4,20}$/;
    let $usname = '';
    $items1.on("focus", function () {
        $nameTips.css('display', 'none');
        $nameFocusTips.css('display', 'block');
        // $items1.val('');
    });
    $items1.on("blur", function () {
        $usname = $items1.val();
        if($usname == ''){//为空时
            $nameFocusTips.css('display', 'none');
            $nameTips.css('display', 'block');
            $msgconttishsi.html('请输入用户名');
        }
        else if (!$usname == '') {//判断输入是否为空
            // 全是数字
            if ($usernamenum.test($usname)) {
                console.log($items1.val());
                $nameFocusTips.css('display', 'none');
                $msgconttishsi.html('不能是纯数字，请重新输入');
                $nameTips.css('display', 'block');
            } else if ($username.test($usname)) {//输入正确
                alert('as');
            }else{console.log($items1.val());
                $nameFocusTips.css('display', 'none');
                $msgconttishsi.html('用户名长度只能在4-20个字符之间');
                $nameTips.css('display', 'block');
            }
        }
       
    });
}(jQuery);