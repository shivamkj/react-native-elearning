import * as React from "react";
import Svg, { Path } from "react-native-svg";

const BackArrow = ({ color, onPress, style }) => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 11 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onPress={onPress}
      style={style}
    >
      <Path
        d="M10.03.22a.75.75 0 00-1.06 0L.22 8.97a.75.75 0 000 1.06l8.75 7.75a.75.75 0 001.06-1.06L1.81 9.5l8.22-8.22a.75.75 0 000-1.06z"
        fill={color}
      />
    </Svg>
  );
};

export default BackArrow;
