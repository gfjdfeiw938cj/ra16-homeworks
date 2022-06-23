import '../css/main.css';
import PropTypes from 'prop-types';

import {Component} from "react";

class ShopItemClass extends Component {

    render() {
        const {item} = this.props;

        const {brand, title, description, descriptionFull, currency, price} = item;

        return (
            <div className="main-content">
                <h2>{brand}</h2>
                <h1>{title}</h1>
                <h3>{description}</h3>
                <div className="description">{descriptionFull}</div>
                <div className="highlight-window mobile">
                    <div className="highlight-overlay"/>
                </div>
                <div className="divider"/>
                <div className="purchase-info">
                    <div className="price">{currency}{price.toFixed(2)}</div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        )
    }
}

ShopItemClass.propTypes = {
    item: PropTypes.shape({
        brand: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        descriptionFull: PropTypes.string,
        currency: PropTypes.string,
        price: PropTypes.number
    })
}

ShopItemClass.defaultProps = {
    item: {
        brand: "",
        title: "",
        description: "",
        descriptionFull: "",
        currency: "USD",
        price: 0.00
    }
}

export default ShopItemClass;