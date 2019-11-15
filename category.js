define(["jquery"],function($){

        function category(){
             $("#nav-li-cate-name").on("mouseenter",function(){
                
                
                $("#nav-ul-category-ul").show().stop(true).animate({
                        height:495

                },300)
             }).on("mouseleave",function(){
                $("#nav-ul-category-container").hide()
                $("#nav-ul-category-ul").stop(true) .animate({
                    height:0,
                    

            },300,function(){
                $("#nav-ul-category-ul").hide()
               
            })
             })   

        }

        function touch(){
            $("#nav-ul-category-ul").on("mouseenter","li",".nav-ul-category-list",function(){
               
                $(this).css("background-color","white")
                $("#nav-ul-category-container").show()
                $(".nav-ul-category-list").eq($(this).index()).addClass("active").show().siblings().removeClass("active").hide()
                
            }).on("mouseleave","li",".nav-ul-category-list",function(){
                $(this).css("background-color","deeppink")
                $(".nav-ul-category-list active").hide().removeClass("active")

            })

            $("#nav-ul-category-container").on("mouseenter",".nav-ul-category-list",function(){
                $(".active").show().siblings().hide()
                $("#nav-ul-category-ul li").eq($(this).index()).css("background-color","white")
            }).on("mouseleave",".nav-ul-category-list",function(){
                $(".active").hide()
                $("#nav-ul-category-ul li").eq($(this).index()).css("background-color","deeppink")
            })
        }

        return{
            category:category,
            touch:touch
        }
})