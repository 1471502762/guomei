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
    const $pwdzimu=/^[a-zA-Z]{6,20}$/;//全是数字
    let $password=$('#password');//密码
    let $passwordMsgbox=$('#passwordMsgbox');
    const $passwordTips=$('#passwordTips');
    let $pwd= '';//接收表单的value值
    const $pas=/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/;//密码
    const $confirmPasswordTips=$('#confirmPasswordTips');
    let flash=false;
// 用户名
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
                flash=false;
            } else if ($username.test($usname)) {//输入正确
                flash=true;
                $.ajax({
                    type: "POST",
                    url: "http://10.31.158.35/guomei/php/registor.php",
                    data: {
                        $name: $usname,
                    },
                    success: function (name) {
                        if (!name) {
                            $nameSuc.show();
                        } else {
                            $msgconttishsi.html('该用户名已存在，立刻登录或更换用户名');
                            $nameTips.show();
                        }
                    }
                });
            } else {//其他情况
                flash=false;
                // console.log($items1.val());
                $msgconttishsi.html('用户名长度只能在4-20个字符之间');
                $nameTips.show();
            }
        } else if ($usname == '') {//为空时
            flash=false;
            $nameTips.show();
            $msgconttishsi.html('请输入用户名');
        }
    });

// 设置密码
$password.on("focus", function () {
    $passwordMsgbox.removeClass('err-tips');
    $passwordTips.html("6-20个字符，建议由字母，数字与符号两种以上组成");
    $passwordTips.show();
    $('#passwordSuc').hide();
});
$password.on("blur", function () {
    $pwd=$password.val();
    if($pwd!=''){
        if($pas.test($pwd)){
            flash=true;
            $passwordTips.hide();
            $('#passwordSuc').show();
            $("#confirmPassword").removeAttr('disabled');
        }else if($usernamenum.test($pwd)||$pwdzimu.test($pwd)){
            flash=false;
            $passwordMsgbox.addClass('err-tips');
            $passwordTips.html("不能为同一字符");
        }else{
            flash=false;
            $passwordMsgbox.addClass('err-tips');
            $passwordTips.html("长度应为6-20个字符");
        }
    }else {
        flash=false;
        $passwordMsgbox.addClass('err-tips');
        $passwordTips.html("请输入密码");
    }
})


// 验证密码
$("#confirmPassword").on("focus", function () {
    $confirmPasswordTips.html('请再次输入密码');
    $confirmPasswordTips.show();
})
$("#confirmPassword").on("blur", function () {
    if($('#confirmPassword').val()!=''){
        if($('#confirmPassword').val()==$password.val()){
                $('#confirmPasswordSuc').show();
                $confirmPasswordTips.hide();
                flash=true;
            }
            else{
                flash=false;
                $('#confirmPasswordMsgbox').addClass('err-tips');
                $confirmPasswordTips.html('两次密码不一致');
            }
    }else{
        flash=false;
        $('#confirmPasswordMsgbox').addClass('err-tips');
        $confirmPasswordTips.html('请输入密码');
    }

    $('#confirmPasswordMsgbox').addClass('err-tips');
    // $confirmPasswordTips.html('请再次输入密码');
    // $confirmPasswordTips.show();
})


// 手机号
let $mobile=$('#mobile');
let $tel=/^1[3456789]\d{9}$/;
$mobile.on("focus",function(){
    $('#checkMobileSucc').hide();
})
$mobile.on("blur",function(){
    if($mobile.val()!=''){
        $('#checkMobileTipError3').hide();
        $('#checkMobileTipError').hide();
        if($tel.test($mobile.val())){
            $('#checkMobileSucc').show();
            flash=true;
            }
            else{
                flash=false;
                $('#checkMobileTipError').show();
            }
    }else{
        flash=false;
        $('#checkMobileTipError3').show();
        $('#checkMobileTipError').hide();
        // $('#checkMobileTipError3').html('')
    }
})



// 验证码 
let $verifyCode=$('#verifyCode');
let $yzm=/^\d{4}$/;
$verifyCode.on("focus",function(){
    $('#verifyCodeTips').show();
    $('#verifyCodeTips').removeClass('err-tips');
    $('#verifyCodeTips').html('请输入验证码');
    $('#yzm').hide();
})
$verifyCode.on("blur",function(){
    if($verifyCode.val()!=''){
        if($yzm.test($verifyCode.val())){
            $('#verifyCodeTips').hide();
            $('#yzm').show();
            flash=true;
        }else{
            flash=false;
            $('#verifyCodeTips').show();
            $('#verifyCodeTips').addClass('err-tips');
            $('#verifyCodeTips').html('请输入正确验证码');
        }

    }else{
        flash=false;
        $('#verifyCodeTips').addClass('err-tips');
        $('#verifyCodeTips').html('请输入验证码');
    }
    
});


$('#registerNow').on("click",function(){
    if(!flash){
                return false;
    }
})



    // 弹窗
    const $popBoxWrapper = $('.popBoxWrapper');
    //点击同意
    const $inpBtn = $('.inpBtn');
    $inpBtn.click(function(){
         $popBoxWrapper.hide();
    });
}(jQuery);