import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [quarter, quarterValue] = useState(1);
  const [down, downValue] = useState(1);
  const [yards, yardsValue] = useState(0);
  const [ballYard, ballYardValue] = useState(0);
  return (
    <div>
      <div className="bottomRow">
        <div className="down">
          <h3 className="down__title">Down</h3>
          <div className="down__value">{down}</div>
        </div>
        <div className="toGo">
          <h3 className="toGo__title">Yards To Go</h3>
          <div className="toGo__value">{yards}</div>
        </div>
        <div className="ballOn">
          <h3 className="ballOn__title">Ball on</h3>
          <div className="ballOn__value">{ballYard}</div>
        </div>
        <div className="quarter">
          <h3 className="quarter__title">Quarter</h3>
          <div className="quarter__value">{quarter}</div>
        </div>
      </div>
      <section className="buttons">
        <button className="awayButtons__fieldGoal" onClick={() => downValue(down + 1)}>Downs</button>
        <button className="awayButtons__fieldGoal" onClick={() => yardsValue(yards + 1)}>Yards To Go</button>
        <button className="awayButtons__fieldGoal" onClick={() => ballYardValue(ballYard + 1)}>Ball on YardLine</button>
        <button className="awayButtons__fieldGoal" onClick={() => quarterValue(quarter + 1)}>Quarter</button>
      </section>
    </div>
  );
};

export default BottomRow;
