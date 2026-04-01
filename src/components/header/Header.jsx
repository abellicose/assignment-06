import styles from "./Header.module.css";
import CartIcon from "../../assets/cart.svg";


function Header({cartCount = 0})
{
    return (
        <header>
            <nav>
                <h2><a href="#">DigiTools</a></h2>
                <ul>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#fAQ">FAQ</a></li>
                </ul>
                <div className={styles.btnContainer}>
                    <button className={styles.btnCart}>
                        <img src={CartIcon} alt="Shopping Cart Icon" />
                        <span>{cartCount}</span>
                    </button>
                    <button className={styles.btnLogin}>Login</button>
                    <button className="btn-primary">Get Started</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
