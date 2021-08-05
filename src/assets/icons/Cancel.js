import React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function Cancel({onPress, color}) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onPress={onPress}>
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M6.331 6.953L.134 13.15a.44.44 0 10.623.623L7.001 7.53l6.243 6.243a.439.439 0 00.623 0 .44.44 0 000-.623L7.671 6.953l6.2-6.201a.44.44 0 10-.623-.623L7.001 6.377.753.129A.44.44 0 00.13.752l6.201 6.201z"
          fill={color || '#000'}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h14v14H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Cancel;
