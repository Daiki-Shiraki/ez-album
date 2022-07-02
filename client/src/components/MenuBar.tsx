import Link from "next/link";
import Form from "./UploadPhoto";
import styles from "../styles/MenuBar.module.css";
import { IconContext } from "react-icons";
import { HiColorSwatch } from "react-icons/hi";

const MenuBar = () => {
    return (
        <div className={`${styles.menubar}`}>
            <IconContext.Provider value={{size:'40px'}}>
                <span className={`${styles.icon}`}><HiColorSwatch/></span>
            </IconContext.Provider>
            <span className={`${styles.menuText}`}>EZ-Albam</span>
        </div>
    );
};

export default MenuBar;