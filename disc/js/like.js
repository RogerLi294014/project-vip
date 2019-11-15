define(["jquery"],function($){
    function touch(){
        var lis=$("#goods-range ul ");
        console.log(lis)
        lis.on("mouseenter","li",function(){
            $(this).stop(true).animate({
                opacity:0.7
            },500,function(){
                $(this).stop(true).animate({
                    opacity:1
                },500)
            })

            $(this).find(".iconfont").show().stop(true).animate({
                opacity:1
            },500)
        }).on("mouseleave","li",function(){
            
            $(this).find(".iconfont").stop(true).animate({
                opacity:0.1
            },500,function(){
               $(this).hide()
            })
        })

        lis.on("mouseenter",".iconfont",function(){
            $(this).css({
                "backgroundColor":"deeppink",
                
            })
            $(this).find("a").css("color","white")
            $(this).find("span").css("color","white")
            
        }).on("mouseleave",".iconfont",function(){
            $(this).css({
                "backgroundColor":"white",
                "fontColor":"black"
            })
            $(this).find("a").css("color","deeppink")
            $(this).find("span").css("color","black")
        })
    }
    return{
        touch:touch
    }
})