import "./style.css";

import { SearchByCity } from "../Components/SearchByCity";

export const Team = () => {

const changeMode =()=>{
    var element = document.body;
    element.classList.toggle("dark-mode");
}

  return (
    <div>
        <button className="btn" onClick={changeMode}>Change mode</button>
      <div className="title-container" id="grad1">
        <svg
          height="150"
          stroke="#000"
          strokeWidth="2"
          className="text-line"
          width="100%"
        >
          <text x="50%" dominantBaseline="middle" textAnchor="middle" y="50%">
            Meet our team
          </text>
        </svg>
      </div>
      <div>
        <SearchByCity />
      </div>
    </div>
  );
};
