import React, { memo } from "react";
import Svg, { Mask, Path, G, Rect } from "react-native-svg";

const Video = memo(({ size }) => (
  <Svg width={size} height={size} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <Mask id="prefix__a" maskUnits="userSpaceOnUse" x={0} y={2} width={40} height={36}>
      <Path
        d="M0 13.333c0-3.733 0-5.6.727-7.026A6.667 6.667 0 013.64 3.393c1.426-.726 3.293-.726 7.027-.726h18.666c3.734 0 5.6 0 7.027.726a6.667 6.667 0 012.913 2.914C40 7.733 40 9.6 40 13.333v13.334c0 3.733 0 5.6-.727 7.026a6.667 6.667 0 01-2.913 2.914c-1.426.726-3.293.726-7.027.726H10.667c-3.734 0-5.6 0-7.027-.726a6.667 6.667 0 01-2.913-2.914C0 32.267 0 30.4 0 26.667V13.333z"
        fill="#5ADDB3"
      />
    </Mask>
    <G mask="url(#prefix__a)">
      <Rect y={1.333} width={40} height={37.333} rx={2} fill="#0869E8" />
      <Path fill="#5ADDB3" d="M0 2.667h40v4H0zM0 33.333h40v4H0z" />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.824 26.434c-.823.527-1.491.128-1.491-.887V14.453c0-1.017.67-1.413 1.491-.887l8.56 5.48c.823.526.82 1.383 0 1.908l-8.56 5.48z"
      fill="#fff"
    />
  </Svg>
));

export default Video;
