import React from "react";
import Svg, { Mask, Path, G, Rect } from "react-native-svg";

function SvgPreviousPapers() {
  return (
    <Svg
      width={14}
      height={18}
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Mask id="prefix__a" maskUnits="userSpaceOnUse" x={0} y={0} width={14} height={18}>
        <Path
          d="M0 1a1 1 0 011-1h12a1 1 0 011 1v16a1 1 0 01-1 1H1a1 1 0 01-1-1V1z"
          fill="#C4C4C4"
        />
      </Mask>
      <G mask="url(#prefix__a)" fillRule="evenodd" clipRule="evenodd" fill="#666">
        <Path d="M8 0H1a1 1 0 00-1 1v16a1 1 0 001 1h12a1 1 0 001-1V6h-1v11H1V1h7V0z" />
        <Path d="M14.308 5.335L8.611-.362l-.665.665L13.643 6l.665-.665z" />
        <Path d="M21-11H9V5h12v-16zM9-12a1 1 0 00-1 1V5a1 1 0 001 1h12a1 1 0 001-1v-16a1 1 0 00-1-1H9z" />
      </G>
    </Svg>
  );
}

export default SvgPreviousPapers;
