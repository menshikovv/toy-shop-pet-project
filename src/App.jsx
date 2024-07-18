import { useState, useEffect } from "react";
import Loading from "./components/Loading/Loading";
import Menu from "./components/Menu/Menu";
import MainCart from "./components/MainCart/MainCart";
import Basket from "./components/Basket/Basket";
import Thank from "./components/Thank/Thank";
import Order from "./components/Order/Order";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [view, setView] = useState('menu');
    const [selectedCart, setSelectedCart] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const tg = window.Telegram.WebApp;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        tg.ready();
    }, [])

    const renderMenu = () => {
        setView('menu');
    };

    const renderThank = () => {
        setView('thank');
    }

    const updateCartItems = (newItems) => {
        setCartItems(newItems);
    }

    const renderMainCart = (cart) => {
        setSelectedCart(cart);
        setView('mainCart');
    };

    const renderBasket = () => {
        setView('basket');
    };

    const renderOrder = () => {
        setView('order');
    }

    const addToCart = (item) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(i => i.title === item.title);
            if (existingItem) {
                return prevItems.map(i => 
                    i.title === item.title ? { ...i, count: i.count + 1 } : i
                );
            } else {
                return [...prevItems, { ...item, count: 1 }];
            }
        });
    };

    const clearCart = () => {
        setCartItems([]);
    }

    let content;
    if (isLoading) {
        content = <Loading />;
    } else if (view === 'menu') {
        content = <Menu renderMainCart={renderMainCart} renderBasket={renderBasket}/>;
    } else if (view === 'mainCart') {
        content = (
            <MainCart
                titleCart={selectedCart.title} 
                priceCart={selectedCart.price} 
                img={selectedCart.img} 
                addToCart={addToCart} 
                renderMenu={renderMenu}
                renderBasket={renderBasket}
            />
        );
    } else if (view === 'basket') {
        content = <Basket cartItems={cartItems} renderMenu={renderMenu} updateCartItems={updateCartItems} renderOrder={renderOrder}/>;
    } else if (view === 'order') {
        content = <Order renderBasket={renderBasket} renderThank={renderThank}/>
    } else if (view === 'thank') {
        content = <Thank renderMenu={renderMenu} clearCart={clearCart}/>
    }

    return (
        <div>
            {content}
        </div>
    );
}

export default App;
