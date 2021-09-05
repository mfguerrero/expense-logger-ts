import React from "react";

import Header from "../../components/layout/header";
import Summary from "../summary/summary";
import Filters from "../filters/filters";
import Expenses from "../expenses/expenses";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Header />
      <Summary />
      <Filters />
      <Expenses />
    </div>
  );
};

export default Dashboard;
