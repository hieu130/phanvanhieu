var products=[
    {
        productName: "Flying ninja",
        price: 12,
        image:"https://product.hstatic.net/1000088324/product/tw005d-t_n1_c26e9e9f0ffa49eab9cdde94c24094f5_master.jpg",
        star:3.5
    },
    {
        productName: "Flying ninja",
        price: 12,
        image:"/imgs/img1.png",
        star:3.5
    },
    {
        productName: "Flying ninja",
        price: 12,
        image:"/imgs/img1.png",
        star:3.5
    },
    {
        productName: "Flying ninja",
        price: 12,
        image:"/imgs/img1.png",
        star:3.5
    },
    {
        productName: "Flying ninja",
        price: 12,
        image:"/imgs/img1.png",
        star:3.5
    },
    {
        productName: "Flying ninja",
        price: 12,
        image:"/imgs/img1.png",
        star:3.5
    },
    {
        productName: "Flying ninja",
        price: 12,
        image:"/imgs/img1.png",
        star:3.5
    },
    {
        productName: "Flying ninja",
        price: 12,
        image:"/imgs/img1.png",
        star:3.5
    }
]
function gridProduct() {
    var grid_html = "";
    for(var i=0;i<6;i++){
        grid_html+= "<div class=\"col-md-4\">\n" +
            "                     <div class=\"item text-center\">\n" +
            "                         <img class=\"product-image\" src=\"imgs/ao-thun-tennis-tts100-cho-nam-den.jpg\" height=\"700\" width=\"700\"/>\n" +
            "                         <h2 class=\"product-name\">Flying ninja</h2>\n" +
            "                         <div class=\"star\">\n" +
            "                             <div class=\"star-box\">\n" +
            "                                 <div class=\"star-rate\" style=\"width: 74%\"></div>\n" +
            "                             </div>\n" +
            "                         </div>\n" +
            "                         <p class=\"price\">$12</p>\n" +
            "                         <a href=\"#\" class=\"add-to-cart text-uppercase\">Add To Cart</a>\n" +
            "                     </div>\n" +
            "                 </div>";
    }
    return grid_html;
}
var products_html = document.getElementById("products");
products_html.innerHTML = gridProduct();
