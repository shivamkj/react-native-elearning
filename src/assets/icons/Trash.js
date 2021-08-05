import React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Trash() {
  return (
    <Svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#prefix__clip0)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.003 1a2 2 0 00-2 2v1h-3.5a.5.5 0 000 1h.643l.734 11.132A2 2 0 003.875 18h9.255a2 2 0 001.996-1.868L15.86 5h.643a.5.5 0 100-1h-3.5V3a2 2 0 00-2-2h-5zm6 3V3a1 1 0 00-1-1h-5a1 1 0 00-1 1v1h7zm-8 1h-2l.67 10.835a1.5 1.5 0 001.497 1.408h8.666a1.5 1.5 0 001.497-1.408L15.003 5h-11z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" transform="translate(.003)" d="M0 0h18v18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Trash
