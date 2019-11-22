define(["jquery","jquery-cookie"],function(){
    function datagather(){
        
        $.ajax({
            type:"get",
            url:"../data/highwheel.json",
            success:function(){
                var cookiestr=$.cookie("goods");
                if(cookiestr){
                    var cookiearr=JSON.parse(cookiestr);
                    console.log(cookiearr)
                    for(var i=0 ;i<cookiearr.length;i++){
                        
                        var node =$(`<li>
                        <div class="product-content">
                            <div class="product-image"><img src="${cookiearr[i].picture}" alt=""></div>
                            <div class="product-info">
                                <i class="product-describe">${cookiearr[i].color}</i>
                                <i>尺码：<span class="product-size">${cookiearr[i].size}</span></i>
                            </div>
                      </div>
                        <div class="product-price">
                            <div class="product-new-price">${cookiearr[i].nprice}</div>
                            <div class="product-old-price">${cookiearr[i].oprice}</div>
                        </div>
                        <div class="product-num">
                            <div class="product-num-container">
                                <button class="product-num-cal">-</button>
                                <span class="product-num-show">${cookiearr[i].num}</span>
                                <button class="produce-num-cal">+</button>
                              </div>
                        </div>
                        <div class="product-overall">¥${cookiearr[i].overall}</div>
                        <div class="product-delete"><div>删除</div></div>
                          
                      </li>`)
                      node.appendTo("#shoppingcar-container-ul")
                    }
                }
            },
            error:function(msg){
                console.log(msg)
            }

        })

        $("#shoppingcar-container-ul").on("click",".product-num-container button",function(){
            var id=$(this).closest("li").index()
           
            
            var cookiearr= JSON.parse($.cookie("goods"));
            
            for(var i=0;i<cookiearr.length;i++){
             

                if(i == id){
                    if(this.innerHTML==="+"){
                    cookiearr[i].num++
                    cookiearr[i].overall= parseInt(cookiearr[i].num)*parseInt(cookiearr[i].nprice)
                }else if(cookiearr[i].num==1&& this.innerHTML==="-"){
                    alert("不能再减少，数量已为最小")
                }else{
                    cookiearr[i].num--
                    cookiearr[i].overall= parseInt(cookiearr[i].num)*parseInt(cookiearr[i].nprice)
                }
                $(this).siblings("span").html(cookiearr[i].num)
                $(this).closest("li").find(".product-overall").html("￥"+cookiearr[i].overall)
               
                $.cookie("goods",JSON.stringify(cookiearr),{
                    expires:7
                })
            }

            }
           

            
        })

        $("#shoppingcar-container-ul").on("click",".product-delete",function(){

           var id=$(this).closest("li").index()
           console.log(id)
           var cookiearr=JSON.parse($.cookie("goods"));
           for(var i=0;i<cookiearr.length;i++){
               if(i == id){
                   cookiearr.splice(0,1)
                   
                   $(this).closest("li").remove()
                   break;
               }
           }
           if(!cookiearr.length){
               $.cookie("goods",null);
           }else{
               $.cookie("goods",JSON.stringify(cookiearr),{
                   expires:7
               })
           }
        })
       

    }

    return{
        datagather:datagather
    }
})