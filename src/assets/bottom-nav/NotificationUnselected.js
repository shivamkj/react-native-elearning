import * as React from "react";
import Svg, { Path } from "react-native-svg";

function NotificationUnselected(props) {
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
        d="M8 .5a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1A.5.5 0 018 .5zm-2 17a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM3.816 9.804c-.042-1.831.48-3.564 1.402-4.814C6.128 3.758 7.413 3 9 3c1.587 0 2.873.758 3.782 1.99.922 1.25 1.444 2.983 1.402 4.814-.041 1.861.338 3.555 1.4 5.196H2.416c1.061-1.64 1.44-3.335 1.399-5.196zm-1 .022C2.725 5.782 5.106 2 9 2c3.895 0 6.275 3.782 6.184 7.826-.043 1.933.405 3.614 1.699 5.276.27.347.046.898-.384.898H1.501c-.43 0-.654-.55-.384-.898C2.411 13.44 2.86 11.76 2.816 9.826z"
        fill="#666"
      />
    </Svg>
  );
}

export default NotificationUnselected;
