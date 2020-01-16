import React from "react";
import "./App.css";
import InfoPage from "./components/InfoPage";
import InfoCard from './components/InfoCard';

function App() {
  return (
    <React.Fragment>
      <InfoPage />
      <InfoCard />
    </React.Fragment>
  );
}

export default App;
