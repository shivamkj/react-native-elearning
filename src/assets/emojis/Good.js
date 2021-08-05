import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const Good = ({ active, onPress }) => (
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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.99 21.233a10.256 10.256 0 006.781-2.551l-.541-.616a9.4 9.4 0 01-6.228 2.347 9.4 9.4 0 01-6.245-2.361l-.543.615a10.256 10.256 0 006.776 2.566z"
        fill="#000"
        opacity={0.25}
      />
    </G>
  </Svg>
);

export default Good;
