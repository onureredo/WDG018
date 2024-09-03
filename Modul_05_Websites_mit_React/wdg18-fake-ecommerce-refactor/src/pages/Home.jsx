import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useParams, useOutletContext } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { name } = useParams();
  const { cart, setCart } = useOutletContext();

  useEffect(() => {
    const url = name
      ? `https://fakestoreapi.com/products/category/${name}`
      : 'https://fakestoreapi.com/products';

    const fetchProducts = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('failed to fetch products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [name]);

  return (
    <div className='grid grid-cols-4 gap-5'>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
  );
};

export default Home;
