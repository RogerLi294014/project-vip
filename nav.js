define(["jquery"],function($){

    function ajax(){
        $.ajax({
            type:"get",
            url:"../data/nav.json",
            success:function(obj){
                    var arr=obj.nav;
                    for(var i=0;i<arr.length;i++){
                    
                    var node=$(`<li><a href="">${arr[i].title}</a></li>`)
                   var div=$(`<div class="nav-ul-category-list ${arr[i].id}"></div>`)
                    node.appendTo("#nav-ul-category-ul")
                    div.appendTo("#nav-ul-category-container")
                   
               
                     var titleinfo=arr[i].list
                     for( var j=0;j<titleinfo.length;j++){
                        var title=$(`<dl class="nav-ul-category-title"><div class="nav-dt">
                        <dt >${arr[i].list[j].title}&gt;</dt></div><div class="nav-dd ${titleinfo[j].id}" "></div></dl>`)
                        var num=$(`${arr[i].id}`)
                        title.appendTo(div).find(num);

                        var span=titleinfo[j].info
                        
                        for(var k=0;k<span.length;k++){
                            var newspan=$(`<dd><a href="">${span[k]}</a></dd>`)
                            var spannum=$(`${titleinfo[j].id}`)
                            newspan.appendTo(title).find(spannum)
                        }
                        
                     }
                }
                
                
                
                
                
                
                
                
                
                
               
            },
            error:function(msg){
                console.log(msg)
            }
        })

    }

    function showdata(){

        $.ajax({
            type:"get",
            url:"../data/highwheel.json",
            success:function(obj){
                var arr= obj.highwheel
                console.log(arr)
                for(var i=0;i<arr.length;i++){
                    if(arr[i].id == getUrlParam("id")){
                        image=arr[i].img
                        color=arr[i].color
                        discount=arr[i].discount
                        oldprice=arr[i].oldprice
                        if(arr[i].price==""){
                            specialprice=arr[i].specialprice
                        }else{
                            specialprice=arr[i].price
                        }
                        title=arr[i].title
                        size=arr[i].size

                        console.log(image)
                        console.log(color)
                        console.log(discount)
                        console.log(specialprice)
                        console.log(title)
                        console.log(oldprice)
                        console.log(size)
                        for(var j=0;j<color.length;j++){
                            var colornode=$(` <button>${color[j]}</button>`)
                            colornode.appendTo("#info-color-select")
                        }
                        

                    }
                }

            },
            error:function(msg){
                console.log(msg)
            }

        })
    }

    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }

    return{
        ajax:ajax,
        showdata:showdata
       
    }
})