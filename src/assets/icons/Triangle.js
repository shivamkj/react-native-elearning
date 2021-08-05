import React from "react";
import Svg, { Path } from "react-native-svg";

const Triangle = (props) => (
  <Svg
    width={8}
    height={8}
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M3.601.253a.441.441 0 01.798 0l3.548 7.05c.159.317-.059.697-.399.697H.452c-.34 0-.558-.38-.399-.696L3.601.253z"
      fill="#3458A2"
    />
  </Svg>
);

export default Triangle;
