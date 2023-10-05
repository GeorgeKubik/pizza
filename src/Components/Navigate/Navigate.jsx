import styles from './Navigate.module.scss';

const Navigate = () => {
    const navList = [
        { id: 1, text: 'Меню' },
        { id: 2, text: 'О нас' },
        { id: 3, text: 'Контакты' },
    ];

    const list = navList.map(({ id, text }) => (
        <li key={id} className={styles.listItem}>
            {text}
        </li>
    ));

    return list;
};

export default Navigate;
