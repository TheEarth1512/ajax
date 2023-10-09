$(function(){
  $("body").append($('<div>').load("navigation.html")); 
  $("body").append($('<div>').load("banner.html")); 
  $("body").append($('<div>').load("products.html")); 

  // load products from api listing

  function loadProducts(products) {
    let listProduct = '';

    products.forEach(product => {
      listProduct+= `
        <li>
            <a href="">
                <div class="item-img">
                    <img src="${product.image}" alt="">
                </div>
                <h3>${product.title}</h3>
                <strong class="price">
                    29.190.000₫
                </strong>

                <p class="vote-txt">
                <strong>4.5</strong>
                    <img src="./assets/img/star.svg" alt="">
                </p>            
            </a>
        </li>      
      `
    });


    $('#products').html(`<ul>${listProduct}</ul>`);
  }


  $.ajax({
    url: "https://fakestoreapi.com/products",
    method: "GET",
    success: function(data) {
      console.log("Data received:", data);
      loadProducts(data);
    },
    error: function() {
      console.log("Error retrieving data.");
    }
  });
  
});