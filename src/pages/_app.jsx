import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { QuioscoProvider } from "@/context/QuioscoProvider";

export default function App({ Component, pageProps }) {
  return (
    <QuioscoProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QuioscoProvider>
  );
}
