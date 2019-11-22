define(["jquery"],function($){

    function goodsD(){

        $.ajax({
            type:"get",
            url:"../data/goods.json",
            success:function(obj){
                var special=obj.special;
                
                for(var i=0;i<special.length;i++){
                    var node=$(`<li><a href="product.html"><img class="data-img" src="${special[i].img}" alt=""></a>
                    <div class="iconfont collection"><a href="product.html">&#xe658;<span>收藏品牌</span></a></div>
                    <div><a href="product.html" class="goods-title">${special[i].title}</a></div>
                    <div><a href="product.html"><span class="discount-color">${special[i].discount}</span>折起<span>|</span><span>${special[i].extra}</span></a></div>
                </li>`)

                node.appendTo($("#special-goods"))
                }

                var global=obj.global;
                
                for(var i=0;i<global.length;i++){
                    var node=$(`<li><a href="product.html"><img class="data-img" src="${global[i].img}" alt=""></a>
                    <div class="iconfont collection"><a href="product.html">&#xe658;<span>收藏品牌</span></a></div>
                    <div><a href="product.html" class="goods-title">${global[i].title}</a></div>
                    <div><a href="product.html"><span class="discount-color">${global[i].discount}</span>折起<span>|</span><span>${special[i].extra}</span></a></div>
                </li>`)

                node.appendTo($("#global-goods"))
                }
                var woman=obj.woman;
                
                for(var i=0;i<woman.length;i++){
                    var node=$(`<li><a href="product.html"><img class="data-img" src="${woman[i].img}" alt=""></a>
                    <div class="iconfont collection"><a href="product.html">&#xe658;<span>收藏品牌</span></a></div>
                    <div><a href="product.html" class="goods-title">${woman[i].title}</a></div>
                    <div><a href="product.html"><span class="discount-color">${woman[i].discount}</span>折起<span>|</span><span>${special[i].extra}</span></a></div>
                </li>`)

                node.appendTo($("#woman-goods"))
                }
                var shoes=obj.shoes;
                
                for(var i=0;i<shoes.length;i++){
                    var node=$(`<li><a href="product.html"><img class="data-img" src="${shoes[i].img}" alt=""></a>
                    <div class="iconfont collection"><a href="product.html">&#xe658;<span>收藏品牌</span></a></div>
                    <div><a href="product.html" class="goods-title">${shoes[i].title}</a></div>
                    <div><a href="product.html"><span class="discount-color">${shoes[i].discount}</span>折起<span>|</span><span>${special[i].extra}</span></a></div>
                </li>`)

                node.appendTo($("#shoes-goods"))
                }

                var man=obj.man;
                
                for(var i=0;i<man.length;i++){
                    var node=$(`<li><a href="product.html"><img class="data-img" src="${man[i].img}" alt=""></a>
                    <div class="iconfont collection"><a href="product.html">&#xe658;<span>收藏品牌</span></a></div>
                    <div><a href="product.html" class="goods-title">${man[i].title}</a></div>
                    <div><a href="product.html"><span class="discount-color">${man[i].discount}</span>折起<span>|</span><span>${special[i].extra}</span></a></div>
                </li>`)

                node.appendTo($("#man-goods"))
                }
                var sports=obj.sports;
                
                for(var i=0;i<sports.length;i++){
                    var node=$(`<li><a href="product.html"><img class="data-img" src="${sports[i].img}" alt=""></a>
                    <div class="iconfont collection"><a href="">&#xe658;<span>收藏品牌</span></a></div>
                    <div><a href="product.html" class="goods-title">${sports[i].title}</a></div>
                    <div><a href="product.html"><span class="discount-color">${sports[i].discount}</span>折起<span>|</span><span>${special[i].extra}</span></a></div>
                </li>`)

                node.appendTo($("#sports-goods"))
                }
                var makeup=obj.makeup;
                
                for(var i=0;i<makeup.length;i++){
                    var node=$(`<li><a href="product.html"><img class="data-img" src="${makeup[i].img}" alt=""></a>
                    <div class="iconfont collection"><a href="product.html">&#xe658;<span>收藏品牌</span></a></div>
                    <div><a href="product.html" class="goods-title">${makeup[i].title}</a></div>
                    <div><a href="product.html"><span class="discount-color">${makeup[i].discount}</span>折起<span>|</span><span>${special[i].extra}</span></a></div>
                </li>`)

                node.appendTo($("#makeup-goods"))
                }

            },
            error:function(msg){
                console.log(msg)
            }
        })

    }

    return{
        goodsD:goodsD
    }
})