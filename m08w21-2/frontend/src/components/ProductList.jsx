import ProductListItem from "./ProductListItem";

const ProductList = (props) => {
  const mappedProducts = props.products.map((product) => {
    return <ProductListItem key={product.id} product={product} />;
    // return <ProductListItem name={product.name} description={product.description} />
    // return <ProductListItem {...product} />
  });

  return (
    <div>
      {mappedProducts}
    </div>
  );
};

export default ProductList;
