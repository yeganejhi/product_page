const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");
const priceButton = document.getElementById("search-price").querySelector("button");
console.log(priceButton);

const changeClass = (filter) =>{
    buttons.forEach((button)=>{
        if(filter===button.dataset.filter){
            button.classList.add("selected");
        }else{
            button.classList.remove("selected");
        }
    })
}
const searchHandler = (event)=>{
    const searchValue = event.target.value.toLowerCase().trim();
    products.forEach(product =>{
        const productName = product.children[1].innerText.toLowerCase();
        if(productName.includes(searchValue)){
            product.style.display ="block";
        }else{
            product.style.display ="none";
        }
    })
    console.log(searchValue)
};
const filterHandler = (event) =>{
    const filter = event.target.dataset.filter;
    changeClass(filter);
    products.forEach(product =>{
        const category = product.dataset.category;
        if(filter==="all"){
            product.style.display ="block";
        }else{
            if(filter===category){
                product.style.display="block";
            }else{
                product.style.display="none";
            }
        }
    })
}
const searchPriceHandler = (event) =>{
    const searchPrice = +event.target.parentElement.children[0].value;
    products.forEach(product =>{
        const productPrice = product.children[2].innerText;
        const price = +((productPrice.split(" "))[1]);
        if(!searchPrice){
            product.style.display ="block";
        }else{
           if(price===searchPrice){
            product.style.display ="block";
           }else{
            product.style.display ="none";
           }
        }
    })
}
const start = () =>{
searchInput.addEventListener("keyup",searchHandler);
buttons.forEach((button)=>{
    button.addEventListener("click",filterHandler)
});
priceButton.addEventListener("click",searchPriceHandler);
};
window.addEventListener("load",start);
