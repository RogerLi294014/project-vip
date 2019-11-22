define(["jquery"],function($){
    
    function time(){
        var i= 1200
        var min=$(".min")
        var sec=$(".sec")
        
        var timer=null;
        timer=setInterval(function(){
        i--
        console.log(doubleNum(i % 60))
        sec.html(doubleNum(i % 60)) 
        min.html(doubleNum(parseInt(i / 60) % 60)) 
        if(i==0){
            alert("结算时间结束，3秒后将返回首页")
            setTimeout(function(){
                location.assign("http://localhost:8888/")
            },3000)
        }

        },1000)

       
       var pbtn= $("#count-im").find("button")
        pbtn.click(function(){
            alert("您的余额不足，请充值")
        })
    }
    function doubleNum(n){
        if(n < 10){
            return "0" + n;
        }else{
            return n;
        }
    }


    return{
        time:time
    }
})