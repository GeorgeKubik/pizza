import { ReactComponent as IconAll } from '../../assets/img/menu/all.svg';
import { ReactComponent as IconSpicy } from '../../assets/img/menu/spicy.svg';
import { ReactComponent as IconMeat } from '../../assets/img/menu/meat.svg';
import { ReactComponent as IconCheese } from '../../assets/img/menu/cheese.svg';
import { ReactComponent as IconVegan } from '../../assets/img/menu/Vegan.svg';

import styles from './Menu.module.scss';

export const filterMenu = [
    {
        id: 1,
        text: 'Все',
        icon: <IconAll className={styles.icon} />,
        type: 'all',
    },
    {
        id: 2,
        text: 'Острые',
        icon: <IconSpicy className={styles.icon} />,
        type: 'spicy',
    },
    {
        id: 3,
        text: 'Мясные',
        icon: <IconMeat className={styles.icon} />,
        type: 'meat',
    },
    {
        id: 4,
        text: 'Сырные',
        icon: <IconCheese className={styles.icon} />,
        type: 'cheese',
    },
    {
        id: 5,
        text: 'Веганские',
        icon: <IconVegan className={styles.icon} />,
        type: 'vegan',
    },
];
const Menu = ({ card }) => {
    const filter = filterMenu.map(({ id, text, icon }) => (
        <button key={id} className={styles.filter}>
            <div className={styles.filterIcon}>{icon}</div>
            <div className={styles.filterText}>{text}</div>
        </button>
    ));

    return (
        <section className={styles.menu}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>Выберите пиццу</h2>
                    <div className={styles.filterBlock}>{filter}</div>
                    <div className={styles.menuWrapper}>{card}</div>
                </div>
            </div>
        </section>
    );
};

export default Menu;
