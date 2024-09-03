import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../utils/cart';

const ProductCard = ({ product, cart, setCart }) => {
  const { title, image, price, category } = product;
  const isProductInCart = cart.find((item) => item.id === product.id);

  return (
    <div className='card bg-base-100 shadow-xl'>
      <figure className='bg-white h-48 p-3'>
        <img src={image} alt='' className='object-contain h-full w-full' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title truncate'>{title}</h2>
        <p>{price} €</p>
        <div className='card-actions justify-between items-center'>
          <Link to=''>More from {category}</Link>

          {isProductInCart ? (
            <>
              <button
                onClick={() => {
                  const newArray = removeFromCart(cart, product);
                  setCart(newArray);
                }}
              >
                -
              </button>
              <span>{isProductInCart.quantity}</span>
              <button
                onClick={() => {
                  const newArray = addToCart(cart, product);
                  setCart(newArray);
                }}
              >
                +
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                const newArray = addToCart(cart, product);
                setCart(newArray);
              }}
              className='btn btn-primary'
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
