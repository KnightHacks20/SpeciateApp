import React from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import CameraComponent from './components/CameraComponent';

import GetLocation from 'react-native-get-location';

export default class App extends React.Component {
  onImageCapture = async (imageUri) => {
    console.log(imageUri);

    const locationData = await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 5000
    });
    console.log(locationData);
  }
  
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
    backgroundColor: 'black'
  }
});