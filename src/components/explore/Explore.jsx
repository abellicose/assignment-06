import styles from "./explore.module.css";

function Explore() {
    return (
        <>
            <section className={`section ${styles.section}`}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.content}>
                        <h2 className={`section-title ${styles.title}`}>Ready To Transform Your Workflow?</h2>
                        <p className={`setion-desc ${styles.desc}`}>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <div>
                            <button>Explore Products</button>
                            <button className={styles.btnInvert}>View Pricing</button>
                        </div>
                        <ul>
                            <li>14-day free trial</li>
                            <li>No credit card required</li>
                            <li>Cancel anytime</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Explore;
