import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function SvgNotes() {
  return (
    <Svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M3.5 1A.5.5 0 014 .5h12a.5.5 0 01.5.5v16a.5.5 0 01-.5.5H4a.5.5 0 01-.5-.5V1zM1.5 2.833c0-.04.023-.116.126-.2A.62.62 0 012 2.5h1.478c.013.091.022.205.022.333v13.334c0 .128-.009.242-.022.333H2a.619.619 0 01-.374-.134c-.103-.082-.126-.159-.126-.2V2.834z"
        stroke="#666"
      />
      <Rect x={6} y={6} width={5} height={1} rx={0.5} fill="#666" />
      <Rect x={6} y={9} width={8} height={1} rx={0.5} fill="#666" />
      <Rect x={6} y={12} width={8} height={1} rx={0.5} fill="#666" />
    </Svg>
  );
}

export default SvgNotes;
