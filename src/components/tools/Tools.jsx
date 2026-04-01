import styles from "./Tools.module.css";
import CartIcon from "../../assets/cart.svg";
import { useState, use, Suspense } from 'react';
import Card from "./Card.jsx";

async function getData() {
    const response = await fetch("/products.json");
    return response.json();
}

const dataPromise = getData();

function ProductPanel({}) {
    const products = use(dataPromise);

    return (
        <div className={styles.panel}>
            <ul className={styles.panelContent}>
                { products.map(product => <li><Card key={product.id} product={product} /> </li>) }
            </ul>
        </div>
    );
}

function CartList({cart}) {
    const total = cart.reduce((accum, curr) => accum + curr.price, 0);

    return (
        <>
            <ul>
                {cart.map(item => 
                    <li className={styles.cartList}>
                        <article className={styles.cartItem}>
                            <img src={item.image} alt="" />
                            <div>
                                <h3>{item.name}</h3>
                                <data value={item.price}>${item.price}</data>
                            </div>
                            <button>Remove</button>
                        </article>
                    </li>
                )}
            </ul>
            <p>Total: <data value={total}>${total}</data></p>
            <button className="btn-primary">Proceed To Checkout</button>
        </>
    );
}

function Cart({cart}) {
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
                    <CartList cart={cart} />
                }
            </div>
        </div>
    );
}

function Tools() {
    const [active, setActive] = useState(0);
    const [cart, setCart] = useState([
      {
        "id": 0,
        "name": "AI Writing Pro",
        "description": "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
        "price": 29,
        "billing": "monthly",
        "badge": "Best Seller",
        "features": ["Unlimited AI generations", "50+ writing templates", "Grammar checker"],
        "image": "/products/writing.png"
      }
    ]);

    return (
        <section className="section">
            <div className={styles.content}>
                <h2 className="section-title">Premium Digital tools</h2>
                <p className="section-desc">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div className={styles.btnContainer}>
                    <button className={`${styles.btnTab} ${active == 0 && 'btn-primary'}`} aria-selected={active==0} onClick={() => setActive(0)}>Products</button>
                    <button className={`${styles.btnTab} ${active == 1 && 'btn-primary'}`} aria-selected={active==1} onClick={() => setActive(1)}>Cart (2)</button>
                </div>
            </div>

            <div className={styles.panelContainer} data-active={active}>
                <Suspense fallback={<p>Loading...</p>}>
                    <ProductPanel />
                </Suspense>
                
                <Cart cart={cart} />
            </div>
        </section>
    );
}

export default Tools;
