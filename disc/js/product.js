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

require(["select-city","index","category","nav","rightmenu"],function(selectCity,index,category,tabimage,nav,like,goods,rightmenu){
    nav.ajax();
    selectCity.buttonSwitch();
    selectCity.ajax();
    selectCity.select();
    selectCity.click();
    index.headerClick();
    category.category();
    category.touch();
    rightmenu.rightmenu()
    
    
})

