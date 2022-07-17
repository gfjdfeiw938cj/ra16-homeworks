import Product from './Product';
import { useSelector } from "react-redux";

export default function ProductsList() {
  const products = useSelector(state => {
    const all = state.products.products;
    const filterKey = state.products.filterKey ? (state.products.filterKey).toLowerCase() : '';
    if(filterKey) {
      return all.filter(item => (item.title).toLowerCase().includes(filterKey))
    } else {
      return all
    }
  });

  return (
    <div className="products row">
      {products.length > 0 ? products.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          id={product.id}
          title={product.title}
          price={product.price}
          specialPrice={product.specialPrice}
        />
      )) : 'Nothing found'}
    </div>
  );
}
