import React from 'react'
import useFetch from '../hooks/useFetch'


const ProductContext = React.createContext();

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const productsUrl = 'https://invoice-generator.free.beeceptor.com/product'

export function ProductContextProvider(props) {
  const [product, setProduct] = React.useState('');
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleProductRequest = async productId => {
    const url = `${productsUrl}/${productId}`;
    try {
      setIsLoading(true);
      const response = await fetch(url, options);
      const data = await response.json();
      setProduct(data.name);
      setIsLoading(false);
    } catch (e) {
      setError(e);
      setIsLoading(false);
    }

  };
  
  return (
    <ProductContext.Provider value={{ product, error, isLoading, handleProductRequest }}>
      {props.children}
    </ProductContext.Provider>
  )
}


export default ProductContext