// SYNCHRONOUS
console.log('Start');

const time = Date.now();
while (Date.now() - time < 5000) {}

console.log('END');

// ASYNCHRONOUS
console.log('Start');
setTimeout(() => {
  console.log('wird später ausgeführt');
}, 5000);

// console.log('END');

fetch('https://fakestoreapi.com/products')
  .then((res) => {
    console.log(res);
    if (!res.ok) throw new Error('Request failed');
    // if (!res.ok) throw new Error(`Request failed with status: ${res.status}`);
    return res.json();
  })
  .then((parsedData) => console.log(parsedData))
  .catch((error) => console.log(error))
  .finally(() => console.log('You will see this in any condition'));

fetch('https://fakestoreapi.com/products', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'Test Product',
    price: 29.99,
    description: 'this is a test product',
  }),
})
  .then((res) => {
    if (!res.ok) throw new Error('request failed');
    return res.json();
  })
  .then((data) => console.log('Produkt erstellt:', data))
  .catch((error) => console.log('error'));

// ASYNC AWAIT

async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Error('request failed');
  const data = await res.json();
  console.log(data);
}

fetchProducts();
