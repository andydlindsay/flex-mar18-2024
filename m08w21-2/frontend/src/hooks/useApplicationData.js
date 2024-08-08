import {useEffect, useState} from 'react';

const useApplicationData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json()) // turn the response body to JSON
      .then(products => {
        console.log(products);
        setTimeout(() => {
          setProducts(products);
        }, 2000);
      });
  }, []);

  return { products };
};

export default useApplicationData;
