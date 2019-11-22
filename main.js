require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "selectCity":"select-city",
        "index":"index",
        "category":"category",
        "tabimage":"tabimage",
        "nav":"nav",
        "like":"like",
        "goods":"goods",
        "rightmenu":"rightmenu"
    },
    shim: {
       
        "jquery-cookie": ["jquery"],
      
       
    }
})

require(["select-city","index","category","tabimage","nav","like","goods","rightmenu"],function(selectCity,index,category,tabimage,nav,like,goods,rightmenu){
    nav.ajax();
    index.time();
    goods.goodsD();
    selectCity.buttonSwitch();
    selectCity.ajax();
    selectCity.select();
    selectCity.click();
    index.headerClick();
    category.category();
    category.touch();
    tabimage.enterpic();
    tabimage.bannerTab();
    like.touch();
    rightmenu.rightmenu()
    
    
})

