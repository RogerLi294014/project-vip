define(["jquery","jquery-cookie"],function($){
    //商品详情页数据加载
    function addcart(){
        var addbtn=$("#info-buy").find("button")
        var bddbtn=$(".menu-hidden").find("button")

        addbtn.on("click",addbtn,function(){
            var color=$("#info-color-select").find(".selected").html()
        var size=$("#info-size-select").find(".selected").html()
          var picture=$("#image-container").find(".image-bigger").attr("src")
          var pnum=$("#info-num-number").find("span").html() 
          var oprice=$("#info-oldprice").html().substring(1);
          var nprice=$("#info-newprice").html().substring(1);
          var overall= Number(pnum)*Number(nprice)
         console.log(nprice)
         console.log(overall)
            cal()
            if(!color){
                alert("请先选择颜色")
            }else if(!size){
                alert("请先选择尺码")
            }else{
                var first=$.cookie("goods")==null?true:false;
            if(first){
                
                var obj=[{num:pnum,color:color,size:size,picture:picture,oprice:oprice,nprice:nprice,overall:overall}];
                
                $.cookie("goods",JSON.stringify(obj),{
                    expires:7
                })
        
    }else{
        var cookiestr=$.cookie("goods");
        var cookiearr=JSON.parse(cookiestr);
        var same=false;
        for(var i=0;i<cookiearr.length;i++){
            if(picture==cookiearr[i].picture&&color==cookiearr[i].color&&size==cookiearr[i].size&&pnum==1){
               
                cookiearr[i].num++;
                cookiearr[i].overall= Number(cookiearr[i].num)*Number (cookiearr[i].nprice)
                same=true;
                break;
            }
            
            if(picture==cookiearr[i].picture&&color==cookiearr[i].color&&size==cookiearr[i].size&&pnum!=1){
                cookiearr[i].num= Number  (cookiearr[i].num)+ Number(pnum);
                cookiearr[i].overall= Number  (cookiearr[i].num)*Number (cookiearr[i].nprice)
                same=true;
                break;
            }

        }
        if(!same){
            var obj={num:pnum,color:color,size:size,picture:picture,oprice:oprice,nprice:nprice,overall:overall};
            cookiearr.push(obj)
        }
        $.cookie("goods",JSON.stringify(cookiearr),{
            expires:7
        })
    }

            }

    //商品详情购物袋点击   
}).on("click",function(){
    var color=$("#info-color-select").find(".selected").html()
        var size=$("#info-size-select").find(".selected").html()
    if(!color){
        return false
    }else if(!size){
        return false
    }else{
        location.assign("shoppingcar.html")
    }
})







bddbtn.on("click",bddbtn,function(){
    var color=$("#info-color-select").find(".selected").html()
var size=$("#info-size-select").find(".selected").html()
  var picture=$("#image-container").find(".image-bigger").attr("src")
  var pnum=$("#info-num-number").find("span").html() 
  var oprice=$("#info-oldprice").html().substring(1);
  var nprice=$("#info-newprice").html().substring(1);
 console.log(nprice)

    if(!color){
        alert("请先选择颜色")
    }else if(!size){
        alert("请先选择尺码")
    }else{
        var first=$.cookie("goods")==null?true:false;
    if(first){
        var obj=[{num:pnum,color:color,size:size,picture:picture,oprice:oprice,nprice:nprice,overall:nprice}];
        $.cookie("goods",JSON.stringify(obj),{
            expires:7
        })

}else{
var cookiestr=$.cookie("goods");
var cookiearr=JSON.parse(cookiestr);
var same=false;
for(var i=0;i<cookiearr.length;i++){
    if(color==cookiearr[i].color&&size==cookiearr[i].size&&pnum==1){
       
        cookiearr[i].num++;
        cookiearr[i].overall= parseInt(cookiearr[i].num)*parseInt(cookiearr[i].nprice)
        same=true;
        break;
    }
    
    if(color==cookiearr[i].color&&size==cookiearr[i].size&&pnum!=1){
        cookiearr[i].num= parseInt(cookiearr[i].num)+ parseInt(pnum);
        cookiearr[i].overall= parseInt(cookiearr[i].num)*parseInt(cookiearr[i].nprice)
        same=true;
        break;
    }

}
if(!same){
    var obj={num:pnum,color:color,size:size,picture:picture,oprice:oprice,nprice:nprice,overall:nprice};
    cookiearr.push(obj)
}
$.cookie("goods",JSON.stringify(cookiearr),{
    expires:7
})
cal();
}

    }

//商品详情购物袋点击   
}).on("click",function(){
var color=$("#info-color-select").find(".selected").html()
var size=$("#info-size-select").find(".selected").html()
if(!color){
return false
}else if(!size){
return false
}else{
location.assign("shoppingcar.html")
}
})
    console.log($.cookie("goods"))
    }

    function cal(){
        var cookiestr=$.cookie("goods");
        if(cookiestr){
            var cookiearr=JSON.parse(cookiestr);
            var sum=0;
           
            for(var i =0; i<cookiearr.length;i++){
                sum+=cookiearr[i].num
               
            }
            $("#logo-cart-num").html(sum)
        }else{
            $("#logo-cart-num").html(0)
        }
        
    }
    return{
        addcart:addcart
    }
})