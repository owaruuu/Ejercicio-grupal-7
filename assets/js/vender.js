const shoppingCart = document.getElementById('shopping-cart');

shoppingCart.addEventListener('click', () => ShowShoppingCart());

function agregar(id) {
    
    alert("Agregaste el artículo: " + document.getElementById(id).textContent);
    carro(document.getElementById(id).textContent);
}

var msn = "El carro de compra contiene:\n";

function carro(articulo) {
    msn += articulo + " x1." +"\n";
}

function ShowShoppingCart(){
    alert(msn);
}