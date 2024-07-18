import { useState, memo } from 'react';
import styles from './Basket.module.scss';
import useHandlePrevious from '../../hooks/useHandlePrevious';
import useHandleNext from '../../hooks/useHandleNext';
import useMinusCount from '../../hooks/useMinusCount';
import useDeleteItem from '../../hooks/useDeleteItem';

const Basket = memo(({ cartItems, renderMenu, updateCartItems, renderOrder }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [items, setItems] = useState(cartItems);

    const handlePrevious = useHandlePrevious(currentIndex, setCurrentIndex);
    const handleNext = useHandleNext(currentIndex, setCurrentIndex, items);
    const minusCount = useMinusCount(items, currentIndex, setItems, updateCartItems);
    const deleteItem = useDeleteItem(items, currentIndex, setItems, setCurrentIndex, updateCartItems)
    

    const currentItem = items[currentIndex];

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {items.length > 0 ? (
                    <div className={styles.cart}>
                        <div className={styles.icons}>
                            <svg onClick={renderMenu} viewBox="0 0 1024 1024" fill="#ffffff" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill=""></path>
                                </g>
                            </svg>
                        </div>
                        <h1 className={styles.title}>КОРЗИНА</h1>
                        <h2 className={styles.name_cart}>{currentItem.title}</h2>
                        <div className={styles.price_cart}>
                            <h3>ЦЕНА: {currentItem.price * currentItem.count}</h3>
                            <span>₽</span>
                        </div>
                        <div className={styles.backs}>
                            <svg onClick={handlePrevious} viewBox="0 0 1024 1024" fill="#a3a3a3" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#a3a3a3">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill=""></path>
                                </g>
                            </svg>
                        </div>
                        <img src={currentItem.img} alt="monster" />
                        <div className={styles.counts}>
                            <p className={styles.count}>КОЛ-ВО: {currentItem.count}</p>
                            <svg onClick={minusCount} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <circle cx="12" cy="12" r="10" stroke="#8c8c8c" strokeWidth="1.5"></circle>
                                    <path d="M15 12H9" stroke="#8c8c8c" strokeWidth="1.5" strokeLinecap="round"></path>
                                </g>
                            </svg>
                            <svg onClick={deleteItem} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="#a3a3a3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 11V17" stroke="#a3a3a3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#a3a3a3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#a3a3a3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#a3a3a3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </div>
                        <div className={styles.forwards}>
                            <svg onClick={handleNext} viewBox="0 0 1024 1024" fill="#a3a3a3" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#a3a3a3" transform="matrix(-1, 0, 0, -1, 0, 0)">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill=""></path>
                                </g>
                            </svg>
                        </div>
                        <button className={styles.checkout} onClick={renderOrder}>ОФОРМИТЬ ЗАКАЗ</button>
                    </div>
                    
                ) : (
                    <div>
                        <h3 className={styles.nothing}>здесь ничего нет :(</h3>
                        <div className={styles.go_shopping}>
                            <button className={styles.go_menu} onClick={renderMenu}>В МЕНЮ</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
});

export default Basket;
