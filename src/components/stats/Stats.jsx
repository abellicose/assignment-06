import styles from "./Stats.module.css";

function Stats() {
    return (
        <section className={`section ${styles.section}`}>
            <div className={`container ${styles.container}`}>
                <ul>
                    <li>
                        <strong>50K+</strong>
                        <span>Active Users</span>
                    </li>
                    <li>
                        <strong>200+</strong>
                        <span>Premium Tools</span></li>
                    <li>
                        <strong>4.9</strong>
                        <span>Rating</span></li>
                </ul>
            </div>
        </section>
    );
}

export default Stats;
