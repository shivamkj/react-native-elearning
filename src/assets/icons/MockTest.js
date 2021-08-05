import React, { memo } from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const MockTest = memo(({ size }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G clipPath="url(#prefix__clip0)">
      <Path
        d="M20.02 18.927a.4.4 0 01.38-.527h3.2a.4.4 0 01.38.527l-1.6 4.786a.4.4 0 01-.76 0l-1.6-4.786z"
        fill="#F1CE9E"
      />
      <Path fill="#2B81F0" d="M20 1.6h4v17.2h-4z" />
      <Path d="M20 2a2 2 0 114 0v2.8h-4V2z" fill="#0F6DE7" />
      <Path
        d="M12 0H.8a.8.8 0 00-.8.8v22.4a.8.8 0 00.8.8h16a.8.8 0 00.8-.8V5.6L12 0z"
        fill="#FEB858"
      />
      <Path d="M12 0l5.6 5.6h-4.72a.88.88 0 01-.88-.88V0z" fill="#F5A331" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.8 10a.6.6 0 100 1.2h10a.6.6 0 000-1.2h-10zm0 2.8a.6.6 0 100 1.2h10a.6.6 0 000-1.2h-10zm-.6 3.4a.6.6 0 01.6-.6H7a.6.6 0 110 1.2H3.8a.6.6 0 01-.6-.6zm.6 2.2a.6.6 0 100 1.2H7a.6.6 0 000-1.2H3.8zm6.2-2.2a.6.6 0 01.6-.6h3.2a.6.6 0 010 1.2h-3.2a.6.6 0 01-.6-.6zm.6 2.2a.6.6 0 100 1.2h3.2a.6.6 0 000-1.2h-3.2z"
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

export default MockTest;
