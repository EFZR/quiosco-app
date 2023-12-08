import { createContext, useState, useEffect } from "react";
import axios from "axios";

const QuioscoContext = createContext();

export const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});

  const obtenerCategorias = async () => {
    const { data } = await axios.get("/api/categorias");
    setCategorias(data);
  };

  const handleCategoriaActual = (id) => {
    const categoria = categorias.find((categoria) => categoria.Cat_Id === id);
    setCategoriaActual(categoria);
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  useEffect(() => {
    if (categorias.length > 0) {
      setCategoriaActual(categorias[0]);
    }
  }, [categorias]);

  return (
    <QuioscoContext.Provider
      value={{ categorias, handleCategoriaActual, categoriaActual }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export default QuioscoContext;
