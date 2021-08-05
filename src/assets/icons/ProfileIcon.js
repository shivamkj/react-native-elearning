import React from 'react';
import Svg, {Mask, Circle, G, Path} from 'react-native-svg';

function ProfileIcon({size = 80}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={80}
        height={80}>
        <Circle cx={40} cy={40} r={40} fill="#F7F8FC" />
      </Mask>
      <G mask="url(#prefix__a)">
        <Circle cx={40} cy={40} r={39.5} stroke="#666" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M40 43c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13zm0-1c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12z"
          fill="#666"
        />
        <Path
          d="M16.5 66c0-10.77 8.73-19.5 19.5-19.5h8c10.77 0 19.5 8.73 19.5 19.5v33.5h-47V66z"
          stroke="#666"
        />
      </G>
    </Svg>
  );
}

export default ProfileIcon;
