import { alternativeStoreProduct } from './storage.js';

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

const alternativeDisplayProducts = (products) => {
  const productsEl = document.getElementById('products');

  products.forEach((item) => {
    const html = `
    <div class="card flex flex-col w-80 bg-white text-black rounded-lg overflow-hidden">
      <img class="w-full h-40 object-contain p-2" src="${item.image}" alt="${item.title}">
      <div class="py-2 px-3">
        <h2 class="font-bold my-2">${item.title}</h2>
        <p>${item.description}</p>
        </div>
        <button class="mt-auto bg-teal-600 m-2 py-2 px-4 rounded-lg hover:bg-teal-800 hover:text-white transition-all">Add to
        Cart</button>
    </div>
  `;

    // Hier erstellen wir eine DOM Node aus dem String direkt.
    // Dann nehmen wir den Button daraus und legen einen EventListener direkt auf ihn.
    // Ist weniger elegant, als ein EventListener auf der ganzen Liste, erleichtert aber das Abspeichern.
    const node = document.createRange().createContextualFragment(html);
    node.querySelector('button').addEventListener('click', () => alternativeStoreProduct(item));
    productsEl.appendChild(node);
  });
};

const albertsFn = () => {
  console.log('Hallo Albert');
};

export { albertsFn, displayProducts, alternativeDisplayProducts };
