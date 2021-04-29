import React from "react";

import MenuItems from "../Components/MenuItems";
import Title from "../Components/Title";
import projects from "../Components/allprojects";

function PortfoliosPage() {
  return (
    <div className="PortfolioPage">
      <div className="title">
        <Title title={"Projects"} />
      </div>
      <div className="portfolios-data">
        <MenuItems menuItem={projects} />
      </div>
    </div>
  );
}

export default PortfoliosPage;
