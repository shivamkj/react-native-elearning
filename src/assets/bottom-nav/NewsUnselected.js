import * as React from "react";
import Svg, { Path } from "react-native-svg";

function NewsUnselected(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 7H1.5c-.296 0-.5.204-.5.5V16c0 1.183.674 2 1.857 2h12C16.041 18 17 17.04 17 15.857V.536A.536.536 0 0016.464 0h-12C4.168 0 4 .24 4 .536V7zm12 8.857C16 16.45 15.449 17 14.857 17H4.695a2.103 2.103 0 00.248-.668l.018-.09A2.12 2.12 0 005 15.857V1h11v14.857zM3 17c-.592 0-1-.551-1-1.143V8h2v7.857C4 16.45 3.592 17 3 17zM7.5 5.5h3a.5.5 0 010 1h-3a.5.5 0 110-1zm0 2h6a.5.5 0 010 1h-6a.5.5 0 110-1zm6 4h-6a.5.5 0 000 1h6a.5.5 0 000-1zm-6-2h6a.5.5 0 010 1h-6a.5.5 0 010-1z"
        fill="#666"
      />
    </Svg>
  );
}

export default NewsUnselected;
