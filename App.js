import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import CameraComponent from './components/CameraComponent';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CameraComponent onImageCapture={this.onImageCapture} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
