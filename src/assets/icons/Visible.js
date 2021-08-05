import React from "react";
import Svg, { Path } from "react-native-svg";

const Visible = ({ onPress }) => (
  <Svg
    width={18}
    height={18}
    onPress={onPress}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 3C5.228 3 1.944 5.256.24 8.586a.91.91 0 000 .828C1.944 12.744 5.228 15 9 15c3.772 0 7.056-2.256 8.76-5.586a.91.91 0 000-.828C16.055 5.256 12.771 3 9 3zm0 1C5.67 4 2.764 5.839 1.23 8.564a.889.889 0 000 .872C2.764 12.161 5.67 14 9 14c3.33 0 6.235-1.839 7.77-4.564a.889.889 0 000-.872C15.235 5.839 12.33 4 9 4z"
      fill="#000"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 13a4 4 0 100-8 4 4 0 000 8zm0-1a3 3 0 100-6 3 3 0 000 6z"
      fill="#000"
    />
  </Svg>
);

export default Visible;
