import styles from './Thank.module.scss';
import { useState } from 'react';

function Thank({ renderMenu, clearCart }) {
    const [isLoading, setIsLoading] = useState(true);
    const [isMenu, setIsMenu] = useState(false);
    const tg = window.Telegram.WebApp;

    const timer = setTimeout(() => {
        setIsLoading(false);
        
        return () => {
            clearTimeout(timer)
        }
    }, 1500);

    if(!isLoading) {
        tg.MainButton.text = 'ВЕРНУТЬСЯ В МЕНЮ';
        tg.MainButton.onClick(() => {
            setIsMenu(true);
            clearCart();
        })
        tg.MainButton.show();
    }

    if(isMenu) {
        tg.MainButton.hide();
    }

    return (
        <>
            { isMenu && renderMenu() }
            { isLoading ? ( <div className={styles.balls}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div> )
            : (
                <div className={styles.wrapper}>
                        <h1 className={styles.thank}>СПАСИБО!</h1>
                        <h3 className={styles.text}>Ваш заказ оплачен и будет доставлен в течении 5-7 дней</h3>
                        <svg viewBox="0 0 512 512" fill="#000000">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path style={{ fill: '#FFC033' }} d="M256,133.6c-56.397,0-109.473-22.02-149.459-62c-6.521-6.515-6.521-17.086,0-23.607 c6.511-6.521,17.086-6.521,23.607,0c33.682,33.671,78.373,52.218,125.853,52.218s92.171-18.547,125.853-52.218 c6.521-6.521,17.096-6.521,23.607,0c6.521,6.521,6.521,17.09,0,23.607C365.473,111.58,312.397,133.6,256,133.6z"></path>
                                <path style={{ fill: '#F9A926' }} d="M405.459,71.6c6.521-6.515,6.521-17.086,0-23.607c-6.511-6.521-17.086-6.521-23.607,0 C348.17,81.664,303.479,100.211,256,100.211V133.6C312.397,133.6,365.473,111.58,405.459,71.6z"></path>
                                <path style={{ fill: '#F26D76' }} d="M428.506,512H83.494c-27.617,0-50.082-22.466-50.082-50.082V183.682 c0-9.222,7.472-16.694,16.694-16.694h411.788c9.222,0,16.694,7.472,16.694,16.694v278.235C478.588,489.535,456.124,512,428.506,512z"></path>
                                <path style={{ fill: '#E65C64' }} d="M461.894,166.988H256V512h172.506c27.617,0,50.082-22.466,50.082-50.082V183.682 C478.588,174.46,471.116,166.988,461.894,166.988z"></path>
                                <rect x="33.41" y="200.374" style={{ fill: '#D5565D' }} width="445.177" height="33.388"></rect>
                                <rect x="255.999" y="200.374" style={{ fill: '#BC4B52' }} width="222.588" height="33.388"></rect>
                                <path style={{ fill: '#FFC033' }} d="M318.674,9.524c-19.14-13.786-44.817-12.561-62.673,3.475c-17.785-15.97-43.446-17.34-62.674-3.475 c-28.103,20.268-27.95,64.848,0.75,84.764l52.414,36.339c2.284,1.588,6.138,2.973,9.51,2.973c2.856,0,6.68-1.005,9.51-2.973 l52.42-36.344C346.766,74.276,346.637,29.692,318.674,9.524z M212.852,36.615c11.049-7.966,26.455-0.036,26.455,13.542v34.861 l-26.204-18.167C203.264,60.031,203.459,43.378,212.852,36.615z M298.904,66.845l-26.21,18.172V50.157 c0-13.603,15.426-21.492,26.455-13.542C308.746,43.525,308.506,60.192,298.904,66.845z"></path>
                                <path style={{ fill: '#F9A926' }} d="M265.51,130.627l52.42-36.344c28.836-20.007,28.707-64.592,0.745-84.758 c-19.14-13.786-44.817-12.561-62.673,3.475V133.6C258.856,133.6,262.68,132.596,265.51,130.627z M272.694,50.157 c0-13.603,15.426-21.492,26.455-13.542c9.597,6.911,9.358,23.578-0.245,30.231l-26.21,18.172V50.157L272.694,50.157z"></path>
                                <path style={{ fill: '#36D9D9' }} d="M495.282,200.376H16.717c-9.22,0-16.694-7.475-16.694-16.694V133.6 c0-18.44,14.948-33.388,33.388-33.388h445.177c18.44,0,33.388,14.948,33.388,33.388v50.082 C511.977,192.903,504.502,200.376,495.282,200.376z"></path>
                                <path style={{ fill: '#43BFBF' }} d="M478.588,100.211H256v100.165h239.283c9.22,0,16.694-7.475,16.694-16.694V133.6 C511.977,115.16,497.029,100.211,478.588,100.211z"></path>
                                <path style={{ fill: '#FFC033' }} d="M222.612,97.985c0,3.229,0,407.006,0,414.014h66.777c0-7.755,0-409.543,0-414.014 C289.388,97.985,222.612,97.985,222.612,97.985z"></path>
                                <path style={{ fill: '#F9A926' }} d="M289.388,97.985H256c0,10.613,0,409.882,0,414.014h33.388V97.985z"></path>
                            </g>
                        </svg>
                </div>
            )}
            </>
    )
}

export default Thank;