import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MoreSelected() {
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
        d="M3.5 5a.5.5 0 000 1h11a.5.5 0 000-1h-11zm0 8a.5.5 0 000 1h11a.5.5 0 000-1h-11z"
        fill="#EA3323"
      />
      <Path
        d="M0 9.5a.8.8 0 01.8-.8h16.4a.8.8 0 010 1.6H.8a.8.8 0 01-.8-.8z"
        fill="#FEB858"
      />
    </Svg>
  );
}

export default MoreSelected;
