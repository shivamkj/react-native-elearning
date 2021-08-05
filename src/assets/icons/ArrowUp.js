import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowUp() {
  return (
    <Svg
      width={15}
      height={16}
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.854 10.283a.5.5 0 010-.708l5.364-5.364a.5.5 0 01.707 0l5.364 5.364a.5.5 0 01-.707.708l-5.01-5.01-5.011 5.01a.5.5 0 01-.707 0z"
        fill="#000"
      />
    </Svg>
  )
}

export default ArrowUp
