import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import Stock from '../../Components/Stock/Stock';
import Menu from '../../Components/Menu/Menu';
import Delivery from '../../Components/Delivery/Delivery';
import About from '../../Components/About';
import Follow from '../../Components/Follow/Follow';
import Footer from '../../Components/Footer/Footer';
import Form from '../../Components/Form/Form';

import { useDispatch, useSelector } from 'react-redux';
import { useHttp } from '../../hooks/http.hook';
import { fetchCards } from '../../actions';

import { useEffect, useState } from 'react';
import Card from '../../Components/Card';

import styles from './MainPage.module.scss';

const MainPage = () => {

	const [openModal, setOpenModal] = useState(false);

    const { cards } = useSelector((state) => state.cards);
    const dispatch = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        dispatch(fetchCards(request));
    }, [dispatch, request]);

    const card = cards.map(({ id, ...data }) => <Card key={id} data={data} />);

    return (
        <div className={styles.container}>
            <Header setOpenModal={setOpenModal}/>
            <Hero />
            <Stock />
            <Menu card={card} />
            <Delivery />
            <About />
            <Follow />
            <Footer />
            <Form openModal={openModal} setOpenModal={setOpenModal}/>
        </div>
    );
};

export default MainPage;
