import React from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

import { RNCamera } from 'react-native-camera';

export default class CameraComponent extends React.Component {
  render() {
    return (
      <>
        <RNCamera 
          ref = {ref => {
            this.camera = ref;
          }}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          style={styles.preview}
        />
        <View style={styles.captureContainer}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}/>
        </View>
      </>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true, exif: true };
      const data = await this.camera.takePictureAsync(options);
      this.props.onImageCapture(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  captureContainer: {
    position: 'absolute',
    alignSelf: 'center',
    margin: 20,
    bottom: 0
  },
  capture: {
    flex: 0,
    backgroundColor: 'red',
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 3,
    alignSelf: 'center',
  }
});
