define(["jquery"], function($){
function click(){
$("#address-show").on("click",function(){
    $("#address-select").css("display","block")
    
})
$("#close").on("click", function(){
    $("#address-select").css("display","none")
})

}

    function ajax(){
        
        $.ajax({
            type:"get",
            url:"../data/city_code.json",
            success:function(arr){
                for(var i=0;i<arr.length;i++){
                    var node=$(`<li > <a href="">${arr[i].name}</a></li>`)
                    node.appendTo($("#address-select-province ul"))
                   var city=arr[i].city;
                   
                  
                    for(var j=0;j<city.length;j++){
                        var str=$(`<li > <a href="">${city[j].name}</a></li>`)
                        str.appendTo($("#address-select-city ul"))
                    }
                    select()
                }
            },
            error:function(msg){
                console.log(msg)
            }
        })
    }
    function buttonSwitch(){
        
        $("#address-select-button").find("button").click(function(){
            $(this).addClass("active").siblings().removeClass("active")
           $("#address-select-button div").hide().eq($(this).index()).show();
        })
    }

    function select(){
        $("#address-select-province").find("li","a").on("click",function(){
           
            $("address-select-button div").hide().eq(1).show();
            $("#city").addClass("active").siblings().removeClass("active")
            $(this).addClass("clicked").siblings().removeClass("clicked")
            return false
        })
        
        
    }
    
    return{
        buttonSwitch: buttonSwitch,
        ajax:ajax,
        select:select,
        click:click
       
    }
})