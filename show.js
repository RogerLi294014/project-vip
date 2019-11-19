require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "selectCity":"select-city",
        "index":"index",
        "category":"category",
        "nav":"nav",
        "rightmenu":"rightmenu",
        "goodsAnime":"goodsAnime",
       
    },
    shim: {
        "jquery-cookie": ["jquery"],
    }
})

require(["select-city","index","category","nav","rightmenu","goodsAnime"],function(selectCity,index,category,nav,rightmenu,goodsAnime){
    nav.ajax();
    
   selectCity.buttonSwitch();
   selectCity.ajax();
   selectCity.select();
   selectCity.click();
   index.headerClick();
   category.category();
   category.touch();
   rightmenu.rightmenu()
   goodsAnime.goodsAnime();
   
   
})