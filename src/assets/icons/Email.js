import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEmail(props) {
  return (
    <Svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9 9L0 4.279V3.167c0-.328.111-.605.334-.83C.557 2.112.82 2 1.125 2h15.75c.305 0 .568.112.791.337.223.225.334.502.334.83v1.112L9 9zm-.563 1.167h1.126L18 5.627v9.206c0 .316-.111.59-.334.82-.223.231-.486.347-.791.347H1.125c-.305 0-.568-.116-.791-.346a1.142 1.142 0 01-.334-.82V5.627l8.438 4.539z"
        fill="#666"
      />
    </Svg>
  );
}

export default SvgEmail;
