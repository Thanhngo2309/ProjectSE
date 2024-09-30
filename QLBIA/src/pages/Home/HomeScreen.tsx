import { useState } from "react";
import "./HomeScreem.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu.tsx/ExploreMenu";
import TableDisplay from "../../components/TableDisplay/TableDisplay";

const HomeScreen = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <TableDisplay category={category} />
    </div>
  );
};

export default HomeScreen;
