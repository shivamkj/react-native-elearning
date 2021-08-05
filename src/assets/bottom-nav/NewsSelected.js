import * as React from "react";
import Svg, { Path } from "react-native-svg";

function NewsSelected(props) {
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
        d="M1.5 7H4V.536C4 .24 4.168 0 4.464 0h12c.296 0 .536.24.536.536v15.321C17 17.041 16.04 18 14.857 18h-12C1.674 18 1 17.183 1 16V7.5c0-.296.204-.5.5-.5zm.5 8.857C2 16.45 2.408 17 3 17c.592 0 1-.551 1-1.143V8H2v7.857z"
        fill="#EA3323"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 5.5h-3a.5.5 0 100 1h3a.5.5 0 000-1zm3 2h-6a.5.5 0 100 1h6a.5.5 0 000-1zm-6 4h6a.5.5 0 010 1h-6a.5.5 0 010-1zm6-2h-6a.5.5 0 100 1h6a.5.5 0 000-1z"
        fill="#fff"
      />
      <Path
        d="M4 7H1.5a.5.5 0 00-.5.5v8.733C1 17.209 1.791 18 2.767 18 3.448 18 4 17.448 4 16.767V7z"
        fill="#FEB858"
      />
    </Svg>
  );
}

export default NewsSelected;
