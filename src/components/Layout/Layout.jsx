/* eslint-disable react/prop-types */
import Footer from "@/containers/Footer";
import Header from "@/containers/Header";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
