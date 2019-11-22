require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "loginswitch":"loginswitch"
        
        
    },
    shim: {
        "jquery-cookie": ["jquery"],
    }

})

 require(["loginswitch"],function(loginswitch){
     loginswitch.tabswitch();
     loginswitch.datacheck();

 })
