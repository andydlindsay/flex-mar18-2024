import '../styles/ProductListItem.scss';

const ProductListItem = (props) => {
  console.log('props', props);
  
  return (
    <div className="ProductListItem">
      <h2>Name: {props.product.name}</h2>
      <h2>Price: ${props.product.price}</h2>
      <p>{props.product.description}</p>
    </div>
  );
};

export default ProductListItem;
