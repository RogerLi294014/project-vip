require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "datagather":"datagather",
        "shoppingcart":"shoppingcart",
        "index":"index",
        
    },
    shim: {
        "jquery-cookie": ["jquery"],
    }
})

require(["datagather","shoppingcart","index"],function(datagather,shoppingcart,index){
    datagather.datagather();
    shoppingcart.time();
    datagather.cal();
    index.cal();

})