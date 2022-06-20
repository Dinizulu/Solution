import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ({children}) => {
    return(
        <div className="container">
            <Navigation/>
            {children}
            <Footer/>
        </div>
    )
}
export default Layout;