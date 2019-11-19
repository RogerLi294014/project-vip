define(["jquery"],function($){
    function highwheel(){
        $.ajax({
            type:"get",
            url:"../data/highwheel.json",
            success:function(obj){
                var arr=obj.highwheel
                for(var i=0;i<arr.length;i++){
                    var str=$(`<li id="goods-${arr[i].id}"><a href=""><img src="${arr[i].img}" alt=""></a>
                    <div class="goods-crazy">${arr[i].specialPrice}</div>
                    <div class="goods-price"><span class="goods-new-price">${arr[i].price}</span><span class="goods-old-price">${arr[i].oldprice}</span><span class="goods-discount">${arr[i].discount}</span></div>
                    <div><a href="">${arr[i].title}</a></div></li>`)

                    str.appendTo("#goods-list")

                }
            },
            error:function(msg){
                console.log(msg)
            }
        })
    }

    function brandClick(){
        var i=1;
        $("#selection-open .iconfont").on("click",function(){
           
          
            return false  
        })
        $("#selection-open .iconfont").on("click",function(){
            console.log(i)
           
            i++;
            if(i % 2==0){
                $(".hidden-brand").show()
                $(this).html("收回&#xeb1f;")
                
            }else{
                $(".hidden-brand").hide()
                $(this).html("更多&#xeb1f;")
                
            }
            
        })
    }
    return{
        highwheel:highwheel,
        brandClick:brandClick
    }

})