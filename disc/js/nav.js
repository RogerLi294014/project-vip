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
                        console.log(titleinfo[j].id)
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

    return{
        ajax:ajax
    }
})