var productList = document.getElementById("productList")

var Products = [{
    productImg: "tickettoride.jpg",
    productTitle: "Ticket to Ride",
    price: "$30"
  },
  {
    productImg: "connect.jpg",
    productTitle: "Connect 4 Game",
    price: "$7"

  },
  {
    productImg: "candy-land.jpg",
    productTitle: "Candy Land Game",
    price: "$13"
  },
  {
    productImg: "rummikub.jpg",
    productTitle: "Rummikub",
    price: "$29"
  },
  {
    productImg: "rekenen.jpg",
    productTitle: "Rekenen",
    price: "$18"
  },
];


Products.forEach(function getProduct(item, index) {

  productList.innerHTML += `
  <div class="row" >
  <div class="col-md-2 bg-secondary p-2 text-center">
    <img src="${item.productImg}" id="productImg" width="30%" class="img-responsive" alt="" srcset="">
  </div>
  <div class="col-md-4 bg-dark p-2 text-center">
    <span id="text-center">"${item.productTitle}"</span>
  </div>
  <div class="col-md-4 bg-secondary p-2 price text-center">
    <span id="text-center align-middle">"${item.price}"</span>
    <i class="fa fa-cart-plus" id='addToCart' aria-hidden="true"></i>
  </div>
  <div class="col-md-2 bg-dark p-2 text-center">
            <span id="text-center"></span>
          </div>
</div>
`
})

function myFunction() {
  var myProducts = document.getElementById("productList");
  if (myProducts.style.display === "none") {
    myProducts.style.display = "block";
  } else {
    myProducts.style.display = "none";
  }
}

/*
const secondBody = document.querySelectorAll("#productList")[0];  //finding using CSS selector
console.log(secondBody)
secondBody.addEventListener("click", getFunction);

function getFunction(event){
  if(event.target.id =="addToCart"){
    console.log("addToCart")

    console.log(event.target.parentElement.parentElement.childNodes[2].nextElementSibling.outerText)
    }

  
}
*/
