define(["jquery","jquery-cookie"],function($){

    function addcart(){
        var addbtn=$("#info-buy").find("button")
      

        addbtn.on("click",addbtn,function(){
            var color=$("#info-color-select").find(".selected").html()
        var size=$("#info-size-select").find(".selected").html()
          var picture=$("#image-container").find(".image-bigger").attr("src")
          var pnum=$("#info-num-number").find("span").html() 
          var oprice=$("#info-oldprice").html();
          var nprice=$("#info-newprice"). find("span").html();
          console.log(color);
            console.log(size)
            console.log(pnum)
            console.log(picture)
            var first=$.cookie("goods")==null?true:false;
            if(first){
                var obj=[{num:1,color:color,size:size,picture:picture,oprice:oprice,nprice:nprice,overall:nprice}];
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
            var obj={num:1,color:color,size:size,picture:picture,oprice:oprice,nprice:nprice,overall:nprice};
            cookiearr.push(obj)
        }
        $.cookie("goods",JSON.stringify(cookiearr),{
            expires:7
        })
    }
})
    console.log($.cookie("goods"))
    }


    return{
        addcart:addcart
    }
})