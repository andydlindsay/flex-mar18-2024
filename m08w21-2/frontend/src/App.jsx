import useApplicationData from './hooks/useApplicationData';
import ProductList from './components/ProductList';
import './App.css'

const App = () => {
  const {products} = useApplicationData();

  return (
    <>
      <h2>All the Products!!!!!!!!!</h2>
      { products.length === 0 && <h2>Spinner...</h2> }
      { products.length > 0 && <ProductList products={products} /> }
    </>
  )
};

export default App
