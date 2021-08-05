import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const Bad = ({ active, onPress }) => (
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
      <G opacity={0.25} fill="#000">
        <Path d="M12.308 12.718a2.052 2.052 0 00-4.103 0h4.102zM23.795 12.718a2.051 2.051 0 00-4.102 0h4.102z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.99 15.59a10.257 10.257 0 016.781 2.552l-.541.616a9.4 9.4 0 00-6.228-2.347 9.4 9.4 0 00-6.245 2.361l-.543-.615a10.257 10.257 0 016.776-2.567z"
        />
      </G>
    </G>
  </Svg>
);

export default Bad;
