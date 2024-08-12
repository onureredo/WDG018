console.log('Läuft');

const productsEl = document.getElementById('products');

const options = {
  method: 'GET',
};

// fetch('https://fakestoreapi.com/products?limit=5', options)
//   .then((response) => {
//     console.log(response);
//     if (!response.ok) throw Error('Something went wrong');

//     return response.json();
//   })
//   .then((data) => {
//     // etwas mit den Daten tun
//     console.log(data);
//     renderProducts(data)
//   })
//   .catch((error) => {
//     // Etwas mit dem Fehler tun
//     console.error(error);
//   });

const renderProducts = (products) => {
  products.forEach((element) => {
    const html = `
     <div class="w-72 bg-white text-black rounded-lg overflow-hidden">
      <img class="w-full" src="${element.image}" alt="${element.title}">
      <div class="py-2 px-3">
        <h2 class="font-bold my-2">${element.title}</h2>
        <p>${element.description}</p>
      </div>
    </div>
    `;

    productsEl.innerHTML += html;
  });
};

const getProducts = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products?limit=5', options);
    // console.log(res);
    if (!res.ok) throw Error('Fetching failed');

    const data = await res.json();

    console.log(data);
    // renderProducts(data);
  } catch (error) {
    // Etwas mit dem Fehler tun
    console.error(error);
  }
};

getProducts();
