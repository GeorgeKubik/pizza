import styles from './Basket.module.scss';
import { ReactComponent as IconBasket } from '../../../assets/img/pizza-icon.svg';

const Basket = ({setOpenModal}) => {
    return (
        <div onClick={() => setOpenModal(true)} className={styles.basket}>
            <IconBasket className={styles.icon} />
            <div className={styles.wrapper}>
                <div className={styles.text}>Ваш заказ</div>
                <div className={styles.substring}>
                    Итальянская и ещё 2 пиццы
                </div>
            </div>
        </div>
    );
};

export default Basket;
