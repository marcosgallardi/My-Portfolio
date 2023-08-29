import "../../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import imgyo from "../../assets/yo2.png";
import { useState } from "react";

export const BgReact = () => {
  const [stop, setStop] = useState(true);

  const handleOnClick = () => {
    setStop(!stop)
  }
  return (
    <div className="bg-react vh-100">
      
        <img src={imgyo} alt="" className={`${stop ? "spin" : undefined}`} onClick={handleOnClick}/>
      
    </div>
  );
};
