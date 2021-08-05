import React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDownloads() {
  return (
    <Svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5.5a.5.5 0 011 0v10.293l2.328-2.329a.5.5 0 11.708.708l-3.182 3.182a.5.5 0 01-.708 0L5.464 9.172a.5.5 0 11.708-.708L8.5 10.793V.5zm9 10.5c-.223 0-.5.238-.5.46v3.428C17 16.25 16.833 17 15.4 17H2.6C1.167 17 1 16.25 1 14.888V11.4C1 11.178.723 11 .5 11c-.223 0-.5.178-.5.401v3.487C0 16.25 0 18 2.6 18h12.8c2.6 0 2.6-1.75 2.6-3.112V11.46c0-.22-.277-.46-.5-.46z"
        fill="#666"
      />
    </Svg>
  );
}

export default SvgDownloads;
