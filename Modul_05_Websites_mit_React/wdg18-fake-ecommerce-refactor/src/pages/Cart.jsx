import { useOutletContext } from 'react-router-dom';
import { addToCart, removeFromCart } from '../utils/cart.js';

const Cart = () => {
  const { cart, setCart } = useOutletContext();

  if (!cart.length) {
    return <div>No items in Cart!</div>;
  }

  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        <thead>
          <tr>
            <th>Product</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt='' className='w-24 h-24' />
              </td>
              <td>{item.title}</td>
              <td>
                <button
                  onClick={() => {
                    const newArray = removeFromCart(cart, item);
                    setCart(newArray);
                  }}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => {
                    const newArray = addToCart(cart, item);
                    setCart(newArray);
                  }}
                >
                  +
                </button>
              </td>
              <td>{item.quantity * item.price} €</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
