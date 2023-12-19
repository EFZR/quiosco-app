import useSWR from "swr";
import axios from "axios";
import AdminLayout from "@/components/AdminLayout";
import Orden from "@/components/Orden";

function Admin() {
  const fetcher = (...args) => axios.get(...args).then((res) => res.data);
  const { data, error, isLoading } = useSWR("/api/ordenes", fetcher, {refreshInterval: 100});
  return (
    <>
      <h1 className="text-4xl font-black">Panel de Administracion</h1>
      <p className="text-2xl my-10">Revisa las ordenes</p>
      {data?.length && data.length ? (
        data.map((orden) => <Orden key={orden.Ord_Id} orden={orden} />)
      ) : (
        <p className="">No hay ordenes pendientes</p>
      )}
    </>
  );
}

Admin.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Admin;
