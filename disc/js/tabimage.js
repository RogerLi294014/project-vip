define(["jquery"],function($){

    function enterpic(){

        $.ajax({
            type:"get",
            url:"../data/tabpic.json",
            success:function(arr){
                for(var i=0;i<arr.length;i++){
                   var node=$(`<li class="banner-circle-li"><a href=""><img src="${arr[i].img}" alt=""></a></li>`);
                   node.appendTo($("#banner"))
                }
                
            },
            error:function(msg){
                console.log(msg)
            }

        })
    }
    
    function bannerTab(){
        var timer=null;
        var iNow=-1;
            
            tab()
            timer=setInterval(function(){
                iNow++;
                tab();
                
                
                
            },2000)

        function tab(){
            var imgs=$("#banner .banner-circle-li").find("a")
            var btns=$("#banner-circle").find("a")
           
            imgs.css("opacity",0.2).hide().eq(iNow).show().stop(true).animate({
                opacity:1
            },800,function(){
                if(iNow==btns.size()-1){
                    iNow=-1
                }else if(iNow==btns.size()){
                    iNow=0
                }
            })
            btns.removeClass("banner-circle-active").eq(iNow).addClass("banner-circle-active")
            
            btns.on("click",function(){
                $(this).addClass("banner-circle-active").siblings().removeClass("banner-circle-active");
                
                iNow=$(this).index()
                
                $("#banner .banner-circle-li a").css("opacity",1).hide().eq(iNow).show().stop(true)
                return false
            })
       
        }
       
    
    }
    

    return{
        enterpic:enterpic,
        bannerTab:bannerTab,
        
        
    }

})