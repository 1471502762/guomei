!function($){
    let $log=$('#log');
    $log.on("click",function(){
        $('#loginPasswordDefault').show();
        $('#loginNameDefault').show();
        $.ajax({
            type: "POST",
            url: "http://10.31.158.35/guomei/php/login.php",
            data: {
                $name: $('#loginName').val(),
                $pwd:$('#loginPassword').val()
            }
        }).done(function (date) {
            if(date){
                location.href='index.html';
            }else{
                $('#warmTips').find('span').html('用户名或者密码错误');
                $('#warmTips').show();
            }
        })
    });
    $('#loginName').on("focus",function(){
        if ($('#loginName').val()=='') {
            $('#loginNameDefault').hide();
        }
       
    });
     $('#loginName').on("blur",function(){
            $('#loginNameDefault').hide();
    });
    $('#loginPassword').on("focus",function(){
         if($('#loginPassword').val()==''){
             $('#loginPasswordDefault').hide();
        }
        
    });
    $('#loginPassword').on("blur",function(){
             $('#loginPasswordDefault').hide();
    })



}(jQuery);