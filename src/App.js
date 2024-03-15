import LAlogo from "./LAlogo.png";
import firstPage from "./firstPage.png";
import SecondPage from "./second-Page/secondPage";
import ThirdPage from "./third-Page/thirdPage";
import "./App.css";
import { useState } from "react";

function App() {
  const [his, setHis] = useState(false);
  const [team, setTeam] = useState(false);

  const handleHistory = () => {
    setHis(true);
    setTeam(false);
  };

  const handleTeam = () => {
    setHis(false);
    setTeam(true);
  };

  return (
    <div className="Application">
      <>
        <img src={firstPage} className="firstPage" alt="losangelesMountains" />
        <p>
          <img src={LAlogo} className="LAlogo" alt="LA Logo" />
          <button onClick={handleHistory} className="history">
            01. HISTORY
          </button>
          <button onClick={handleTeam} className="team">
            02. TEAM
          </button>
        </p>
      </>
      {his && <SecondPage />}

      {team && <ThirdPage />}
    </div>
  );
}

export default App;
