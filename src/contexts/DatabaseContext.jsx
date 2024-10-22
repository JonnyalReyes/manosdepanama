import { useState, createContext, useContext, useEffect } from "react";
import Loading from "../components/Utilities/Loading";
import products from "../data/products.json"; // Ajusta la ruta según donde guardes el JSON

const DatabaseContext = createContext();

export const useDatabase = () => {
  return useContext(DatabaseContext);
};

export const DatabaseProvider = ({ children }) => {
  const [data, setData] = useState();
  const [singleProduct, setSingleProduct] = useState();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Cargar datos desde el archivo JSON
  const FetchInfo = () => { 
    try {
      // Directamente usar los datos importados
      setData(products);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const FetchSingleProduct = (id) => {
    try {
      const product = products.find((item) => item.id === parseInt(id));
      if (!product) {
        throw new Error("Producto no encontrado");
      }
      setSingleProduct(product);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchInfo();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <DatabaseContext.Provider
      value={{ data, singleProduct, FetchSingleProduct }}
    >
      {children}
    </DatabaseContext.Provider>
  );
};
