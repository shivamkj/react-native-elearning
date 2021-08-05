import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const ImageBackground = () => (
  <Svg
    // width={}
    height={220}
    viewBox="0 0 360 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{position: "absolute", zIndex: 98, width: "100%"}}
  >
    <Path
      transform="rotate(-180 360 240.537)"
      fill="url(#prefix__paint0_linear)"
      d="M360 240.537h360v240.537H360z"
    />
    <Defs>
      <LinearGradient
        id="prefix__paint0_linear"
        x1={540}
        y1={240.537}
        x2={540}
        y2={481.075}
        gradientUnits="userSpaceOnUse"
      >
        <Stop />
        <Stop offset={1} stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default ImageBackground;
