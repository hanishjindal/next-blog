import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar name={"Blog"} login={false}></Navbar>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
