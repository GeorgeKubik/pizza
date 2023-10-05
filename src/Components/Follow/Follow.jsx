import { useDispatch, useSelector } from 'react-redux';

import { fetchImages } from '../../actions';
import { useHttp } from '../../hooks/http.hook';
import { useEffect } from 'react';

import styles from './Follow.module.scss';

const Follow = () => {
    const { images } = useSelector((state) => state.images);
    const dispatch = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        dispatch(fetchImages(request));
    }, [dispatch, request]);

    const width = window.innerWidth;

    const countImages =
        width < 576
            ? images.slice(0, 4)
            : width <= 1440
            ? images.slice(0, 6)
            : width <= 1920
            ? images.slice(0, 8)
            : images;

    const picture = countImages.map((item) => (
        <img
            className={styles.img}
            src={process.env.PUBLIC_URL + `${item.img}`}
            key={item.id}
            alt='pictureInstagram'
        />
    ));

    return (
        <section className={styles.follow}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Следите за нами в Instagram</h2>
                <a className={styles.link} href='#@pizzamenu'>
                    @pizzamenu
                </a>
                <div className={styles.gallery}>{picture}</div>
            </div>
        </section>
    );
};

export default Follow;
