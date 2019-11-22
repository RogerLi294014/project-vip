define(["jquery"],function($){
    function formcheck(){
       
        $("#phone-input").find("input").keyup(function(){
            var avalue=$("#phone-input").find("input").val();
            if(!avalue){
               $("#phone").find(".register-word").html("手机号不能为空").css({
                "color":"red"
                
            })  
            $("#phone-input-container").css({
                "border":"1px solid red"
            }) 
            }else if(!(/^[0-9]*$/.test(avalue))){
                $("#phone").find(".register-word").html("手机号必须由数字组成").css({
                    "color":"red"
                })   
                $("#phone-input-container").css({
                    "border":"1px solid red"
                }) 
            }
            else if(avalue.length!=11){
                $("#phone").find(".register-word").html("请输入11位正确格式手机号码").css({
                    "color":"red"
                })   
                $("#phone-input-container").css({
                    "border":"1px solid red"
                }) 
            }else if(avalue.length==11 && (/^[0-9]*$/.test(avalue))){
                $("#phone").find(".register-word").html("✔ 手机号格式正确").css({
                    "color":"lime"
                })
                $("#phone-input-container").css({
                    "border":"1px solid silver"
                }) 
               
            }
        })
        $("#identify-input").find("input").keyup(function(){
            var ivalue=$("#identify-input").find("input").val();
            if(ivalue.length == 0){
               $("#identify").find(".register-word").html("验证码不能为空").css({
                "color":"red"
            }) 
            $("#identify-input-container").css({
                "border":"1px solid red"
            }) 
            }else if(!(/^[0-9]*$/.test(ivalue))){
                $("#identify").find(".register-word").html("验证码必须由数字组成").css({
                    "color":"red"
                }) 
                $("#identify-input-container").css({
                    "border":"1px solid red"
                }) 
            }
            else if(ivalue.length!=6){
                $("#identify").find(".register-word").html("请输入6位验证码").css({
                    "color":"red"
                }) 
                $("#identify-input-container").css({
                    "border":"1px solid red"
                }) 
            }else{
                $("#identify").find(".register-word").html("验证码正确").css({
                    "color":"lime"
                })
                $("#identify-input-container").css({
                    "border":"1px solid silver"
                }) 
               
            }
        })


        $("#password-input").find("input").keyup(function(){
            var pvalue=$(this).val()
            if(pvalue.length == 0){
                $("#password").find(".register-word").html("密码不能为空").css({
                 "color":"red"
             }) 
             $("#password-input-container").css({
                "border":"1px solid red"
            }) 
             }else if(!(/./.test(pvalue))){
                 $("#password").find(".register-word").html("密码应由字母数字符号组成").css({
                     "color":"red"
                 }) 
                 $("#password-input-container").css({
                    "border":"1px solid red"
                }) 
             }
             else if(pvalue.length<6||pvalue.length>20){
                 $("#password").find(".register-word").html("密码长度应为6-20个字符").css({
                     "color":"red"
                 }) 
                 $("#password-input-container").css({
                    "border":"1px solid red"
                }) 
             }else{
                 $("#password").find(".register-word").html("密码可以使用").css({
                     "color":"lime"
                 })
                 $("#password-input-container").css({
                    "border":"1px solid silver"
                }) 
                 
             }


            if(pvalue.length>=6&&pvalue.length<=16){
        
            if(/^\d+$/.test(pvalue)||/^[a-z]+$/.test(pvalue)||/^[A-Z]+$/.test(pvalue)){
                $("#password-level").show().html("密码强度低").css({
                    "color":"red"
                })
            }else if(/\d/.test(pvalue)&&/[a-z]/.test(pvalue)&&/[A-Z]/.test(pvalue)){
                $("#password-level").show().html("密码强度高").css({
                    "color":"lime"
                })
            }else{
                $("#password-level").show().html("密码强度中").css({
                    "color":"orange"
                })
            }
        }
        })
    
        
        $("#confirm-input").find("input").keyup(function(){
            var pvalue=$("#password-input").find("input").val();
            var cvalue=$("#confirm-input").find("input").val();
            if(cvalue==0){
                $("#confirm").find(".register-word").html("输入框不能为空").css({
                    "color":"red"
                })  
                $("#confirm-input-container").css({
                    "border":"1px solid red"
                })
            }else if(!(pvalue===cvalue)){
                $("#confirm").find(".register-word").html("请与上方密码保持一致").css({
                    "color":"red"
                })  
                $("#confirm-input-container").css({
                    "border":"1px solid red"
                })
            }else{
                $("#confirm").find(".register-word").html("密码一致").css({
                    "color":"lime"
                }) 
                $("#confirm-input-container").css({
                    "border":"1px solid silver"
                })
                
            }

  
  
        })
        
    }
    function transmit(){
      $("#submit-click").click(function(){
        return false
      })
     
        $("#submit-click").click(function(){

            if($("#phone").find(".register-word").html()!= "✔ 手机号格式正确"){
                alert("手机号码存在错误")
            }else if($("#identify").find(".register-word").html()!= "验证码正确"){
                alert("验证码存在错误")
            }else if($("#password").find(".register-word").html()!= "密码可以使用"){
                alert("密码存在错误")
            }else if($("#password-input").find("input").val()!= $("#confirm-input").find("input").val()){
                alert("两次密码须一致")
            }else if($("#policy").find("input").prop("checked")!=true){
                alert("相关协议需要同意")
            }else{
               ajax()
              
               $("#submit-click").hide()
               $("#congratulation").show()
               setTimeout(function(){
                   location.assign("http://localhost/login/login.html")
               },5000)
                   
            
            }
      })  
      function ajax(){
        $.ajax({
            type:"post",
            url:"../login/disc/php/register.php",
            data:{
                phonenumber:$("#phone-input").find("input").val(),
                identify:$("#identify-input").find("input").val(),
                password:$("#password-input").find("input").val(),
                confirmpassword:$("#confirm-input").find("input").val(),
                createTime:(new Date()).getTime()
            },
            success:function(result){
                var obj=JSON.parse(result);
                console.log(obj)
            },
            error:function(msg){
                console.log(msg)
            }
        })

      }  
      

    }

    return{
        formcheck:formcheck,
        transmit:transmit,
    }

})