import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const Wrost = ({ active, onPress }) => (
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
        <Path d="M12.308 18.461a2.052 2.052 0 00-4.103 0h4.102zM23.795 18.46a2.051 2.051 0 00-4.102 0h4.102z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.99 21.333a10.256 10.256 0 016.781 2.551l-.541.616a9.4 9.4 0 00-6.228-2.347 9.4 9.4 0 00-6.245 2.362l-.543-.616a10.256 10.256 0 016.776-2.566z"
        />
      </G>
    </G>
  </Svg>
);

export default Wrost;
