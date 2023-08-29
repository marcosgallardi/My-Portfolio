import { Navbar } from "../Navbar/Navbar";
import imgyo from "../../assets/yo1.png";
import styles from "../BgJs/BgJs.module.css";

export const BgJs = () => {
  return (
    <div className="bg-js vh-100 position-relative">
      <Navbar />
      <div className={styles.yo}>
        <img src={imgyo} alt="" className={styles.imagen} />
      </div>
    </div>
  );
};
