import Head from "next/head";
import Sidebar from "@/components/Sidebar";
import Pasos from "@/components/Pasos";
import ModalProducto from "@/components/ModalProducto";
import useQuiosco from "@/hooks/useQuiosco";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#__next");

function Layout({ children }) {
  const { categoriaActual, modal, handleModal } = useQuiosco();
  return (
    <>
      <Head>
        <meta name="description" content="Quisco Cafeteria" />
        <title>{`Quiosco ${
          categoriaActual.Cat_Nombre ? categoriaActual.Cat_Nombre : ""
        }`}</title>
      </Head>
      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 h-screen overflow-y-auto">
          <Sidebar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-auto">
          <div className="m-5 md:m-10">
            <Pasos />
            {children}
          </div>
        </main>
      </div>
      <Modal isOpen={modal} onRequestClose={handleModal} style={customStyles}>
        <ModalProducto />
      </Modal>
      <ToastContainer />
    </>
  );
}

export default Layout;
