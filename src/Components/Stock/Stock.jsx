import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import { useMedia } from 'react-use';
import 'pure-react-carousel/dist/react-carousel.es.css';

import img_1 from '../../assets/img/stock/img_1.png';
import img_2 from '../../assets/img/stock/img_2.png';
import img_3 from '../../assets/img/stock/img_3.png';

import styles from './Stock.module.scss';

const Stock = () => {
    const visibleSlides = useMedia('(max-width: 576px)') ? 1 : 3;
    return (
        <section className={styles.stock}>
            <div className={styles.container}>
                <div>
                    <CarouselProvider
                        totalSlides={3}
                        visibleSlides={visibleSlides}
                        isIntrinsicHeight
                    >
                        <Slider classNameTray={styles.wrapper}>
                            <Slide index={0}>
                                <div className={styles.item}>
                                    <img
                                        src={img_1}
                                        alt='stock'
                                        className={styles.img}
                                    />
                                    <div className={styles.title}>
                                        Закажи 2 пиццы – 3-я в подарок
                                    </div>
                                    <div className={styles.descr}>
                                        При заказе 2-х больших пицц – средняя
                                        пицца в подарок
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={1}>
                                <div className={styles.item}>
                                    <img
                                        src={img_2}
                                        alt='stock'
                                        className={styles.img}
                                    />
                                    <div className={styles.title}>
                                        Напиток в подарок
                                    </div>
                                    <div className={styles.descr}>
                                        Скидка на заказ от 3 000 рублей +
                                        напиток в подарок
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={2}>
                                <div className={styles.item}>
                                    <img
                                        src={img_3}
                                        alt='stock'
                                        className={styles.img}
                                    />
                                    <div className={styles.title}>
                                        25% при первом заказе
                                    </div>
                                    <div className={styles.descr}>
                                        Скидка новым клиентам!
                                    </div>
                                </div>
                            </Slide>
                        </Slider>

                        <DotGroup />
                    </CarouselProvider>
                </div>
                {/* <div className={styles.sliderWrapper}>
          <SliderSingle />
        </div> */}
            </div>
        </section>
    );
};

export default Stock;
