import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <div className="page">
        <Header />
        <main className="">{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
