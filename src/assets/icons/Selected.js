import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

function Selected() {
  return (
    <Svg
      width={22}
      height={17}
      viewBox="0 0 22 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.998 2.606L19.45 0 8.909 10.785 2.546 4.271 0 6.877l8.912 9.125 2.546-2.607-.002-.003L21.998 2.606z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={10.999}
          y1={0}
          x2={10.999}
          y2={16.002}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#7FC322" />
          <Stop offset={1} stopColor="#76BD20" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Selected;
