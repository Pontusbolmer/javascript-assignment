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
    console.log(listOfProducts);

    var main = document.querySelector("#main");
    console.log(main);
     //main.innerHTML = "TEST";
     // Iphone börjar här // 
     var btn = document.createElement("BUTTON");
     var t = document.createTextNode("Lägg till i kundkorgen");

     var iPhoneX = document.createElement("h2");
     iPhoneX.innerText = (listOfProducts[0].title);
     
     var iPhoneDescription = document.createElement("h4");
     iPhoneDescription.innerText = listOfProducts[0].description;

     var iPhonePrice = document.createElement("h3");
     iPhonePrice.innerText =  listOfProducts[0].price + " kr";
    
     main.appendChild(iPhoneX);
     main.appendChild(iPhoneDescription);
     
 
     var img = document.createElement("img");
     img.src = "assets/iPhoneX.png";

    
    
     main.appendChild(img);
     main.appendChild(iPhonePrice);
     btn.appendChild(t);
     main.appendChild(btn); 

     // Iphone slutar här //

     // LGV30 börjar här //
     var btn = document.createElement("BUTTON");
     var t = document.createTextNode("Lägg till i kundkorgen");
 
     var LGV30 = document.createElement("h2");
     LGV30.innerText = (listOfProducts[3].title);

     var LGV30Description = document.createElement("h4");
     LGV30Description.innerText = listOfProducts[3].description;

     var LGV30Price = document.createElement("h3");
     LGV30Price.innerText = listOfProducts[3].price + " kr";
 
     main.appendChild(LGV30);
     main.appendChild(LGV30Description);
 
     var img2 = document.createElement("img");
     img2.src = "assets/LGV30.png";
     
 
     main.appendChild(img2);
     main.appendChild(LGV30Price);
     btn.appendChild(t);
     main.appendChild(btn);

     // LGV30 slutar här //
     // ONEPLUS 5 börjar här // 
     var btn = document.createElement("BUTTON");
     var t = document.createTextNode("Lägg till i kundkorgen");
     var onePlus = document.createElement("h2");
     onePlus.innerText = (listOfProducts[1].title);

     var onePlusDescription = document.createElement("h4");
     onePlusDescription.innerText = listOfProducts[1].description;

     var onePlusPrice = document.createElement("h3");
     onePlusPrice.innerText = listOfProducts[1].price + " kr";

     main.appendChild(onePlus);
     main.appendChild(onePlusDescription);

     
     var img3 = document.createElement("img");
     img3.src = "assets/OnePlus5.png";
 
     main.appendChild(img3);
    main.appendChild(onePlusPrice);
    btn.appendChild(t);
    main.appendChild(btn);
 
     console.log(listOfProducts[3]);
     console.log(listOfProducts[3].price);

     // ONEPLUS 5 slutar här //

     // samsung börjar här
     var btn = document.createElement("BUTTON");
     var t = document.createTextNode("Lägg till i kundkorgen");

     var samsungS8 = document.createElement("h2");
     samsungS8.innerText = (listOfProducts[2].title);

     var samsungDescription = document.createElement("h4");
     samsungDescription.innerText = listOfProducts[2].description;

     var samsungPrice = document.createElement("h3");
     samsungPrice.innerText = listOfProducts[2].price + " kr";


     main.appendChild(samsungS8);
     main.appendChild(samsungDescription);
    
 
     var img4 = document.createElement("img");
     img4.src = "assets/SamsungS8.png";
     main.appendChild(img4);
     main.appendChild(samsungPrice);
     btn.appendChild(t);
     main.appendChild(btn);

     // samsubgn slutar här //

     
   
     
    
     
    

    /* Add your code here, remember to brake your code in to
    smaller function blocks to reduce complexity and increase readability */

    /* Each function must have an explainetory comment like the one for this function, see row 15 */
    
    /* Feel free to remove these other comments */
}


/* Read the projects readme before you start! */
/* Good luck and have fun 🤓 */

