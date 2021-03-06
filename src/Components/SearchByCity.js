import "./style.css";
import img1 from "../img/search.gif";
import img2 from "../img/addMember.png";
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

      <div className="wrapper">
        {teamByCity.length !== 0 ? (
          <>
          {teamByCity.map((t) => (
            
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
          )) }
            <div className="card">
              <img src={img2} alt="avtar" />
              <div className="card-content">
                <h1 className="card-title">Your Name</h1>
                <h3>We are hiring</h3>
                <p>
                  <span>#perspective #grow </span>
                </p>
              </div>
            </div>
          
            </>
         
        ) : (
          <div className="searchImg">
            <img src={img1} alt="not found" />
            <h3>No result found</h3>
          </div>
        )}
      </div>
    </>
  );
};
