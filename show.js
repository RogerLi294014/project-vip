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
        "image":"image",
        "addcart":"addcart",

    },
    shim: {
        "jquery-cookie": ["jquery"],
    }
})

require(["select-city","index","category","nav","rightmenu","goodsAnime","image","addcart"],function(selectCity,index,category,nav,rightmenu,goodsAnime,image,addcart){
    nav.ajax();
    nav.showdata();
    image.imagemove()
   selectCity.buttonSwitch();
   selectCity.ajax();
   selectCity.select();
   selectCity.click();
   index.headerClick();
   category.category();
   category.touch();
   rightmenu.rightmenu()
   goodsAnime.goodsAnime();
   image.imagechange();
   image.buttonselect();
   image.menulist();
   image.menutop();
   image.hiddensize();
   addcart.addcart();

   
})