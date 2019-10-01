import React from 'react';
import { Slider, StyleSheet, View } from 'react-native';

import Gauge from './components/Gauge/Gauge';

export default function App() {

  const [value, setValue] = React.useState(60);

  return (
    <View style={styles.container}>
      <Gauge percentage={value} />

      <Slider
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#1EB1FC"
        maximumTractTintColor="#1EB1FC"
        step={1}
        value={value}
        onValueChange={setValue}
        style={styles.slider}
        thumbTintColor="#1EB1FC"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    marginTop: 50,
    width: '80%',
  }
});
