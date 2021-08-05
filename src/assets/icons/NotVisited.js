import React from "react";
import Svg, { Path } from "react-native-svg";

const NotVisited = () => {
  return (
    <Svg
      width={35}
      height={35}
      viewBox="0 0 16 16"
      fill="#E6E6E6"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute" }}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.667 0A2.667 2.667 0 000 2.667v10.666A2.667 2.667 0 002.667 16h10.666A2.667 2.667 0 0016 13.333V2.667A2.667 2.667 0 0013.333 0H2.667zm0 .667a2 2 0 00-2 2v10.666a2 2 0 002 2h10.666a2 2 0 002-2V2.667a2 2 0 00-2-2H2.667z"
        fill="#666"
      />
      <Path
        d="M.666 2.667a2 2 0 012-2h10.667a2 2 0 012 2v10.666a2 2 0 01-2 2H2.666a2 2 0 01-2-2V2.667z"
        fill="#E6E6E6"
      />
    </Svg>
  );
};

export default React.memo(NotVisited);
