import React from "react";
import Svg, { Path } from "react-native-svg";

const NotAnswered = ()  => {
  return (
    <Svg
      width={35}
      height={35}
      viewBox="0 0 16 16"
      fill="#F04A07"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute" }}
    >
      <Path
        d="M0 2.667A2.667 2.667 0 012.667 0h10.666A2.667 2.667 0 0116 2.667v7.785c0 .81-.368 1.576-1 2.082l-3.603 2.882A2.667 2.667 0 019.731 16H6.27a2.667 2.667 0 01-1.666-.584L1 12.534A2.667 2.667 0 010 10.452V2.667z"
        fill="#F04A07"
      />
    </Svg>
  );
}

export default React.memo(NotAnswered);
