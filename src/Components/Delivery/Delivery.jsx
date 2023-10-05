import { ReactComponent as IconOrder } from '../../assets/img/delivery/icon_order.svg';
import { ReactComponent as IconDelivery } from '../../assets/img/delivery/icon_delivery.svg';
import { ReactComponent as IconPayment } from '../../assets/img/delivery/icon_payment.svg';

import styles from './Delivery.module.scss';

const Delivery = () => {
    return (
        <section className={styles.delivery}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>Доставка и оплата</h2>
                    <div className={styles.items}>
                        <div className={styles.item}>
                            <IconOrder className={styles.icon} />
                            <div>
                                <h3 className={styles.itemTitle}>Заказ</h3>
                                <div className={styles.itemText}>
                                    После оформления заказа мы свяжемся с вами
                                    для уточнения деталей.
                                </div>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <IconDelivery className={styles.icon} />
                            <div>
                                <h3 className={styles.itemTitle}>
                                    Доставка курьером
                                </h3>
                                <div className={styles.itemText}>
                                    Мы доставим вашу пиццу горячей. Бесплатная
                                    доставка по городу.
                                </div>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <IconPayment className={styles.icon} />
                            <div>
                                <h3 className={styles.itemTitle}>Оплата</h3>
                                <div className={styles.itemText}>
                                    Оплатить можно наличными или картой курьеру.
                                    И золотом тоже можно.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Delivery;
