import { ReactNode } from "react";
import Navbar from "../components/navbar";

const Layout = ({ children }: Props) => {
  return (
    <div>
        <Navbar></Navbar>
        {children}
    </div>
  ); 
};

type Props = {
    children?: ReactNode;
}

export default Layout;