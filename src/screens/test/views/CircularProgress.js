import React, { Children } from "react";
import { View, StyleSheet } from "react-native";
/**
 * Override styles that get passed from props
 **/
propStyle = (percent, base_degrees) => {
  const rotateBy = base_degrees + percent * 3.6;
  return {
    transform: [{ rotateZ: `${rotateBy}deg` }],
  };
};

renderThirdLayer = (percent) => {
  if (percent > 50) {
    /**
     * Third layer circle default is 45 degrees, so by default it occupies the right half semicircle.
     * Since first 50 percent is already taken care  by second layer circle, hence we subtract it
     * before passing to the propStyle function
     **/
    return <View style={[styles.secondProgressLayer, propStyle(percent - 50, 45)]}></View>;
  } else {
    return <View style={styles.offsetLayer}></View>;
  }
};

const CircularProgress = ({ percent, children }) => {
  let firstProgressLayerStyle;
  if (percent > 50) {
    firstProgressLayerStyle = propStyle(50, -135);
  } else {
    firstProgressLayerStyle = propStyle(percent, -135);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.firstProgressLayer, firstProgressLayerStyle]}></View>
      {renderThirdLayer(percent)}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderWidth: 3,
    borderRadius: 35,
    borderColor: "#EFEFEF",
    justifyContent: "center",
    alignItems: "center",
  },
  firstProgressLayer: {
    width: 70,
    height: 70,
    borderWidth: 3,
    borderRadius: 35,
    position: "absolute",
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: "#FEB858",
    borderTopColor: "#FEB858",
    transform: [{ rotateZ: "-135deg" }],
  },
  secondProgressLayer: {
    width: 70,
    height: 70,
    position: "absolute",
    borderWidth: 3,
    borderRadius: 35,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: "#FEB858",
    borderTopColor: "#FEB858",
    transform: [{ rotateZ: "45deg" }],
  },
  offsetLayer: {
    width: 70,
    height: 70,
    position: "absolute",
    borderWidth: 3,
    borderRadius: 35,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: "#EFEFEF",
    borderTopColor: "#EFEFEF",
    transform: [{ rotateZ: "-135deg" }],
  },
});

export default CircularProgress;
