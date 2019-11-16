define(["jquery"],function(){

        function rightmenu(){

            var btns=$("#side-bar").find(".iconfont")

            btns.on("mouseenter",".side-move",function(){
                $(this).find(".sidemove").show().stop(true).animate({
                    left:-100
                },500)
            }).on("mouseleave",".side-move",function(){
                $(this).find(".sidemove").stop(true).animate({
                    left:0
                },500,function(){
                    $(this).find(".sidemove").hide()
                })
            })
        }



    return{
            rightmenu:rightmenu
    }
})