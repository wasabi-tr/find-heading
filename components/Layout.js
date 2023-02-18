import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
    return (
        <>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
}

export default Layout;