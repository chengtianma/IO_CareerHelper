import React from "react";
import close from "./images/icon-remove.svg";

const Header = ({ keywords, removeKeywords, clearAll }) => {
  return (
    <div className="header-container">
      <ul>
        {keywords.map((key, id) => {
          return (
            <li key={id}>
              {key}
              <button className="close" onClick={() => removeKeywords(key)}>
                <img src={close} alt="" />
              </button>
            </li>
          );
        })}

        <button class="clear" onClick={() => clearAll()}>Clear</button>
      </ul>
    </div>
  );
};

export default Header;
