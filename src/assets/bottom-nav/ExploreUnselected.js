import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ExploreUnselected() {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 9A9 9 0 110 9a9 9 0 0118 0zm-1 0A8 8 0 111 9a8 8 0 0116 0zm-4.277-3.948a.433.433 0 01.598.564l-.003.006a.44.44 0 01-.016.03l-2.61 4.862a.433.433 0 01-.177.177L5.638 13.31l-.005.003H5.63a.433.433 0 01-.58-.59l2.62-4.874a.433.433 0 01.177-.176l4.875-2.621zM8.16 8.772l-1.666 3.097 3.097-1.665L8.16 8.772zm.612-.612l1.432 1.432 1.665-3.097L8.772 8.16z"
        fill="#666"
      />
    </Svg>
  )
}

export default ExploreUnselected;
