import { ReactComponent as Close } from '../../assets/img/close.svg';
import { ReactComponent as IconType } from '../../assets/img/menu/cheese.svg';
import pizza from '../../assets/img/img_1.png';
import Button from '../Button/Button';

import styles from './Form.module.scss';

const Form = ({ openModal, setOpenModal }) => {
    const visibleModal = openModal ? { display: 'block' } : { display: 'none' };

    return (
        <form style={visibleModal} className={styles.form} action='#sdasddad'>
            <div className={styles.wrapper}>
                <Close
                    onClickCapture={() => setOpenModal(false)}
                    className={styles.close}
                />
                <h2 className={styles.title}>Ваш заказ</h2>
                <div className={styles.cardWrapper}>
                    <div className={styles.card}>
                        <Close className={styles.deletePizza} />
                        <IconType className={styles.icon} />
                        <div className={styles.blockContent}>
                            <img
                                className={styles.img}
                                src={pizza}
                                alt='pizza'
                            />
                            <div className={styles.blockContentText}>
                                <div className={styles.namePizza}>
                                    Итальянская
                                </div>
                                <div className={styles.size}>30 см</div>
                            </div>
                        </div>
                        <div className={styles.blockRight}>
                            <div className={styles.blockCount}>
                                <button className={styles.minus}>
                                    &#8722;
                                </button>
                                <div className={styles.count}>1</div>
                                <button className={styles.plus}>&#43;</button>
                            </div>
                            <div className={styles.price}>699 руб</div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Close className={styles.deletePizza} />
                        <IconType className={styles.icon} />
                        <div className={styles.blockContent}>
                            <img
                                className={styles.img}
                                src={pizza}
                                alt='pizza'
                            />
                            <div className={styles.blockContentText}>
                                <div className={styles.namePizza}>
                                    Итальянская
                                </div>
                                <div className={styles.size}>30 см</div>
                            </div>
                        </div>
                        <div className={styles.blockRight}>
                            <div className={styles.blockCount}>
                                <button className={styles.minus}>
                                    &#8722;
                                </button>
                                <div className={styles.count}>1</div>
                                <button className={styles.plus}>&#43;</button>
                            </div>
                            <div className={styles.price}>699 руб</div>
                        </div>
                    </div>
                </div>
                <div className={styles.totalBlock}>
                    <div className={styles.totalText}>Сумма заказа:</div>
                    <div className={styles.total}>1398</div>
                </div>
                <div className={styles.contactTitle}>Контакты</div>
                <div className={styles.inputBlock}>
                    <div className={styles.inputWrapper}>
                        <input
                            className={styles.input}
                            type='text'
                            placeholder='Ваше имя'
                            pattern='^[A-Za-zА-Яа-яЁё\s]{3,}'
                            required
                            id='name'
                        />
                        <label className={styles.nameLabel} htmlFor='name'>
                            Ваше имя
                        </label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <input
                            className={styles.input}
                            type='tel'
                            placeholder='Телефон'
                            pattern='[+]7\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}'
                            title='Используйте формат: +7 (777) 777-77-77'
                            required
                        />
                        <label className={styles.nameLabel} htmlFor='name'>
                            Телефон
                        </label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <input
                            className={styles.input}
                            type='text'
                            placeholder='Адрес доставки'
                        />
                        <label className={styles.nameLabel} htmlFor='name'>
                            Адрес
                        </label>
                    </div>
                </div>
                <div className={styles.paymentMethodBox}>
                    <div className={styles.paymentMethodTitle}>
                        Способ оплаты
                    </div>
                    <div className={styles.checkboxWrapper}>
                        <input
                            className={styles.checkbox}
                            id='paymentCash'
                            type='checkbox'
                        />
                        <label className={styles.label} htmlFor='paymentCash'>
                            Оплата наличными или картой курьеру
                        </label>
                    </div>

                    <div className={styles.checkboxWrapper}>
                        <input
                            className={styles.checkbox}
                            id='paymentCard'
                            type='checkbox'
                        />
                        <label className={styles.label} htmlFor='paymentCard'>
                            Оплата картой онлайн на сайте
                        </label>
                    </div>
                </div>
                <Button
                    text='Оформить заказ'
                    size='extraSmall'
                    type='submit'
                    className={styles.btn}
                ></Button>
                <div className={styles.policy}>
                    Нажимая кнопку «Оформить заказ» вы соглашаетесь с политикой
                    конфиденциальности
                </div>
            </div>
        </form>
    );
};

export default Form;
