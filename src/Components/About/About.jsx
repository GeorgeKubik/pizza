import img_1 from '../../assets/img/about/img_1.png';
import img_2 from '../../assets/img/about/img_2.png';
import img_3 from '../../assets/img/about/img_3.png';

import styles from './About.module.scss';

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.item}>
                        <img
                            className={styles.img}
                            src={img_1}
                            alt='aboutImage'
                        />
                        <div className={styles.blockContent}>
                            <h3 className={styles.title}>
                                Изготавливаем пиццу по своим рецептам в лучших
                                традициях
                            </h3>
                            <p className={styles.descr}>
                                Наша пицца получается сочной, вкусной и главное
                                хрустящей с нежной и аппетитной начинкой,
                                готовим по своим итальянским рецептам
                            </p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img
                            className={styles.img}
                            src={img_2}
                            alt='aboutImage'
                        />
                        <div className={styles.blockContent}>
                            <h3 className={styles.title}>
                                Используем только свежие ингридиенты
                            </h3>
                            <p className={styles.descr}>
                                Ежедневно заготавливаем продукты и овощи для
                                наших пицц, соблюдаем все сроки хранения
                            </p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img
                            className={styles.img}
                            src={img_3}
                            alt='aboutImage'
                        />
                        <div className={styles.blockContent}>
                            <h3 className={styles.title}>
                                Доставка в течение 60 минут или заказ за нас
                                счёт
                            </h3>
                            <p className={styles.descr}>
                                Все наши курьеры – фанаты серии Need for Speed и
                                призеры гонок World Rally Championship и World
                                Superbike во всех категориях
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
