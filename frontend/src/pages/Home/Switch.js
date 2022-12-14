import React, { useState } from "react";
import "./Switch.css";
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';


function Switch({toggleTheme, isDarkTheme}) {
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <div className="darkmode-toggle">
    <BsFillSunFill id="sun"/>
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
    <BsFillMoonStarsFill id="moon" />
    </div>
  );
}
export default Switch;


