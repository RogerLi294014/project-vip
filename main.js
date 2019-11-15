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
        "goods":"goods"
    },
    shim: {
       
        "jquery-cookie": ["jquery"],
      
       
    }
})

require(["select-city","index","category","tabimage","nav","like","goods"],function(selectCity,index,category,tabimage,nav,like,goods){
    nav.ajax();
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
    
    
})

