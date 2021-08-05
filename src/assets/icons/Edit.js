import React from "react";
import Svg, { Path } from "react-native-svg";

function Edit({ onPress }) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onPress={onPress}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.743.3a.95.95 0 00-1.383 0l-1.323 1.38-.671.7-5.37 5.608-.18.93v.006L6.3 11.618c-.069.357.233.672.575.6l1.239-.258 1.341-.28h.002l.894-.188 7.365-7.688a1.053 1.053 0 000-1.445L15.743.3zm-.692 4.884L9.68 10.79l-.52.108-1.573.325c-.198.04-.374-.143-.335-.35l.414-2.186 5.37-5.607 2.015 2.103zm.671-.701l.997-1.041a.527.527 0 000-.723l-1.322-1.38c-.191-.2-.5-.2-.692 0l-.997 1.041 2.014 2.103zM2 2.14h8.626l-.948.99h-7.73a1 1 0 00-1 1v11.878a1 1 0 001 1h11.293a1 1 0 001-1v-5.025l.95-.992v6.01a2 2 0 01-2 2H2a2 2 0 01-2-2V4.14a2 2 0 012-2z"
        fill="#000"
      />
    </Svg>
  );
}

export default Edit;
