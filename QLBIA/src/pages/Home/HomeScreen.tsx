import React, { useState } from "react";
import "./HomeScreem.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu.tsx/ExploreMenu";

const HomeScreen = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  );
};

export default HomeScreen;
