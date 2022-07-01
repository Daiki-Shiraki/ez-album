import { ReactNode } from "react";
import MenuBar from "../components/MenuBar";
import UploadPhoto from "../components/UploadPhoto";

const Layout = ({ children }: Props) => {
  return (
    <div>
        <MenuBar></MenuBar>
        <UploadPhoto></UploadPhoto>
        {/* {children} */}
    </div>
  ); 
};

type Props = {
    children?: ReactNode;
}

export default Layout;