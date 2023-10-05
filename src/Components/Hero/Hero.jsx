import Button from '../Button';
import background from '../../assets/img/background.png';
import pizza from '../../assets/img/pizza.png';
import leaf from '../../assets/img/leaf.png';

import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Пицца на заказ</h1>
                        <div className={styles.text}>
                            Бесплатная и быстрая доставка за час
                            <br />в любое удобное для вас время
                        </div>
                        <Button size='large' text='Выбрать пиццу' />
                    </div>
                    <div className={styles.blockImage}>
                        <img className={styles.pizza} src={pizza} alt='pizza' />
                        <img className={styles.leaf} src={leaf} alt='leaf' />
                    </div>
                    <img
                        className={styles.background}
                        src={background}
                        alt='pizza'
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
