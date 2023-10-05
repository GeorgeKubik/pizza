import styles from './Button.module.scss';

import clsx from 'clsx';

const Button = ({ text, size = 'small' }) => {
    return <button className={clsx(styles.btn, styles[size])}>{text}</button>;
};

export default Button;
