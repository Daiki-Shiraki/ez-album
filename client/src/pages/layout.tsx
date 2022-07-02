import { ReactNode } from "react";
import MenuBar from "../components/MenuBar";
import UploadPhoto from "../components/UploadPhoto";
import Footer from "../components/Footer";

const Layout = ({ children }: Props) => {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
        <MenuBar></MenuBar>
        <UploadPhoto></UploadPhoto>
        {/* <Footer></Footer> */}
        {/* {children} */}
    </div>
  ); 
};

type Props = {
    children?: ReactNode;
}

export default Layout;