import React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";

function SvgTestRecord() {
  return (
    <Svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Mask
        id="TestRecord_svg__a"
        maskUnits="userSpaceOnUse"
        x={2}
        y={0}
        width={14}
        height={18}
      >
        <Path
          d="M2 1a1 1 0 011-1h12a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V1z"
          fill="#C4C4C4"
        />
      </Mask>
      <G
        mask="url(#TestRecord_svg__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#666"
      >
        <Path d="M10 0H3a1 1 0 00-1 1v16a1 1 0 001 1h12a1 1 0 001-1V6h-1v11H3V1h7V0z" />
        <Path d="M16.308 5.335L10.611-.362l-.665.665L15.643 6l.665-.665z" />
        <Path d="M23-11H11V5h12v-16zm-12-1a1 1 0 00-1 1V5a1 1 0 001 1h12a1 1 0 001-1v-16a1 1 0 00-1-1H11z" />
      </G>
      <Path
        d="M17.5 10v7a.5.5 0 01-.5.5H1a.5.5 0 01-.5-.5V8a.5.5 0 01.5-.5h7a.5.5 0 01.5.5A1.5 1.5 0 0010 9.5h7a.5.5 0 01.5.5z"
        fill="#fff"
        stroke="#666"
      />
    </Svg>
  );
}

export default SvgTestRecord;
