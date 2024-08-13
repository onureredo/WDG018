import { getProducts } from './modules/network.js';
import { albertsFn, displayProducts, alternativeDisplayProducts } from './modules/ui.js';
// import { handleProductsClick } from './modules/storage.js';

// console.log('Läuft');

window.addEventListener('load', async () => {
  const products = await getProducts(); // getProduct() gibt ein Promise zurück, also müssen wir warten, bis es aufgelöst wird
  // console.log(products);

  // displayProducts(products);

  // albertsFn();
  // handleProductsClick();

  // Hier lesen wir die Dinge aus dem localStorage doppel. Einmal muss der gesamte String in ein Array umgewandelt werden.
  // Wenn er Objekte enthält, dann parsen wir diese noch einmal extra, denn wir mussten sie vor dem Speichern selbst in Strings umwandeln.
  // Das ? ist sog. 'optional chaining' - nur wenn wir etwas im localStorage haben, dann versuchen wir über die Elemente zu loopen.
  // const storedItems = JSON.parse(localStorage.getItem('cart'))?.map((item) => JSON.parse(item));
  // console.log(storedItems);

  // Alternative
  alternativeDisplayProducts(products);
  // In der alternativen Variante ist es einfacher, die Daten aus dem Local Storage zu lesen.
  console.log(JSON.parse(localStorage.getItem('cart')));
});
