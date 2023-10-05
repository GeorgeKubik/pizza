import styles from './Hamburger.module.scss';
const Hamburger = ({ onClick }) => {
    return (
        <div onClick={() => onClick()} className={styles.hamburger}>
            <div className={styles.hamburgerLine}></div>
            <div className={styles.hamburgerLine}></div>
            <div className={styles.hamburgerLine}></div>
        </div>
    );
};

export default Hamburger;
