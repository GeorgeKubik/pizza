import { ReactComponent as IconContact } from '../../assets/img/contact_icon.svg';
import styles from './Contact.module.scss';
import clsx from 'clsx';

const Contact = ({
    addText,
    visibleText,
    textColor = 'phoneBlack',
    visibleIcon,
}) => {
    return (
        <div className={styles.contact}>
            <IconContact className={clsx(styles.icon, styles[visibleIcon])} />
            <div className={styles.wrapper}>
                <div className={styles.addText}>{addText}</div>
                <div
                    className={clsx(
                        styles.phone,
                        styles[textColor],
                        styles[visibleText]
                    )}
                >
                    +7 (918) 432-65-87
                </div>
                <div
                    className={clsx(
                        styles.substring,
                        styles[textColor],
                        styles[visibleText]
                    )}
                >
                    Ежедневно с 9:00 до 23:00
                </div>
            </div>
        </div>
    );
};

export default Contact;
