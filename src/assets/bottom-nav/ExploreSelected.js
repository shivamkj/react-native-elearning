import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ExploreSelected() {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M9 0C4.037 0 0 4.037 0 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
        fill="#EA3323"
      />
      <Path
        d="M7.579 7.392a.462.462 0 00-.188.188l-2.795 5.199a.462.462 0 00.618.63l.002-.002.005-.003 5.203-2.794a.461.461 0 00.188-.188l-3.033-3.03z"
        fill="#FEB858"
      />
      <Path
        d="M10.574 10.46a.463.463 0 00.188-.189l2.795-5.198a.462.462 0 00-.618-.63h-.002l-.006.004L7.73 7.24a.462.462 0 00-.188.188l3.033 3.03z"
        fill="#fff"
      />
    </Svg>
  );
}

export default ExploreSelected;
