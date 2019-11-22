require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "datagather":"datagather",
        "shoppingcart":"shoppingcart"
        
    },
    shim: {
        "jquery-cookie": ["jquery"],
    }
})

require(["datagather","shoppingcart"],function(datagather,shoppingcart){
    datagather.datagather();
    shoppingcart.time();
    datagather.cal()

})