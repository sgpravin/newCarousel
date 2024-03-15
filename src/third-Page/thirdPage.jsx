import { useState } from "react";
import m4 from "../mountain-4.jpg";
import m5 from "../mountain-5.jpg";
import "./style.css";

const ThirdPage = () => {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);

  const handleM1 = () => {
    setShow1(true);
    setShow2(false);
  };

  const handleM2 = () => {
    setShow2(true);
    setShow1(false);
  };

  return (
    <div className="ThirdPage">
      <header>
        <ul>
          <li>
            <button onClick={handleM1} autoFocus className="Mount">
              Mountain 1
            </button>
          </li>
          <li>
            <button onClick={handleM2} className="Mount">
              Mountain 2
            </button>
          </li>
        </ul>
      </header>
      <div className="Teams">
        {show1 && <img src={m4} alt="Mountain 1 Schedule" />}

        {show2 && <img src={m5} alt="Mountain 2 Schedule" />}
      </div>
    </div>
  );
};

export default ThirdPage;
