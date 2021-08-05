import React from "react";
import Svg, { Path } from "react-native-svg";

const Answered = () => {
  return (
    <Svg
      width={35}
      height={35}
      viewBox="0 0 16 16"
      fill="#7FC322"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute" }}
    >
      <Path
        d="M0 13.333A2.667 2.667 0 002.667 16h10.666A2.667 2.667 0 0016 13.333V5.548c0-.81-.368-1.576-1-2.082L11.396.584A2.667 2.667 0 009.731 0H6.27c-.606 0-1.193.206-1.666.584L1 3.466C.368 3.972 0 4.738 0 5.548v7.785z"
        fill="#7FC322"
      />
    </Svg>
  );
};

export default React.memo(Answered);
