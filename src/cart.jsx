import { useState, useEffect } from "react";
import { message } from "antd";
import Header from "./header";
import Footer from "./footer";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem('theme') !== null ? localStorage.getItem('theme') : 'light');

  useEffect(() => {
    const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(initialCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    updateCart(updatedCart);
    message.error('Deleted!');
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <header>
        <Header />
      </header>
      <div className="container mt-5">
        <div className={"row " + (theme === 'light' ? 'bg-light' : 'bg-dark text-white')}>
          {cart.length > 0 ? (
            <>
              <div className="col-12 mb-3">
                <h2>Shopping Cart</h2>
              </div>
              {cart.map(item => (
                <div key={item.id} className="col-12 cart-item mb-3">
                  <div className={"d-flex justify-content-between align-items-center " + (theme === 'light' ? 'bg-light' : 'bg-dark text-white')}>
                    <span>{item.name} - ${item.price.toFixed(2)} x {item.quantity}</span>
                    <button 
                      className="btn btn-danger btn-sm" 
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="col-12 mt-3 h">
                <h3>Total: ${calculateTotal()}</h3>
              </div>
            </>
          ) : (
            <div className="col-12 empty-cart ">
              <h3>Cart is empty</h3>
            </div>
          )}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Cart;