import React from 'react';
import { connect } from 'react-redux';
import { addToCart,removeFromCart } from '../actions/cartActions';

const CartContainer = ({ cartItems, addToCart, removeFromCart }) => {
    return (
        <div className='mx-auto py-4'>
            {/* <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul> */}

            <div className="cart-wrapper">
            <h2 className='mx-auto'>Shopping Cart</h2>
                <div className="img-wrapper item">
                    <img src="https://files.refurbed.com/ii/iphone-13-pro-max-1631711145.jpg?t=resize&h=256&w=256&t=convert&f=webp" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        IPhone 13 Pro
                    </span><br />
                    <span>
                        Price: 30,00000
                    </span>
                </div>
                <span className='cart-count'>{cartItems.length}</span>
                <div className="ml-4 btn-wrapper item">
                    <button
                        onClick={
                            () => { addToCart({ id: 1, price: 3000000, name: 'Product 1' }) }}>
                        Add To Cart</button>

                    <button className='btn btn-primary my-2 bg-dark'
                        onClick={
                            () => removeFromCart() }>
                        Remove</button>
                </div>
            </div>

        </div>
    );
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems
});

const mapDispatchToProps = (dispatch) => ({
    addToCart: (item) => dispatch(addToCart(item)),
    removeFromCart: () => dispatch(removeFromCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)

