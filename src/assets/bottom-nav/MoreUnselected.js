import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MoreUnselected() {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11A.5.5 0 013 5zm0 8a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11A.5.5 0 013 13zM.5 8.5a.5.5 0 000 1h17a.5.5 0 000-1H.5z"
        fill="#666"
      />
    </Svg>
  );
}

export default MoreUnselected;
