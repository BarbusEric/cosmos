export function addToCart(product) {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
}

export function removeFromCart(productId) {
  return {
    type: "REMOVE_FROM_CART",
    payload: productId,
  };
}

export function clearCart() {
  return {
    type: "CLEAR_CART",
  };
}
