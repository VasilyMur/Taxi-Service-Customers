
class PricesDesktop extends React.Component {
    
    render () { 
        return(
            <div className="prices__desktop" ref="priceBlock">
                <div className="prices__container">
                    <div className="prices__container--item">

                        <div className="item-block single one">Зона обслуживания</div>

                        <div className="item-block">
                            <span className="price-type">Тариф "Бульвар"<span className="price-star">★★★★★</span></span>
                            <span className="item-block-comment">(в пределах Бульварного кольца)</span>
                        </div>

                        <div className="item-block">
                            <span className="price-type">Тариф "Садовое"<span className="price-star">★★★★</span></span>
                            <span className="item-block-comment">(в пределах Садового кольца)</span>
                        </div>

                        <div className="item-block">
                            <span className="price-type">Тариф "Стандарт"</span>
                            <span className="item-block-comment">(в пределах МКАД)</span>
                        </div>

                        <div className="item-block">
                            <span className="price-type">Поездка за МКАД</span>
                            <span className="item-block-comment">(из Москвы в область)</span>
                        </div>

                        <div className="item-block">
                            <span className="price-type">Поездка из-за МКАД</span>
                            <span className="item-block-comment">(выезд водителя в область)</span>
                        </div>

                    </div>

                    <div className="prices__container--item">
                        <div className="item-block">
                                <span>Минимальный заказ</span>
                                <span>(цена 1 часа поездки)</span>
                        </div>

                        <div className="item-block single">800 Руб</div>

                        <div className="item-block single">1000 Руб</div>

                        <div className="item-block single">1500 Руб</div>

                        <div className="item-block">
                            <span>1500 Руб</span>
                            <span>+ 25 руб/км от МКАД</span>
                        </div>

                        <div className="item-block">
                            <span>1500 Руб + 50 руб/км </span>
                            <span>до МКАД</span>
                        </div>
                         
                    </div>

                    <div className="prices__container--item">

                        <div className="item-block three">
                                <span>Тарификация услуги</span>
                                <span>со второго часа</span>
                        </div>

                        <div className="item-block single">10 руб/мин</div>
                        <div className="item-block single">10 руб/мин</div>
                        <div className="item-block single">10 руб/мин</div>
                        <div className="item-block single">20 руб/мин</div>
                        <div className="item-block single">20 руб/мин</div>

                    </div>

                    <div className="prices__container--item">
                        <div className="item-block single">Срок подачи автомобиля</div>
                        <div className="item-block single">от 20-30 минут</div>
                        <div className="item-block single">от 20-30 минут</div>
                        <div className="item-block single">от 20-30 минут</div>
                        <div className="item-block single">от 20-30 минут</div>
                        <div className="item-block">
                            <span>по предварительному</span>
                            <span>согласованию</span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default PricesDesktop;