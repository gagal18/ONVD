import React, {ReactNode} from "react";
import Head from "./Head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Head />
            <div className={"w-full"}>
                <Navbar/>
                <main>{children}</main>
                <Footer />
            </div>
        </>
    );

}

export default Layout;


type LayoutProps = {
    children: ReactNode;
};
