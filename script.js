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

    var clicks = 0;  /* säter min variabel clicks att börja på 0, för att den ska börja räkna från 0 */
    var i = 1;      /* Vi skapar en räknare */
    

    listOfProducts.forEach(function(product)  /* Här börjar min foreach loop */
    {
        var main = document.querySelector("#main");  /* här väljer jag att ladda upp allt från loopen i min id main */
        var productDiv = document.createElement("div"); /* Här skapar jag en div som skapar 4 divar, eftersom den är med i loopen*/
        productDiv.setAttribute("id", "div" + i);/* Här sätter jag ett id till varje div, de första får värdet 1*/
       console.log(product.title)

       var title = document.createElement("h1");  /* Här loopar jag ut varje h1 från json filen */
       title.innerText = product.title;           /* här lägger vi ut texten i h1 */
       productDiv.appendChild(title);             /* här skriver vi ut den på hemsidan, men i vår produktdiv */

       var getproductimage = document.createElement("img");  /* här skapar vi ett elemeent i detta fallet, en bild */
       getproductimage.src ="assets/" + product.image;       /* här hämtar vi vi bilden från mappen assets, som är en bild i json arrayen */
       productDiv.appendChild(getproductimage);              /* här skriver vi ut bildern fast den hamnar i vår produkt div */

       var description = document.createElement("h3");
       description.innerText = product.description;
       productDiv.appendChild(description);
        
       var price = document.createElement("h4");
       price.innerText = product.price + " kr";
       productDiv.appendChild(price);

       var btn = document.createElement("BUTTON");  /* här skapar vi knappen */
       btn.innerHTML = '<i class="fa fa-shopping-cart fa-3x" aria-hidden="true"></i> Lägg till i kundkorgen'; /* här lägger jag i kundkorgen i knappen */
       productDiv.appendChild(btn);

       main.appendChild(productDiv); /* här lägger jag ut att productdiven ska läggas i min id main */
       
       var kundvagn = document.querySelector("#counter");   /* Vi väljer platsen där räknaren ska visas, vi selectar counter */

       btn.onclick = function() {   /* här lägger jag en onclick funktion till min knapp */
            clicks += 1;            /* här så ökar det med 1 varje gång någon trycker på knappen */
            kundvagn.innerHTML = clicks; /* här lägger jag clicks i kundvagnen */
            alert("Du lade till " + product.title + " i kundvagnen!");
        }
       
        i++;  /* plusar på räknaren */
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

