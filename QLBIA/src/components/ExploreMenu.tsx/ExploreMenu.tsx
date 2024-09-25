import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
interface ExploreMenuProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}
const ExploreMenu: React.FC<ExploreMenuProps> = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">Choose from a diverse menu</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev: string) =>
                  prev === item.club_name ? "All" : item.club_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.club_name ? "active" : ""}
                src={item.club_image}
                alt=""
              />
              <p>{item.club_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
