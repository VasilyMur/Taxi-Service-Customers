class PricesMobile extends React.Component {
    render() {
        return (
            <div className="prices__mobile">
                <div className="prices__mobile__container">

                    <div className="prices__mobile__container--item">

                        <div className="item-head">
                            <span>Тариф "Бульвар"<span className="price-star">★★★★★</span></span>
                            <span>(в пределах Бульварного кольца)</span>
                        </div>

                        <div className="item-detail unit">
                            <div>
                                <span>Минимальный заказ</span>
                                <span>(цена 1 часа поездки)</span>
                            </div>
                            <div>800₽</div>
                        </div>

                        <div className="item-detail unit">
                            <div>
                                <span>Тарификация услуги</span>
                                <span>со второго часа</span>
                            </div>
                            <div>10₽/мин</div>
                        </div>

                        <div className="item-detail unit">
                        <div>
                            <span>Время приезда</span>
                            <span>водителя</span>
                        </div>
                        <div>от 20-30 минут</div>
                        </div>
                    </div>

                    <div className="prices__mobile__container--item">

                        <div className="item-head">
                            <span>Тариф "Садовое"<span className="price-star">★★★★</span></span>
                            <span>(в пределах Садового кольца)</span>
                        </div>

                        <div className="item-detail unit">
                            <div>
                                <span>Минимальный заказ</span>
                                <span>(цена 1 часа поездки)</span>
                            </div>
                            <div>1000₽</div>
                        </div>

                        <div className="item-detail unit">
                            <div>
                                <span>Тарификация услуги</span>
                                <span>со второго часа</span>
                            </div>
                            <div>10₽/мин</div>
                        </div>

                        <div className="item-detail unit">
                            <div>
                                <span>Время приезда</span>
                                <span>водителя</span>
                            </div>
                            <div>от 20-30 минут</div>
                        </div>
                    </div>

                    <div className="prices__mobile__container--item">
                        <div className="item-head">
                            <span>Тариф "Стандарт"</span>
                            <span>(в пределах МКАД)</span>
                        </div>

                        <div className="item-detail unit">
                            <div>
                                <span>Минимальный заказ</span>
                                <span>(цена 1 часа поездки)</span>
                            </div>
                            <div>1500₽</div>
                        </div>

                        <div className="item-detail unit">
                            <div>
                                <span>Тарификация услуги</span>
                                <span>со второго часа</span>
                            </div>
                            <div>10₽/мин</div>
                        </div>

                        <div className="item-detail unit">
                        <div>
                            <span>Время приезда</span>
                            <span>водителя</span>
                        </div>
                            <div>от 20-30 минут</div>
                        </div>
                    </div>

                    <div className="prices__mobile__container--item">
                        <div className="item-head">
                            <span>Поездка за МКАД</span>
                             <span>(из Москвы в область)</span>
                        </div>

                        <div className="item-detail unit">
                            <div>
                                <span>Минимальный заказ</span>
                                <span>(цена 1 часа поездки)</span>
                            </div>
                            <div>
                                <span>1500₽+25₽/км</span>
                                 <span>от МКАД</span>
                            </div>
                        </div>

                        <div className="item-detail unit">
                            <div>
                                <span>Тарификация услуги</span>
                                <span>со второго часа</span>
                            </div>
                            <div>20₽/мин</div>
                        </div>

                        <div className="item-detail unit">
                        <div>
                            <span>Время приезда</span>
                            <span>водителя</span>
                        </div>
                            <div>от 20-30 минут</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PricesMobile;