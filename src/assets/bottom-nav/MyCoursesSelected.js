import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MyCoursesSelected() {
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
        d="M15 .5c0-.21-.18-.5-.404-.5H4.146C2.77 0 2 1.214 2 2.5v13.665C2 17.5 3 18 4.145 18h11.451c.223 0 .404-.17.404-.378V4c0-1-.777-1-1-1L4.142 4C3 4 3 3 3 2.5 3 1 4.142 1 4.142 1h10.454c.22 0 .404-.294.404-.5zM4 2.503C4 2.295 4.182 2 4.407 2h10.186c.225 0 .407.295.407.503 0 .208-.182.497-.407.497H4.407C4.182 3 4 2.711 4 2.503z"
        fill="#EA3323"
      />
      <Path
        d="M6.768 13.472a.41.41 0 00.537-.25l.608-1.644h2.13c.017 0 .03-.003.044-.003l.608 1.647c.065.172.22.278.387.278.051 0 .099-.01.15-.028a.436.436 0 00.24-.556L9.64 7.956A.68.68 0 009 7.5a.68.68 0 00-.639.457l-1.834 4.96a.437.437 0 00.241.555zM9 8.635l.771 2.083H8.232L9 8.635z"
        fill="#fff"
      />
      <Path
        d="M2 2.095C2 .938 2.938 0 4.095 0h11.406c.276 0 .507.23.418.49-.15.44-.456.756-.458 1.51-.001.91.444 1.165.526 1.8.014.11-.077.2-.188.2H3.905A1.905 1.905 0 012 2.095z"
        fill="#FEB858"
      />
    </Svg>
  );
}

export default MyCoursesSelected;
