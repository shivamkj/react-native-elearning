import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function News(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M2.829 13.667h3.667L6.5.893C6.5.4 6.78 0 7.274 0h20.333c.493 0 .893.4.893.893l.002 25.536A3.571 3.571 0 0124.931 30H4.756c-1.972 0-3.095-1.36-3.095-3.333L1.996 14.5c0-.493.34-.833.833-.833zm.498 12.762c0 .986.68 1.904 1.667 1.904.986 0 1.506-.847 1.506-1.833l-.004-11.167H3.662L3.327 26.43z"
          fill="#6D58FF"
        />
        <Path
          d="M6.5 12H2.333a.826.826 0 00-.833.818v14.29C1.5 28.705 2.819 30 4.445 30 5.58 30 6.5 29.097 6.5 27.983V12z"
          fill="#5ADDB3"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.75 7a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3.5a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5h-11.5zM11 18.75a.75.75 0 01.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75zm.75 2.75a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5h-11.5z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h30v30H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default News;
