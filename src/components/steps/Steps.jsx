import styles from "./Steps.module.css";
import UserImg from "../../assets/user.png";
import PackageImg from "../../assets/package.png";
import RocketImg from "../../assets/rocket.png";

function Steps() {
    return (
        <section className={`section ${styles.section}`}>
            <div className="container">
                <div className={styles.sectionContent}>
                    <h2 className="section-title">Get Started In 3 Steps</h2>
                    <p className="section-desc">Start using premium digital tools in minutes, not hours</p>
                </div>

                <ol className={styles.stepsContainer}>
                    <li key="0">
                        <article className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <img src={UserImg} alt="" />
                            </div>
                            <h3>Create Account</h3>
                            <p>Sign up for free in seconds. No credit card required to get started</p>
                        </article>
                    </li>
                    <li key="1">
                        <article className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <img src={PackageImg} alt="" />
                            </div>
                            <h3>Choose Products</h3>
                            <p>Browse our catalog and select the tools that fit your needs.</p>
                        </article>
                    </li>
                    <li key="2">
                        <article className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <img src={RocketImg} alt="" />
                            </div>
                            <h3>Start Creating</h3>
                            <p>Download and start using your premium tools immediately.</p>
                        </article>
                    </li>
                </ol>
            </div>
        </section>
    );
}

export default Steps;
