import { useState } from 'react';
import Button from '../Button/Button';
import { filterMenu } from '../Menu/Menu';

import styles from './Card.module.scss';
const sizes = [
    { id: 1, value: 20, name: 'small' },
    { id: 2, value: 30, name: 'middle' },
    { id: 3, value: 40, name: 'big' },
];
const Card = ({ data }) => {
    const { img, title, descr, price, type } = data;
    const [size, setSize] = useState('middle');
    /*  const [active, setActive] = useState(false); */
    const typeCard = filterMenu.map((icon) =>
        icon.type === type ? (
            <div key={icon.id} className={styles.iconType}>
                {icon.icon}
            </div>
        ) : null
    );

    const onClickSizeBtn = (sizeValue) => {
        setSize(sizeValue);
    };

    const sizeBtn = sizes.map(({ value, id, name }) => {
        const activeStyle =
            name === size
                ? `${styles.activeSize} ${styles.sizeItem}`
                : `${styles.sizeItem}`;

        return (
            <button
                onClick={() => onClickSizeBtn(name)}
                key={id}
                className={activeStyle}
            >
                {value}
            </button>
        );
    });

    const sizePizzaImg = sizes.map(({ id, name }) =>
        name === size ? (
            <img key={id} className={`${styles.img}`} src={img} alt='pizza' />
        ) : null
    );

    const setPrice = () => {
        price.sort((a, b) => a - b);
        if (size === 'small') {
            return <div className={styles.price}>от {price[0]} руб</div>;
        }
        if (size === 'middle') {
            return <div className={styles.price}>от {price[1]} руб</div>;
        }
        if (size === 'big') {
            return <div className={styles.price}>от {price[2]} руб</div>;
        }
    };
    const visiblePrice = setPrice(price);
    const width = window.innerWidth;

    const cardBtn =
        width < 576 ? (
            <Button
                text={`от ${visiblePrice.props.children[1]} руб`}
                size='small'
            />
        ) : (
            <Button text='Заказать' size='small' />
        );
    console.log(visiblePrice);
    return (
        <div className={styles.wrapper}>
            {typeCard}
            {sizePizzaImg}
            <div className={styles.contentBlock}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.descr}>{descr}</p>
                <div className={styles.sizeBlock}>
                    <div className={styles.sizeSubtitle}>Размер, см:</div>
                    <div className={styles.sizeWrapper}>{sizeBtn}</div>
                </div>
                {visiblePrice}
                {cardBtn}
            </div>
        </div>
    );
};

export default Card;
