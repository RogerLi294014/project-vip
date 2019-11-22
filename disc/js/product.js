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
        "highwheel":"highwheel"
    },
    shim: {
        "jquery-cookie": ["jquery"],
    }
})

require(["select-city","index","category","nav","rightmenu","goodsAnime","highwheel"],function(selectCity,index,category,nav,rightmenu,goodsAnime,highwheel){
     nav.ajax();
     highwheel.highwheel();
    selectCity.buttonSwitch();
    selectCity.ajax();
    selectCity.select();
    selectCity.click();
    index.headerClick();
    category.category();
    category.touch();
    rightmenu.rightmenu()
    goodsAnime.goodsAnime();
    highwheel.brandClick();
    
    
})

