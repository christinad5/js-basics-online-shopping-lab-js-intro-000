var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function price() {
  return Math.random() <= 100;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var newItem = {itemName: item, itemPrice: price};
  cart.push(newItem);
  return item + ` has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else {
  var thing = "In your cart, you have ";
    for (var i = 0; i < cart.length -1; i++) {
      thing += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
  }
  thing += `and ${cart[cart.length -1].itemName} at $${cart[cart.length -1].itemPrice}.`
}
return thing
}

function total() {
  var price = 0;
  for (var i = 0; i < cart.length; i++) {
    price += cart[i].itemPrice;
  }
  return price
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName = item) {
      cart.splice(i);
    } else {
    return `That item is not in your cart.`
  }
}
}

function placeOrder(cardNumber) {
  // write your code here
}
