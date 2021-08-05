import React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLogout() {
  return (
    <Svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 5V3h7v12H8v-2H7v2.222c0 .43.288.778.643.778h7.714c.355 0 .643-.348.643-.778V2.778c0-.43-.288-.778-.643-.778H7.643C7.288 2 7 2.348 7 2.778V5h1z"
        fill="#666"
      />
      <Path
        d="M.646 8.646a.5.5 0 000 .708l3.182 3.182a.5.5 0 10.708-.708L1.707 9l2.829-2.828a.5.5 0 10-.708-.708L.646 8.646zM10 8.5H1v1h9v-1z"
        fill="#666"
      />
    </Svg>
  );
}

export default SvgLogout;
