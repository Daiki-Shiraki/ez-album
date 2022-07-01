import Link from "next/link";
import Form from "./UploadPhoto";
import styles from "../styles/MenuBar.module.css";

const MenuBar = () => {
    return (
        <div className={`pure-menu pure-menu-horizontal ${styles.menubar}`}>
            <span className={`${styles.menuText}`}>EZ-Albam</span>
        </div>
    );
};

export default MenuBar;