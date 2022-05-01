import "./style.css";
import { team } from "../Data/team";
import { useState } from "react";

export const SearchByCity = () => {
    const [teamByCity, setTeamByCity] = useState(team);
  const handleClick = (e) => {
    console.log(e.target.value);
    if (e.target.value === "berlin") {
        setTeamByCity(team.filter((t) => t.location === "berlin"));
      }
      if (e.target.value === "amsterdam") {
        setTeamByCity(team.filter((t) => t.location === "amsterdam"));
      }
      if (e.target.value === "cape town") {
        setTeamByCity(team.filter((t) => t.location === "cape town"));
      }
      if (e.target.value === "all") {
        setTeamByCity(team);
      }

  };
  return (
    <>
      <div>
        <ul className="showcase">
          <li>
            <button value="all" onClick={handleClick}>
              All
            </button>
          </li>

          <li>
            <button value="berlin" onClick={handleClick}>
              Berlin
            </button>
          </li>

          <li>
            <button value="amsterdam" name="amsterdam" onClick={handleClick}>
              Amsterdam
            </button>
          </li>
          <li>
            <button value="cape town" onClick={handleClick}>
              Cape town
            </button>
          </li>
        </ul>
      </div>
      <div className="body-container">
        <div className="row">
          {teamByCity.map((t) => (
            <>
              <div className="column">
                <div className="card">
                  <img src={t.image} alt="Avatar" />
                  <div className="card-content">
                    <h1 className="card-title">{t.name}</h1>
                    <h3>{t.role}</h3>
                    <p>
                      {t.tags.map((tag) => (
                        <span>#{tag} </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      </>
  );
};
