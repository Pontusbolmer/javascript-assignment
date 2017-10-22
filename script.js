/* GLOBAL VARIABLES */
var listOfProducts;
// add more global variables when needed..

/* Get products from the json file and store it in a javascript variable */
fetch("./products.json")
.then(function(response) {
    return response.json();
})
.then(function(products) {
    listOfProducts = products;
    createUIFromLoadedProducts();
});

/** Uses the loaded products data to create a visible product list on the website */
function createUIFromLoadedProducts() {
    /* Check your console to see that the products are stored in the listOfProducts varible */
    //console.log(listOfProducts);

    var clicks = 0;
    var i = 1;
    

    listOfProducts.forEach(function(product)
    {
        var main = document.querySelector("#main");
        var productDiv = document.createElement("div");
        productDiv.setAttribute("id", "div" + i);
       console.log(product.title)

       var title = document.createElement("h1");
       title.innerText = product.title;
       productDiv.appendChild(title);

       var getproductimage = document.createElement("img");
       getproductimage.src ="assets/" + product.image;
       productDiv.appendChild(getproductimage);

       var description = document.createElement("h3");
       description.innerText = product.description;
       productDiv.appendChild(description);
        
       var price = document.createElement("h4");
       price.innerText = product.price + " kr";
       productDiv.appendChild(price);

       var btn = document.createElement("BUTTON");
       btn.innerHTML = '<i class="fa fa-shopping-cart fa-3x" aria-hidden="true"></i> Lägg till i kundkorgen';
       productDiv.appendChild(btn);

       main.appendChild(productDiv);
       
       var kundvagn = document.querySelector("#counter");

       btn.onclick = function() {
            clicks += 1;
            kundvagn.innerHTML = clicks;
            alert("Du lade till " + product.title + " i kundvagnen!");
        }
       
        i++;
   });
    

        
        
   




    
    //console.log(main);//
     //main.innerHTML = "TEST";
     // Iphone börjar här 
     
     
     
      
     

     
   /*

var span = document.querySelector("span");
      buttonElement.onclick = function() {
         button += 1;
         span.innerText = button;
      }

   */
     
   
/*
    
   
     var clicks = 0;
     document.getElementById("buy").addEventListener("click", function(){
        alert("test");
         var kundvagn = document.querySelector("#counter");
         clicks +=1;
     
         kundvagn.innerHTML = clicks;
     
         
     }); 

     */
    

    /* Add your code here, remember to brake your code in to
    smaller function blocks to reduce complexity and increase readability */

    /* Each function must have an explainetory comment like the one for this function, see row 15 */
    
    /* Feel free to remove these other comments */
}


/* Read the projects readme before you start! */
/* Good luck and have fun 🤓 */

