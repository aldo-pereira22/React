import React, { useState, useEffect, useRef } from 'react'
import PromotionList from 'components/promotion/List/List';
import useApi from 'components/Utils/useApi'
import { Link } from 'react-router-dom'
import './Search.css'

const PromotionSearch = () => {

    const moountRef = useRef(null)
    const [search, setSearch] = useState('');
    const [load, loadInfo] = useApi({
        debounceDelay: 1000,
        url: '/promotions',
        method: 'get',
        params: {
            _embed: 'comments',
            _order: 'desc',
            _sort: 'id',
            title_like: search || undefined,

        },
    });


    useEffect(() => {
        load({
            debounced: moountRef.current,
        })

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);


    return (
        <div className="promotion-search" >
            <header className="promotion-search__header">
                <h1> Promo Show </h1>
                <Link to="/create" > Nova Promoção </Link>
            </header>

            <input type="search" className="promotion-search__input" placeholder="Buscar"
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
            />

            <PromotionList
                promotions={loadInfo.data}
                loading={loadInfo.loading}
                error={loadInfo.error}

            />

        </div>
    )

}

export default PromotionSearch