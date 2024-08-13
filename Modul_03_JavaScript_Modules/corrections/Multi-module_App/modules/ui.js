const displayProducts = (products) => {
  const productsEl = document.getElementById('products');

  products.forEach((item) => {
    // Das ' Zeichen muss durch ein sicheres Apostroph ausgestauscht werden, ansonsten endet der string einfach im HTML
    const data = JSON.stringify(item).replaceAll("'", '&apos;');
    // Achtet auch die einfachen Anführungszeichen in dem data-Attribut (')!
    const html = `
    <div class="card flex flex-col w-80 bg-white text-black rounded-lg overflow-hidden" data-id='${data}' >
      <img class="w-full h-40 object-contain p-2" src="${item.image}" alt="${item.title}">
      <div class="py-2 px-3">
        <h2 class="font-bold my-2">${item.title}</h2>
        <p>${item.description}</p>
        </div>
        <button class="mt-auto bg-teal-600 m-2 py-2 px-4 rounded-lg hover:bg-teal-800 hover:text-white transition-all">Add to
        Cart</button>
    </div>
  `;
    productsEl.innerHTML += html;
  });
};

const albertsFn = () => {
  console.log('Hallo Albert');
};

export { albertsFn, displayProducts };
