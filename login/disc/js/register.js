require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "datatrans":"datatrans"
        
    },
    shim: {
        "jquery-cookie": ["jquery"],
    }

})

require(["datatrans"],function(datatrans){

    datatrans.formcheck();
    datatrans.transmit();
})

