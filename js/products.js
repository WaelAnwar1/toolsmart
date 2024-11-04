function loadProducts_jsonFile() {
    $.ajax({
        url: './db/products.json',
        success: function (prods) {
            //console.log(prods);
            for (let i = 0; i < prods.length; i++) {
                $("#products-list").append(`
                <div class="product-item">
                <div class="overlay">
                    <a href="productDetails.html" class="product-thumb">
                        <img src="./assets/${prods[i].image1}" style="width:300px;height:300px; object-fit:cover;" />
                    </a>
                    <span class="discount">0%</span>
                </div>

                <div class="product-info">
                    <span>${prods[i].code}</span>
                    <a href="productDetails.html">${prods[i].title}</a>
                    <h4>${prods[i].sellingPrice} <span> EGP</span></h4>
                </div>

                <ul class="icons">
                    <li><i class="bx bx-heart"></i></li>
                    <li><i class="bx bx-search"></i></li>
                    <li><i class="bx bx-cart"></i></li>
                </ul>
            </div>
                `);
            }
        },
    })
}
loadProducts_jsonFile();