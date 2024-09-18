const addToCart = (cart, newProduct) => {
  const existingProduct = cart.find((item) => item.id === newProduct.id);

  if (existingProduct) {
    return cart.map((item) => (item.id === newProduct.id ? { ...item, quantity: item.quantity + 1 } : item));
  } else {
    return [...cart, { ...newProduct, quantity: 1 }];
  }
};

const removeFromCart = (cart, newProduct) => {
  const existingProduct = cart.find((item) => item.id === newProduct.id);

  if (existingProduct.quantity === 1) {
    return cart.filter((item) => item.id !== newProduct.id);
  } else {
    return cart.map((item) => (item.id === newProduct.id ? { ...item, quantity: item.quantity - 1 } : item));
  }
};

export { addToCart, removeFromCart };
