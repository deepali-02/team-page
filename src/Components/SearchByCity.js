import "./style.css";

export const SearchByCity = () => {
  const handleClick = (e) => {
    console.log(e.target.value);
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
    </>
  );
};
