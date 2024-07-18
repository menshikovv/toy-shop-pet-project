import styles from './MainCart.module.scss';
import { useState, memo, useCallback } from 'react';

const CountDisplay = memo(({ count }) => {
    return <p className={styles.count}>КОЛИЧЕСТВО: {count}</p>;
});

function MainCart({ titleCart, priceCart, img, addToCart, renderMenu, renderBasket }) {
    const [count, setCount] = useState(0);
    const [showAdded, setShowAdded] = useState(false);

    const handleAddToCart = useCallback(() => {
        addToCart({ title: titleCart, price: priceCart, img });
        setCount(prevCount => prevCount + 1);
        setShowAdded(true);
        setTimeout(() => setShowAdded(false), 500);
    }, [addToCart, titleCart, priceCart, img]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.icons}>
                <svg onClick={renderMenu} viewBox="0 0 1024.00 1024.00" fill="#ffffff" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="10.24"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill=""></path>
                    </g>
                </svg> 
                <svg onClick={renderBasket} className={styles.basket} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path d="M20 10L18.5145 17.4276C18.3312 18.3439 18.2396 18.8021 18.0004 19.1448C17.7894 19.447 17.499 19.685 17.1613 19.8326C16.7783 20 16.3111 20 15.3766 20H8.62337C7.6889 20 7.22166 20 6.83869 19.8326C6.50097 19.685 6.2106 19.447 5.99964 19.1448C5.76041 18.8021 5.66878 18.3439 5.48551 17.4276L4 10M20 10H18M20 10H21M4 10H3M4 10H6M6 10H18M6 10L9 4M18 10L15 4M9 13V16M12 13V16M15 13V16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                    </g>
                </svg>
            </div>
            <div className={styles.main_cart}>
                <h1 className={styles.name_cart}>{titleCart}</h1>
                <div className={styles.price_cart}>
                    <p>ЦЕНА: {priceCart}</p>
                    <span>₽</span>
                </div>
                <img src={img} alt="monster" />
                {showAdded && <p className={styles.add}>Добавлено в корзину!</p>}
                <button className={styles.buy_cart} onClick={handleAddToCart}>ДОБАВИТЬ В КОРЗИНУ</button>
                <CountDisplay count={count} />
            </div>
        </div>
    );
}

export default MainCart;
