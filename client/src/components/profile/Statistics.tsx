import React, { useLayoutEffect, useState } from "react";
import "./Statistics.css";

function getPercentOfPart(all: number, part: number) {
  return Math.round((part * 100) / all);
}
function getPercent(all: number, percent: number) {
  return all * (percent * 0.01);
}

function useWindowSize(ref: any) {
  const [size, setSize] = useState([0, 0, 0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      if (ref.current !== null) {
        const { current } = ref;
        const boundingRect = current.getBoundingClientRect();
        const { width, height } = boundingRect;
        setSize([window.innerWidth, window.innerHeight, width, height]);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [ref]);
  return size;
}
function Statistics() {
  const statisticDiv = React.useRef<any>(null);
  const size = useWindowSize(statisticDiv);
  const widthSvg = Math.round(size[2]);
  return (
    <div
      ref={statisticDiv}
      onClick={() => console.log(size)}
      id="profile-statistics"
    >
      <svg x="0px" y="0px" viewBox={`0 0 ${widthSvg} ${100}`}>
        <rect
          x={getPercent(widthSvg, 5)}
          y={100 - getPercentOfPart(100, 80)}
          fill="#0ff"
          width="10"
          height={getPercentOfPart(100, 80)}
        />
        <line
          x1="0"
          y1={100 - getPercentOfPart(100, 80)}
          x2={widthSvg - 30}
          strokeWidth={0.5}
          stroke="#fff"
          y2={100 - getPercentOfPart(100, 80)}
        />
        <line
          x1="0"
          y1={100 - getPercentOfPart(100, 20)}
          x2={widthSvg - 30}
          strokeWidth={0.5}
          stroke="#fff"
          y2={100 - getPercentOfPart(100, 20)}
        />
        {/**fill hello world */}
        <text
          x={getPercent(widthSvg, 100) - 25}
          y={100 - getPercentOfPart(100, 80)}
          fill="#0ff"
          fontSize="10"
          fontFamily="Verdana"
          textAnchor="start"
          alignmentBaseline="middle"
        >
          {getPercentOfPart(100, 80)}%
        </text>
        <text
          x={getPercent(widthSvg, 100) - 25}
          y={100 - getPercentOfPart(100, 20)}
          fill="#f77"
          fontSize="10"
          fontFamily="Verdana"
          textAnchor="start"
          alignmentBaseline="middle"
        >
          {getPercentOfPart(100, 20)}%
        </text>

        <rect
          x={getPercent(widthSvg, 15)}
          y={100 - 20}
          fill="#f77"
          width="10"
          height="20"
        />
      </svg>
    </div>
  );
}

export default Statistics;
