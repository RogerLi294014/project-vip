define(["jquery"],function(e){
    function tabswitch(){
        var accbtn=$("#form-login-header")
        var qrbtn=$("#form-login-entry")

        accbtn.click(function(){
            $("#form-login-ul").hide()
            $("#QRcode").show()
            $(this).css({
                "color":"deeppink"
            })
        })
        qrbtn.click(function(){
            $("#form-login-ul").show()
            $("#QRcode").hide()
            $(this).css({
                "color":"deeppink"
            })
        })


    }

    return{
        tabswitch:tabswitch
    }
})