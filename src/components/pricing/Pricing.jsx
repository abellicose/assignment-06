import styles from "./Pricing.module.css";

function Pricing() {
    return (
        <section className="section">
            <div className={`container ${styles.container}`}>
                <h2 className="section-title">Simple, Trasnparent Pricing</h2>
                <p className="section-desc">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                <ul className={styles.cardList}>
                    <li>
                        <article className={styles.card}>
                            <div>
                                <h3>Starter</h3>
                                <p>Perfect for getting started</p>
                            </div>
                            <data value="0">$0<span>/Month</span></data>
                            <ul>
                                <li>Access to 10 free tools</li>
                                <li>Basic Templates</li>
                                <li>Community Support</li>
                                <li>1 Project Per Month</li>
                            </ul>
                            <button className="btn-primary">Get Started for Free</button>
                        </article>
                    </li>

                    <li>
                        <article className={`${styles.card} ${styles.cardHighlight}`}>
                            <span>Most Popular</span>
                            <div>
                                <h3>Pro</h3>
                                <p>Best for professionals</p>
                            </div>
                            <data value="0">$29<span>/Month</span></data>
                            <ul>
                                <li>Access to all premium tools</li>
                                <li>Unlimited templates</li>
                                <li>Priority support</li>
                                <li>Unlimited projects</li>
                                <li>Cloud sync</li>
                                <li>Advanced analytics</li>
                            </ul>
                            <button><span>Start Pro Trial</span></button>
                        </article>
                    </li>

                    <li>
                        <article className={styles.card}>
                            <div>
                                <h3>Enterprise</h3>
                                <p>For teams and businesses</p>
                            </div>
                            <data value="0">$99<span>/Month</span></data>
                            <ul>
                                <li>Everything in pro</li>
                                <li>Team collaboration</li>
                                <li>Custom integration</li>
                                <li>Dedicated support</li>
                                <li>SLA gaurantee</li>
                                <li>Custom branding</li>
                            </ul>
                            <button className="btn-primary">Contact Sales</button>
                        </article>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Pricing;
