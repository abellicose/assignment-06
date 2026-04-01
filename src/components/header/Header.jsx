import styles from "./Header.module.css";
import CartIcon from "../../assets/cart.svg";
import { useState } from 'react';

function Header({cartCount = 0, openCart})
{
    const [hamb, setHamb] = useState(false);
    
    return (
        <header>
            <nav>
                <div className={styles.mainTrav} data-open={hamb} onClick={() => setHamb(!hamb)}>
                    <svg width="24" height="24" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
                        <line className={styles.fLine} x1="0" y1="2"  x2="24" y2="2"  stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                        <line className={styles.sLine} x1="0" y1="12"  x2="16" y2="12"  stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                        <line className={styles.tLine} x1="0" y1="22" x2="24" y2="22" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                    </svg>
                    <h2><a href="#">DigiTools</a></h2>
                </div>
                <ul className={styles.menu} data-open={hamb}>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#fAQ">FAQ</a></li>
                </ul>
                <div className={styles.btnContainer}>
                    <button className={styles.btnCart} onClick={openCart}>
                        <a href="#tools">
                            <img src={CartIcon} alt="Shopping Cart Icon" />
                            <span>{cartCount}</span>
                        </a>
                    </button>
                    <button className={styles.btnLogin}>Login</button>
                    <button className="btn-primary">Get Started</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
