import React from 'react'


const ProductContext = React.createContext();

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const productsUrl = 'https://invoice-generator.free.beeceptor.com/product'

export function ProductContextProvider(props) {
  const [products, setProducts] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleProductRequest = async productId => {
    const url = `${productsUrl}/${productId}`;
    try {
      setIsLoading(true);
      const response = await fetch(url, options);
      const data = await response.json();
      const duplicated = products.find(x => x.id === data.id)
      if (duplicated) {
        const filteredProducts = products.filter(x => x.id !== data.id);
        setProducts(
          [
            ...filteredProducts,
            {
              ...duplicated,
              qty: (duplicated.qty ? duplicated.qty + 1 : 2)
            }
          ]
        );

      } else {
        setProducts([...products, data]);
      }
      setIsLoading(false);
    } catch (e) {
      setError(e);
      setIsLoading(false);
    }

  };
  
  return (
    <ProductContext.Provider value={{ products, error, isLoading, handleProductRequest }}>
      {props.children}
    </ProductContext.Provider>
  )
}


export default ProductContext