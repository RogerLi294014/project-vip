define(["jquery"],function($){

function goodsAnime(){

var lis=$("#goods ul")

lis.on("mouseenter","li",function(){
    $(this).css({
        
        "box-shadow":" 0.7px 0.7px 0.7px 0.7px rgba(0,0,0,.4)"
    })

}).on("mouseleave","li",function(){
        $(this).css({
          
            "box-shadow":""
        })
})
}

    return{
     goodsAnime:goodsAnime
    }

})