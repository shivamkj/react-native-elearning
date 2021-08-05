import React from "react";
import Svg, { Path } from "react-native-svg";

function Search({ onPress }) {
  return (
    <Svg
      width={20}
      height={20}
      onPress={onPress}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.438 13.145a7.5 7.5 0 11.707-.707l4.158 4.158a.5.5 0 11-.707.707l-4.158-4.158zM14 7.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
        fill="#000"
      />
    </Svg>
  );
}

export default Search;
