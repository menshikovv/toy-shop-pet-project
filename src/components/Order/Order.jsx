import { useEffect, useState } from 'react';
import styles from './Order.module.scss';

function Order({ renderBasket, renderThank }) {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [isThank, setIsThank] = useState(false);
    const [errors, setErrors] = useState({
        country: '',
        city: '',
        address: '',
        name: '',
        number: ''
    });
    const tg = window.Telegram.WebApp;

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    };

    const onChangeCity = (e) => {
        setCity(e.target.value);
    };

    const onChangeAddress = (e) => {
        setAddress(e.target.value);
    };

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeNumber = (e) => {
        setNumber(e.target.value);
    };

    const validateField = (fieldName, value) => {
        switch (fieldName) {
            case 'country':
                if (/[^a-zA-Zа-яА-ЯёЁ\s]/.test(value)) {
                    return 'Страна должна содержать только буквы и пробелы';
                } else if (value.length < 2) {
                    return 'Страна должна быть не менее 2 символов';
                }
                break;
            case 'city':
                if (/[^a-zA-Zа-яА-ЯёЁ\s]/.test(value)) {
                    return 'Город должен содержать только буквы и пробелы';
                }
                break;
            case 'address':
                if (!/^[a-zA-Zа-яА-ЯёЁ0-9\s\-\/]*$/.test(value)) {
                    return 'Адрес может содержать только буквы, цифры, тире и /';
                } else if (value.length < 4) {
                    return 'Адрес должен быть не менее 4 символов';
                }
                break;
            case 'name':
                if (/[^a-zA-Zа-яА-ЯёЁ\s]/.test(value)) {
                    return 'Имя должно содержать только буквы и пробелы';
                }
                break;
            case 'number':
                if (!/^[0-9+\-()]*$/.test(value)) {
                    return 'Номер телефона может содержать только цифры, плюс, минус и скобки';
                } else if (value.length < 3) {
                    return 'Номер телефона должен быть не менее 3 символов';
                }
                break;
            default:
                break;
        }
        return '';
    };

    const handleBlur = (fieldName, value) => {
        const errorMessage = validateField(fieldName, value);
        setErrors(prevErrors => ({
            ...prevErrors,
            [fieldName]: errorMessage
        }));
    };

    useEffect(() => {
        if (!country || !city || !address || !name || !number) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.text = 'ОПЛАТИТЬ';
            tg.MainButton.show();
        }

        return () => {
            tg.MainButton.hide();
        };
    }, [country, city, address, name, number]);

    useEffect(() => {
        tg.MainButton.onClick(() => {
            setIsThank(true);   
        })
        return () => {
            tg.MainButton.hide();
        };
    }, []);

    return (
        <div className={styles.wrapper}>
            {isThank ? (
                renderThank()
            ) : (
                <div className={styles.content}>
                    <div className={styles.icons}>
                        <svg onClick={renderBasket} viewBox="0 0 1024.00 1024.00" fill="#ffffff" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="10.24"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill=""></path>
                            </g>
                        </svg>
                    </div>
                    <h1 className={styles.order}>ОФОРМЛЕНИЕ ЗАКАЗА</h1>
                    <form>
                        <label>Страна:</label>
                        <input type="text" placeholder='Введите вашу страну' onBlur={(e) => handleBlur('country', e.target.value)} onChange={onChangeCountry} value={country} />
                        {errors.country && <p className={styles.error}>{errors.country}</p>}
                        <label>Город:</label>
                        <input type="text" placeholder='Введите ваш город' onBlur={(e) => handleBlur('city', e.target.value)} onChange={onChangeCity} value={city} />
                        {errors.city && <p className={styles.error}>{errors.city}</p>}
                        <label>Адрес доставки:</label>
                        <input type="text" placeholder='Введите ваш адрес' onBlur={(e) => handleBlur('address', e.target.value)} onChange={onChangeAddress} value={address} />
                        {errors.address && <p className={styles.error}>{errors.address}</p>}
                        <label>Ваше имя:</label>
                        <input type="text" placeholder='Введите ваше имя' onBlur={(e) => handleBlur('name', e.target.value)} onChange={onChangeName} value={name} />
                        {errors.name && <p className={styles.error}>{errors.name}</p>}
                        <label>Номер телефона:</label>
                        <input type="text" placeholder='Введите ваш номер' onBlur={(e) => handleBlur('number', e.target.value)} onChange={onChangeNumber} value={number} />
                        {errors.number && <p className={styles.error}>{errors.number}</p>}
                    </form>
                </div>
            )}
        </div>
    );
}

export default Order;
