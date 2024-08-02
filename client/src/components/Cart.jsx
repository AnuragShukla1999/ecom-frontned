import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTotalCartItems, increaseCartItem, decreaseCartItem, deleteCart, clearCart } from '../redux/Slices/cartSlice'; // Adjust the import path as necessary

const Cart = ({ closeCartComponent }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  
 
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white shadow-lg z-50'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-xl font-bold'>Cart</h1>
        <button 
          onClick={closeCartComponent} 
          className='text-red-500 font-bold'
        >
          Close
        </button>
      </div>
      
      <div className='flex flex-col gap-4'>
        {items.length === 0 ? (
          <p className='text-center text-gray-500'>Your cart is empty</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className='flex justify-between items-center border-b pb-2 mb-2'>
              <img src={item.image} alt={item.name} className='w-16 h-16 object-cover' />
              <div className='flex-1 ml-4'>
                <h2 className='font-semibold'>{item.name}</h2>
                <p className='text-gray-600'>${item.price.toFixed(2)} x {item.quantity}</p>
              </div>
              <span className='font-bold text-lg'>${(item.price * item.quantity).toFixed(2)}</span>
              <div className='flex items-center ml-4'>
                <button 
                  onClick={() => dispatch(increaseCartItem(item.id))}
                  className='bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600'
                >
                  +
                </button>
                <button 
                  onClick={() => dispatch(decreaseCartItem(item.id))}
                  className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 ml-2'
                >
                  -
                </button>
                <button 
                  onClick={() => dispatch(deleteCart(item.id))}
                  className='text-red-500 ml-2'
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className='mt-4 flex justify-between items-center font-bold'>
        <span>Total:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>

      <button 
        className='mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>

      <button 
        className='mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600'
        onClick={() => alert('Proceeding to checkout')}
      >
        Checkout
      </button>
    </div>
  );
}

export default Cart;
