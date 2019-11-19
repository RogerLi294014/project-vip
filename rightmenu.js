define(["jquery"],function($){

        function rightmenu(){

            var btns=$("#side-bar").find(".iconfont")

            btns.mouseenter(function(){
                $(this).find(".side-move").show().stop(true).animate({
                    left:-100
                },200)
            }).mouseleave(function(){
                $(this).find(".side-move").stop(true).animate({
                    left:0
                },200).hide()
            })
            
            $("#big-move").mouseenter(function(){
                $(this).find(".side-move").show().stop(true).animate({
                    left:-300
                },200)
            }).mouseleave(function(){
                $(this).find(".side-move").stop(true).animate({
                    left:0
                },200).hide()
            })
            $(".iconfont menu-bag").click(function(){
                var i=1;
                i++
                if(i%2==0){
                $(this).find(".side-move").show().stop(true).animate({
                    left:-300
                },200)
            }else{
                
                $(this).find(".side-move").stop(true).animate({
                    left:0
                },200).hide()
            }

                
            })
        }

       


    return{
            rightmenu:rightmenu
    }
})