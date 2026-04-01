import styles from "./Card.module.css";

function Card({product, onClickBuy, isInCart}) {
    const {id, name, description: desc, price, billing, badge, features, image} = product;
    return (
        <article className={styles.card}>
            <span className={styles.badge} data-value={badge}>{badge}</span>
            <img src={image} alt="Icon" />
            <h3>{name}</h3>
            <p>{desc}</p>
            <data value={price}>
                ${price}
                <span>/{billing === "monthly" ? "Mo" : "One-Time"}</span>
            </data>
            <ul>
                {features.map((feature, index) => <li key={index}>{feature}</li>)}
            </ul>
            <button className="btn-primary" disabled={isInCart} onClick={onClickBuy}>{isInCart ? "Added" : "Buy Now"}</button>
        </article>
    );
}

export default Card;
