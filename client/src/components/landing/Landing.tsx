import "./landing.css";
import { useState } from "react";
interface CircleSvgType {
  id: number;
  cx: number;
  cy: number;
  r: number;
  stroke: string;
  strokeWidth: number;
  fill: string;
}
function Landing() {
  const svgw = 500;
  const rp = 0.7;
  const [circles, setCircles] = useState<CircleSvgType[]>([
    {
      id: 1,
      cx: svgw / 3 / 2,
      cy: svgw / 3 / 2,
      r: ((svgw / 3) * rp) / 2,
      stroke: "#000",
      strokeWidth: 1,
      fill: "#f0f",
    },
    {
      id: 2,
      cx: svgw / 2,
      cy: svgw / 3 / 2,
      r: ((svgw / 3) * rp) / 2,
      stroke: "#000",
      strokeWidth: 1,
      fill: "#000",
    },
    {
      id: 3,
      cx: svgw - svgw / 6,
      cy: svgw / 3 / 2,
      r: ((svgw / 3) * rp) / 2,
      stroke: "#000",
      strokeWidth: 1,
      fill: "#000",
    },
    {
      id: 4,
      cx: svgw / 3 / 2,
      cy: svgw / 2,
      r: ((svgw / 3) * rp) / 2,
      stroke: "#000",
      strokeWidth: 1,
      fill: "#8ff",
    },
    {
      id: 5,
      cx: svgw / 2,
      cy: svgw / 2,
      r: ((svgw / 3) * rp) / 2,
      stroke: "#000",
      strokeWidth: 1,
      fill: "#f0f",
    },
    {
      id: 6,
      cx: svgw - svgw / 6,
      cy: svgw / 2,
      r: ((svgw / 3) * rp) / 2,
      stroke: "#000",
      strokeWidth: 1,
      fill: "#8ff",
    },
    {
      id: 7,
      cx: svgw / 3 / 2,
      cy: svgw - svgw / 6,
      r: ((svgw / 3) * rp) / 2,
      stroke: "#000",
      strokeWidth: 1,
      fill: "#f0f",
    },
    {
      id: 8,
      cx: svgw / 2,
      cy: svgw - svgw / 6,
      r: ((svgw / 3) * rp) / 2,
      stroke: "#000",
      strokeWidth: 1,
      fill: "#000",
    },
    {
      id: 9,
      cx: svgw - svgw / 6,
      cy: svgw - svgw / 6,
      r: ((svgw / 3) * rp) / 2,
      stroke: "#000",
      strokeWidth: 1,
      fill: "#8ff",
    },
  ]);
  return (
    <div className="main overflow-y-auto">
      <div className="landing-box">
        <h1 id="michi-title">Michi game</h1>
        <div className="landing_text">
          <p>
            play this gam with your friends, now with this new version tic tac
            toe.
          </p>
          <p>the games proloned for more time, with new rules. </p>
          <p>In this game is for demostrate your full power.</p>
          <p> Michi Game the new Revolution</p>
        </div>
        <div className="container_landing_michi">
          <svg viewBox="0 0 500 500">
            <line x1={0} x2={500} y1={500 / 3} y2={500 / 3} stroke="#def" />
            <line
              x1={0}
              x2={500}
              y1={(500 / 3) * 2}
              y2={(500 / 3) * 2}
              stroke="#def"
            />
            <line x1={500 / 3} x2={500 / 3} y1={0} y2={500} stroke="#def" />
            <line
              x1={(500 / 3) * 2}
              x2={(500 / 3) * 2}
              y1={0}
              y2={500}
              stroke="#def"
            />
            {circles.map((item, index) => {
              return (
                <circle
                  key={item.id}
                  cx={item.cx}
                  cy={item.cy}
                  fill={item.fill}
                  stroke={item.stroke}
                  r={item.r}
                  strokeWidth={item.strokeWidth}
                />
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Landing;
