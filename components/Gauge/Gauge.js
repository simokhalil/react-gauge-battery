import React from "react";
import { Image, ImageBackground, Text, View } from 'react-native';

import GaugeBg from "./gauge-bg.png";

const gaugeWidth = 170;
const gaugeHeight = 50;
const gaugeContentWidth = gaugeWidth - 12;
const gaugeBarsNb = 10;
const gaugeBarWidth = gaugeContentWidth / gaugeBarsNb;
const gaugeBarMargin = 1;
const gaugeBarRadius = 10;

const styles = {
  container: {
    width: gaugeWidth,
    height: gaugeHeight,
  },
  barsContainer: {
    width: gaugeContentWidth,
    height: gaugeHeight,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 3,
  },
  barContainer: {
    width: gaugeBarWidth,
    height: gaugeHeight - 10,
    paddingLeft: gaugeBarMargin,
    paddingRight: gaugeBarMargin,
    zIndex: 1
  },
  bar: {
    width: gaugeBarWidth - gaugeBarMargin * 2,
    height: "100%",
    backgroundColor: "#3f5c8c",
  },
  barFirst: {
    borderTopLeftRadius: gaugeBarRadius,
    borderBottomLeftRadius: gaugeBarRadius,
  },
  barLast: {
    borderTopRightRadius: gaugeBarRadius,
    borderBottomRightRadius: gaugeBarRadius,
  },
  bg: {
    position: "absolute",
    width: gaugeWidth - 20,
    height: gaugeHeight,
    left: 0,
    top: 0,
    zIndex: 0
  }
};

const Gauge = ({ percentage }) => {
  const percent10 = Math.round(percentage / gaugeBarsNb);
  const percentageArray = [...Array(percent10).keys()];

  return (
    <>
      <ImageBackground source={GaugeBg} style={styles.container}>
        <View style={styles.barsContainer}>
          {percentageArray.map((ele, index) => (
            <View key={index} style={styles.barContainer}>
              {index === 0
                ? (
                  <View style={[styles.bar, styles.barFirst]} />
                )
                : index === gaugeBarsNb - 1 ? (
                  <View style={[styles.bar, styles.barLast]} />
                )
                : (
                  <View style={styles.bar} />
                )}
            </View>
          ))}
        </View>
      </ImageBackground>
      <Text>{percentage}% - {percent10} bars</Text>
    </>
  );
};

export default Gauge;
