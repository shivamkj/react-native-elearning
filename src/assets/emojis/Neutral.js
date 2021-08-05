import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const Neutral = ({ active, onPress }) => (
  <Svg
    width={32}
    height={32}
    onPress={onPress}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G opacity={0.6}>
      <Circle cx={16} cy={16} r={16} fill={active ? "#FDCD59" : "#E4E6EC"} />
      <Circle opacity={0.25} cx={10.257} cy={12.718} r={2.051} fill="#000" />
      <Circle opacity={0.25} cx={21.744} cy={12.718} r={2.051} fill="#000" />
      <Path opacity={0.25} fill="#000" d="M9.026 19.692h13.949v.821H9.026z" />
    </G>
  </Svg>
);

export default Neutral;
