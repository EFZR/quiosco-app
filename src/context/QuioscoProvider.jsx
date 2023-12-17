import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import axios from "axios";

const QuioscoContext = createContext();

export const QuioscoProvider = ({ children }) => {
  const router = useRouter();

  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [nombre, setNombre] = useState("");
  const [total, setTotal] = useState(0);

  const reset = () => {
    setCategoriaActual(categorias[0]);
    setCarrito([]);
    setNombre("");
    setTotal(0);
  };

  const obtenerCategorias = async () => {
    const { data } = await axios.get("/api/categorias");
    setCategorias(data);
  };

  const handleCategoriaActual = (id) => {
    const categoria = categorias.find((categoria) => categoria.Cat_Id === id);
    setCategoriaActual(categoria);
    router.push("/");
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const handleModalCarrito = (producto) => {
    setProducto(producto);
    setModal(!modal);
  };

  const handleCarrito = ({ Prod_CatId, ...producto }) => {
    const { Prod_Id } = producto;
    if (carrito.some((p) => p.Prod_Id === Prod_Id)) {
      const carritoActualizado = carrito.map((p) =>
        p.Prod_Id === Prod_Id ? producto : p
      );
      setCarrito(carritoActualizado);
      toast.success("Producto guardado correctamente");
    } else {
      setCarrito([...carrito, producto]);
      toast.success("Producto agregado al carrito");
    }
    setModal(false);
  };

  const handleEliminarProducto = (Prod_Id) => {
    const carritoActualizado = carrito.filter((p) => p.Prod_Id !== Prod_Id);
    setCarrito(carritoActualizado);
    toast.success("Producto eliminado correctamente");
  };

  const colocarOrden = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/ordenes", {
        carrito,
        nombre,
        total,
        fecha: Date.now().toString(),
      });

      reset();
      toast.success("Orden colocada correctamente");

      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error("Error al colocar la orden");
    }
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  useEffect(() => {
    if (categorias.length > 0) {
      setCategoriaActual(categorias[0]);
    }
  }, [categorias]);

  useEffect(() => {
    const nuevoTotal = carrito.reduce(
      (total, producto) => total + producto.Prod_Precio * producto.cantidad,
      0
    );
    setTotal(nuevoTotal);
  }, [carrito]);

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        producto,
        modal,
        carrito,
        handleCategoriaActual,
        handleModal,
        handleModalCarrito,
        handleCarrito,
        handleEliminarProducto,
        colocarOrden,
        nombre,
        setNombre,
        total,
        setTotal,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export default QuioscoContext;
