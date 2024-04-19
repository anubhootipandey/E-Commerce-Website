import React from "react";

const Sidebar = ({ categories, filterFunction }) => {
  return (
      <div className="sidenav">
        <ul className="mainNav">
          {categories.map((category, index) => (
            <li
              key={index}
              className="single-nav"
              onClick={() => filterFunction(category)}
            >
              <a href="#">
                <span className="text">{category}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default Sidebar;
