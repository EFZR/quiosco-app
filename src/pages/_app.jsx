import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { QuioscoProvider } from "@/context/QuioscoProvider";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? false;

  if (!getLayout) {
    return (
      <QuioscoProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QuioscoProvider>
    );
  } else {
    return getLayout(<Component {...pageProps} />);
  }
}
