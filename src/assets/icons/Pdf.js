import React, { memo } from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const Pdf = memo(({ size }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G clipPath="url(#prefix__clip0)">
      <Path
        d="M16 0H3.6a.8.8 0 00-.8.8v22.4a.8.8 0 00.8.8h17.2a.8.8 0 00.8-.8V5.6L16 0z"
        fill="#FF6158"
      />
      <Path d="M16 0l5.6 5.6h-4.72a.88.88 0 01-.88-.88V0z" fill="#F34339" />
      <Path fill="#FEB858" d="M2.8 18.4h18.8v3.2H2.8z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.6 9a.6.6 0 01.6-.6h8.4a.6.6 0 110 1.2H8.2a.6.6 0 01-.6-.6zm0 2.8a.6.6 0 01.6-.6h8.4a.6.6 0 110 1.2H8.2a.6.6 0 01-.6-.6zm.6 2.2a.6.6 0 100 1.2h8.4a.6.6 0 100-1.2H8.2z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="prefix__clip0">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
));

export default Pdf;
