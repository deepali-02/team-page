import "./style.css";
import { team } from "../Data/team";
export const Team = () => {
  return (
    <div>
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
      <div className="body-container"></div>
    </div>
  );
};
