const handleProductsClick = () => {
  const productsEl = document.getElementById('products');
  productsEl.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.matches('button')) {
      // console.log(clickedElement.closest('.card'));
      const item = clickedElement.closest('.card').dataset.id;

      // let storedItems;
      // if (localStorage.getItem('cart') === null) {
      //   storedItems = [];
      // } else {
      //   storedItems = JSON.parse(localStorage.getItem('cart'));
      // }

      const storedItems = JSON.parse(localStorage.getItem('cart')) || [];

      storedItems.push(item);
      console.log(storedItems);
      localStorage.setItem('cart', JSON.stringify(storedItems));
    }
  });
};

const alternativeStoreProduct = (product) => {
  const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
  storedItems.push(product);
  localStorage.setItem('cart', JSON.stringify(storedItems));
};

export { alternativeStoreProduct, handleProductsClick };
