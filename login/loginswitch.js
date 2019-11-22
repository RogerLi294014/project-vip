define(["jquery"],function(e){
    function tabswitch(){
       //二维码、账号转换
        var accbtn=$("#form-login-header")
        var qrbtn=$("#form-login-entry")

        accbtn.click(function(){
            $("#form-login-ul").hide()
            $("#QRcode").show()
            $(this).css({
                "color":"deeppink"
            }).siblings().css({
                "color":"black",
            })
            
        })
        qrbtn.click(function(){
            $("#form-login-ul").show()
            $("#QRcode").hide()
            $(this).css({
                "color":"deeppink"
            }).siblings().css({
                "color":"black",
            })
        })
        //更多登陆方式
       var btn =$("#login-other").find(".iconfont")
       var i=1 
       
       btn.click(function(){
           return false
       })
       btn.click(function(){
            i++;

            if(i%2==0){
                $("#login-extra").show()
                $(this).html("收起&#xe652;")
            }else{
                $("#login-extra").hide()
                $(this).html("更多&#xeb1f;")
            }
        })
        //输出框是否为空判断
        $("#phone-input").find("input").blur(function(){
            if(!$("#phone-input").find("input").val()){
                $("#phone").find(".login-word").html("账号不能为空")
                $("#phone-input-container").css({
                    "border":"1px solid red"
                }) 
            }else{
                $("#phone").find(".login-word").html("")
                $("#phone-input-container").css({
                    "border":"1px solid silver"
                }) 
            }
        })
        $("#password-input").find("input").blur(function(){
            if(!$("#password-input").find("input").val()){
                $("#password").find(".login-word").html("密码不能为空")
                $("#password-input-container").css({
                    "border":"1px solid red"
                }) 
            }else{
                $("#password").find(".login-word").html("")
                $("#password-input-container").css({
                    "border":"1px solid red"
                }) 
            }
        })
    }
    
    function  datacheck(){
        $("#submit-click").click(function(){
            return false
        })
        var Ainput=$("#phone-input").find("input").val()
        $("#submit-click").click(function(){
            if( $("#phone").find(".login-word").html()!=""){
                return false
            }else if($("#password").find(".login-word").html()!=""){
                return false
            }else {
                ajax()
            }
        })
        
    }
    function ajax(){
        $.ajax({
            type:"post",
            url:"../login/disc/php/login.php",
            data:{
                username:$("#phone-input").find("input").val(),
                password:$("#password-input").find("input").val(),

            },
            success:function(result){
                var obj=JSON.parse(result)
                console.log(obj)
                if(obj.code==5){
                $("#congratulation").show()
                $("#submit-click").hide()
                setTimeout(function(){
                    location.assign("http://localhost:8888/")
                },5000)
                }else{
                    alert(obj.message)
                }
            },
            error:function(msg){
                console.log(msg)
            }

        })
    }
    return{
        tabswitch:tabswitch,
        datacheck:datacheck
    }
})