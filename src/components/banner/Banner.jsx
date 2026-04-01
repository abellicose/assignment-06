import styles from "./Banner.module.css";
import CircleIcon from "../../assets/circle.svg";
import PlayIcon from "../../assets/Play.png";
import BannerImage from "../../assets/banner.png";

function Banner() {
    return (
        <section className={`section ${styles.section}`}>
            <div className={`container ${styles.container}`}>
                <div className={styles.textContainer}>
                    <p className={styles.announcement}>
                        <img src={CircleIcon} alt="" />
                        <span>New: AI-Powered Tools Available</span>
                    </p>
                    <h1>Supercharge Your Digital Workflow</h1>
                    <p>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. 
                    </p>
                    <div className={styles.btnContainer}>
                        <button className="btn-primary"><a href="#tools">Explore Products</a></button>
                        <button className={styles.btnDemo}>
                            <img src={PlayIcon} alt="" />
                            <span>Watch Demo</span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={BannerImage} alt="Banner Image" />
                </div>
            </div>
        </section>
    );
}

export default Banner;
