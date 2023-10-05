import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import Contact from '../Contact/Contact';

import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.contactBlock}>
                        <Logo className={styles.logo} />
                        <Contact
                            textColor='phoneWhite'
                            visibleIcon='iconHidden'
                        />
                    </div>
                    <div className={styles.policy}>
                        Политика конфиденциальности
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
