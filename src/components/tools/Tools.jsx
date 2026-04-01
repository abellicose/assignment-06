import styles from "./Tools.module.css";
import CartIcon from "../../assets/cart.svg";
import { useState, use, Suspense } from 'react';
import Card from "./Card.jsx";
import {ToastContainer, toast} from 'react-toastify';

async function getData() {
    const response = await fetch("./products.json");
    return response.json();
}

const dataPromise = getData();

function ProductPanel({cart, setCart}) {
    const products = use(dataPromise);

    function onClickBuy(id) {
        const filtered = [...cart, products.find(product => product.id === id)];
        setCart(filtered);
        toast("Product Added to Cart");
    }

    return (
        <div className={styles.panel}>
            <ul className={styles.panelContent}>
                { products.map(product => <li key={product.id}><Card product={product} onClickBuy={() => onClickBuy(product.id)} isInCart={cart.some(cartProduct => cartProduct.id === product.id)}/></li>) }
            </ul>
        </div>
    );
}

function CartList({cart, setCart}) {
    const total = cart.reduce((accum, curr) => accum + curr.price, 0);

    function handleRemove(id) {
        const filtered = cart.filter(product => product.id !== id);
        setCart(filtered);
        toast("Product Removed From Cart");
    }

    return (
        <>
            <ul>
                {cart.map(item => 
                    <li className={styles.cartList} key={item.id}>
                        <article className={styles.cartItem}>
                            <img src={item.image} alt="" />
                            <div>
                                <h3>{item.name}</h3>
                                <data value={item.price}>${item.price}</data>
                            </div>
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                        </article>
                    </li>
                )}
            </ul>
            <p>Total: <data value={total}>${total}</data></p>
            <button className="btn-primary" onClick={() => { setCart([]); toast("Cart Cleared"); }}>Proceed To Checkout</button>
        </>
    );
}

function Cart({cart, setCart}) {
    return (
        <div className={styles.panel}>
            <div className={styles.cartContent}>
                <h3>Your Cart</h3>
                { cart.length == 0 ?

                <div className={styles.cartEmpty}>
                    <img src={CartIcon} />
                    <p>Your Cart Is Empty!</p>
                </div>

                    : 
                    <CartList cart={cart} setCart={setCart} />
                }
            </div>
        </div>
    );
}

function Loading() {
    return (
        <div className={styles.panel}>
            <div className={styles.cartContent}>
                <h2>Loading products...</h2>
            </div>
        </div>
            );
}

function Tools({active, setActive, cart, setCart}) {
    return (
        <>
            <ToastContainer />
            <section className="section" id="tools">
                <div className={styles.content}>
                    <h2 className="section-title">Premium Digital tools</h2>
                    <p className="section-desc">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                    <div className={styles.btnContainer}>
                        <button className={`${styles.btnTab} ${active == 0 && 'btn-primary'}`} aria-selected={active==0} onClick={() => setActive(0)}>Products</button>
                        <button className={`${styles.btnTab} ${active == 1 && 'btn-primary'}`} aria-selected={active==1} onClick={() => setActive(1)}>Cart ({cart.length})</button>
                    </div>
                </div>

                <div className={styles.panelContainer} data-active={active}>
                    <Suspense fallback={<Loading />}>
                        <ProductPanel cart={cart} setCart={setCart} />
                    </Suspense>

                    <Cart cart={cart} setCart={setCart} />
                </div>
            </section>
        </>
    );
}

export default Tools;
