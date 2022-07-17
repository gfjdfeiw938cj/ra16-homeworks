import PropTypes from 'prop-types'

export default function Product({ title, image, price, specialPrice }) {

  let discount = 0;
  if (specialPrice) {
    discount = (100 - (specialPrice * 100 / price)).toFixed()
  }

  return (
    <div className="col-md-3">
      <div className="card">
        {image && <img src={image} className="card-img-top" alt="" />}
        <div className="card-body">
          <div className="price card-text h5">
            {price} ₽ {specialPrice && specialPrice !== price && <strike className="ms-3">{specialPrice} ₽</strike>}
          </div>
          <p className="card-text">{title}</p>
          {discount && specialPrice !== price && <span className="discount">{discount} %</span> }
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};
