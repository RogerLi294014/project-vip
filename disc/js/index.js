define(["jquery"],function($){
function headerClick(){
   $("#login").on("mouseenter",function(){
        $("#login-div").show()
        $("#login").css({
            "borderTop":"1px solid silver",
            "borderRight":"1px solid silver",
            "borderLeft":"1px solid silver",
        });
        
   }).on("mouseleave",function(){
    $("#login-div").hide();
    $("#login").css({
        "borderTop":"",
        "borderRight":"",
        "borderLeft":""
    })
   })

   $("#signup").on("mouseenter",function(){
    $("#signup-div").show();
    
    }).on("mouseleave",function(){
    $("#signup-div").hide();
    })
    $("#sale").on("mouseenter",function(){
        $("#sale-ul").show();
        $("#sale").css({
            "borderTop":"1px solid silver",
            "borderRight":"1px solid silver",
            "borderLeft":"1px solid silver",
        });
        
   }).on("mouseleave",function(){
    $("#sale-ul").hide();
    $("#sale").css({
        "borderTop":"",
        "borderRight":"",
        "borderLeft":""
    })

   })
   $("#club").on("mouseenter",function(){
    $("#club-ul").show();
    $("#club").css({
        "borderTop":"1px solid silver",
        "borderRight":"1px solid silver",
        "borderLeft":"1px solid silver",
    });
    
    }).on("mouseleave",function(){
    $("#club-ul").hide();
    $("#club").css({
        "borderTop":"",
        "borderRight":"",
        "borderLeft":""
    })
    })
    $("#client").on("mouseenter",function(){
        $("#client-ul").show();
        $("#client").css({
            "borderTop":"1px solid silver",
            "borderRight":"1px solid silver",
            "borderLeft":"1px solid silver",
        })
        
   }).on("mouseleave",function(){
    $("#client-ul").hide();
    $("#client").css({
        "borderTop":"",
        "borderRight":"",
        "borderLeft":""
    })
   })
   $("#mobile").on("mouseenter",function(){
    $("#mobile-div").show();
    $("#mobile").css({
        
        "borderRight":"1px solid silver",
        "borderLeft":"1px solid silver",
    })
    
}).on("mouseleave",function(){
$("#mobile-div").hide();
$("#mobile").css({
    
    "borderRight":"",
    "borderLeft":""
})
})

$("#more").on("mouseenter",function(){
    $("#more-div").show();
    $("#more").css({
        
        "borderRight":"1px solid silver",
        "borderLeft":"1px solid silver",
    })
    
}).on("mouseleave",function(){
$("#more-div").hide();
$("#more").css({
    
    "borderRight":"",
    "borderLeft":""
})
})

$("#nav-more").on("mouseenter",function(){
    $("#nav-more-ul").show();
    $("#nav-more").css({
        "background-color":"#f5f5f5",
        "border-right":"1px solid silver",
        "border-left":"1px solid silver",
    })
    
    
}).on("mouseleave",function(){
$("#nav-more-ul").hide();
$("#nav-more").css({
    "background-color":"burlywood",
    "borderRight":"",
    "borderLeft":""
})
})

}

return{
    headerClick:headerClick
}

})