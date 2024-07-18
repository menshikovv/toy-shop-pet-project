import styles from './Cart.module.scss';


function Cart( { title, price, onClick, img }) {
    return (
        <div className={styles.content}>
            <img src={img} alt="monster" onClick={onClick}/>
            <h3 className={styles.title_cart}>{title}</h3>
            <div className={styles.price_cart}>
                <h3 className={styles.price_cart}>{price}</h3>
                <span>₽</span>
            </div>
        </div>
    )
}

export default Cart;