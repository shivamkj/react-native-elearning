import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const Best = ({ active, onPress }) => (
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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.388 16.41a8.614 8.614 0 0017.227 0H7.387zm.73.82h15.766a7.926 7.926 0 01-15.765 0z"
        fill="#000"
        opacity={0.25}
      />
      <Path
        opacity={0.25}
        d="M12.308 11.898a2.051 2.051 0 10-4.103 0h4.102zM23.795 11.898a2.051 2.051 0 10-4.103 0h4.103z"
        fill="#000"
      />
    </G>
  </Svg>
);

export default Best;
