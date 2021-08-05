import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowRight() {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.717 13.646a.5.5 0 00.707 0l5.364-5.364a.5.5 0 000-.707L6.424 2.211a.5.5 0 00-.707.708l5.01 5.01-5.01 5.01a.5.5 0 000 .707z"
        fill="#828282"
      />
    </Svg>
  )
}

export default ArrowRight
