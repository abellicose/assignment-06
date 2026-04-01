import styles from "./footer.module.css";
import FBLogo from "../../assets/fb-logo.svg";
import IGLogo from "../../assets/ig-logo.svg";
import TwitterLogo from "../../assets/twitter-logo.svg";

function Footer() {
    return (
        <footer className={`section ${styles.footer}`}>
            <div className="container">
                <div className={styles.content}>
                    <div>
                        <h2 className={`section-title ${styles.title}`}>DigiTools</h2>
                        <p className={`section-desc ${styles.desc}`}>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>

                    <div>
                        <h3>Product</h3>
                        <ul>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Templates</li>
                            <li>Integrations</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Company</h3>
                        <ul>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Resources</h3>
                        <ul>
                            <li>Documentation</li>
                            <li>Help Center</li>
                            <li>Community</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className={styles.social}>
                        <h3>Social Links</h3>
                        <ul>
                            <li><img src={IGLogo} alt="" /></li>
                            <li><img src={FBLogo} alt="" /></li>
                            <li><img src={TwitterLogo} alt="" /></li>
                        </ul>
                    </div>

                </div>

                <hr />

                <div className={styles.copyright}>
                    <p>&copy; 2026 Digitools. All rights reserved</p>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookies</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
