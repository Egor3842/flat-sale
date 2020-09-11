import React, { useState, useEffect } from 'react';
import Flat from '../Flat/Flat';
import s from './FlatsAbout.module.css';
import data from '../../state.json';
import Preloader from '../Preloader/Preloader';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const FlatsAbout = () => {

    const [product, setProduct] = useState([]);
    const [isFetching, setFetching] = useState(false);
    const [Error, setError] = useState(false);

    let mock = new MockAdapter(axios, { delayResponse: 2000 });
    mock.onGet("/flats").reply(200, {
        flats: data
    });

    useEffect(() => {
        const loadProduct = async () => {
            try {
                setFetching(false);
                const response = await axios.get("/flats")
                setProduct(response.data.flats);
                setFetching(true);
            } catch {
                setFetching(true);
                setError(true);
            }

        };
        loadProduct();

    }, []);

    let AllFlats = product.map((x, key) => <Flat title = {x.attributes.title}
        rooms = {x.attributes.rooms}
        address = {x.attributes.address}
        area = {x.attributes.area + ' ' + x.attributes.unit}
        saler = {x.relationships.attributes}
        id = {x.id} />)
    return (
        <>
            {isFetching ?
                Error ? <div className = {s.error}>Ошибка загрузки данных</div> :
                    <div className = {s.container + ' ' + s.width_Container}>
                        {AllFlats}
                    </div> :
                <Preloader />
            }
        </>
    )
}

export default FlatsAbout