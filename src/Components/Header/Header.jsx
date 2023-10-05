import logo from '../../assets/img/logo.svg';
import Navigate from '../Navigate/Navigate';
import Contact from '../Contact/Contact';
import Basket from './Basket/Basket';
import Hamburger from './Hamburger';

import styles from './Header.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';

const Header = ({setOpenModal}) => {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        setIsOpen(true);
    };

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <img className={styles.logo} src={logo} alt='logo' />
                    <nav className={styles.nav}>
                        <ul className={styles.list}>
                            <Navigate />
                        </ul>
                    </nav>
                    <div className={styles.sidebar}>
                        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>
                    <div className={styles.contactWrapper}>
                        <Contact
                            visibleText='hidden'
                            visibleIcon='visible'
                            textColor='phoneBlack'
                        />
                        <Basket setOpenModal={setOpenModal}/>
                    </div>
                    <div className={styles.burgerButtonWrapper}>
                        <div className={styles.translate}>EN</div>
                        <Hamburger onClick={onClick} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
