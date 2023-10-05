import Navigate from '../Navigate/Navigate';
import { ReactComponent as IconClose } from '../../assets/img/close.svg';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import Contact from '../Contact/Contact';
import styles from './Sidebar.module.scss';

const Sidebar = ({ isOpen, setIsOpen }) => {
    const styleSideBar = isOpen
        ? `${styles.wrapper} ${styles.activeNav}`
        : `${styles.wrapper}`;

    return (
        <nav className={styles.nav}>
            <div className={styleSideBar}>
                <Logo className={styles.logo} />
                <IconClose
                    onClick={() => setIsOpen(false)}
                    className={styles.close}
                />
                <ul className={styles.list}>
                    <Navigate />
                </ul>
                <div>
                    <Contact
                        addText='Заказать по телефону'
                        visibleText='visible'
                        visibleIcon='hidden'
                        textColor='phoneWhite'
                    />
                    <div className={styles.translate}>English</div>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
