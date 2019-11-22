define(["jquery"],function($){

    function imagemove(){

        $("#image-container").mouseenter(function(){
            $("#image-container").find("img").appendTo("#image-shower")
            $("#image-shower").show();
        }).mouseleave(function(){
            $("#image-shower").hide();
            $("#image-shower").find("img").appendTo("#image-container")
            
        }).mousemove(function(ev){
            var l=ev.pageX-$(this).offset().left
            if(l<=0){
                l=0
            }
            if(l>=420){
                l=420
            }
            var t=ev.pageY-$(this).offset().top
            if(t<=0){
                t=0
            }
            if(t>=420){
                t=420
            }
            
            $(".image-bigger").css({
                left:-3*l,
                top:-3*t
            })
        })

    }

    function imagechange(){
        var image=$("#image-small").find("li")
        var  a= image.find("a")

        a.click(function(){
            return false
        })
        a.click(function(){
         $("#image-container").find("img").eq($(this).parent("li").index()).addClass("image-bigger").siblings().removeClass("image-bigger")
           
        })

    }
    function buttonselect(){
        var colorbtn=$("#info-color-select").find("button")
        var sizebtn=$("#info-size-select").find("button")
        colorbtn.click(function(){
            $(this).addClass("selected").siblings().removeClass("selected")

        })
        sizebtn.click(function(){
            $(this).addClass("selected").siblings().removeClass("selected")
        })
        var num=1;
        $(".button-left").click(function(){
            num--
            if(num<=0){
                $("#info-num-0").show()
                num=1
            }
            $("#info-num-number").find("span").html(num)
        })
        $(".button-right").click(function(){
            $("#info-num-0").hide()
            num++;
            $("#info-num-number").find("span").html(num)
        })
    }

    function menulist(){
        var menu=$("#content-menu li").find("a")
        
        menu.click(function(){
            return false
        })
        menu.mouseenter(function(){
           var menuli=$(this).parent("li")

           menuli.css({
               "border-bottom":"3px solid  deeppink"
           })
        }).mouseleave(function(){
            var menuli=$(this).parent("li")
            menuli.css({
                "border-bottom":"3px solid  black"
            })
        })


        menu.click(function(e){
            var menuli=$(this).parent("li").index()
            
            
            if(menuli == 0 ){
                $("html,body").animate({ scrollTop: $("#content-size").offset().top}, 500);
            }else if(menuli == 1){
                $("html,body").animate({ scrollTop: $("#content-image").offset().top}, 500);
            }else if(menuli == 2){
                $("html,body").animate({ scrollTop: $("#content-comment").offset().top}, 500);
            }else if(menuli == 3){
                $("html,body").animate({ scrollTop: $("#content-consult").offset().top}, 500);
            }else if(menuli == 4){
                $("html,body").animate({ scrollTop: $("#content-us").offset().top}, 500);
            }
           
            console.log(menuli)
        })
        
    }

    function menutop(){
        var menu=$("#content-menu")
        
        $(window).scroll(function(){
            if($(this).scrollTop()>=$("#content-size").offset().top){
                menu.css({
                    "position":"fixed",
                    "top":"0px",
                    "left":"0px",
                    "padding-left":"230px",
                    
                    
                })
                $(".menu-hidden").css({
                    "display":"block"
                })
            }else if($(this).scrollTop()<$("#content-size").offset().top){
                menu.css({
                    "position":"relative",
                    "top":"0px",
                    "left":"0px",
                    "padding-left":"0px"
                   
                })
                $(".menu-hidden").css({
                    "display":"none"
                })
            }
        })
        
        
    }
 function hiddensize(){
     var more=$("#content-table-more").find("a")

     var i=1;
     more.click(function(){
         return false
     })
     more.click(function(){
        //i=偶数为展开 i=奇数为收回 
        i++
        if(i%2==0){
            $(".content-sizetable-hidden").show()
            more.html("回收&#xe652;")
        }else{
            $(".content-sizetable-hidden").hide()
            more.html("更多&#xeb1f;")
        }
     })
 }

    return{
        imagemove:imagemove,
        imagechange:imagechange,
        buttonselect:buttonselect,
        menulist:menulist,
        menutop:menutop,
        hiddensize:hiddensize
    }

})