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
      <div className="body-container">
      <div className="row">
          {team.map((t) => (
            <>
              <div className="column">
                <div className="card">
                   
                        <img src={t.image} alt="Avatar"/>
                    
                  <h2 className="card-title">{t.name}</h2>
                  <p>{t.role}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
