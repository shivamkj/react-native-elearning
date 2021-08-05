import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function NotificationSelected(props) {
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
        d="M8.5 0a.5.5 0 000 1h1a.5.5 0 000-1h-1zM2.816 9.826C2.725 5.782 5.106 2 9 2c3.895 0 6.275 3.782 6.184 7.826-.043 1.933.405 3.614 1.699 5.276.27.347.046.898-.384.898H1.501c-.43 0-.654-.55-.384-.898C2.411 13.44 2.86 11.76 2.816 9.826z"
        fill="#EA3323"
      />
      <Rect x={6} y={17} width={6} height={1} rx={0.5} fill="#FEB858" />
    </Svg>
  );
}

export default NotificationSelected;
