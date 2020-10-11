import React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import {RNCamera} from 'react-native-camera';

export default class CameraComponent extends React.Component {
  state = {paused: false};

  render() {
    return (
      <>
        <RNCamera 
          ref = {ref => {
            this.camera = ref;
          }}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.auto}
          captureAudio={false}
          style={styles.preview}
          captureAudio={false}
        />
        <View style={styles.captureContainer}>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={this.state.paused ? styles.capturePaused : styles.capture}
          />
        </View>
      </>
    );
  }

  newPicture = () => {
    this.setState({paused: false});
    this.camera.resumePreview();
  };

  takePicture = async () => {
    if (this.camera) {
      if (this.state.paused) {
        this.newPicture();
      } else {
        const options = {quality: 0.5, base64: true, pauseAfterCapture: true};
        const data = await this.camera.takePictureAsync(options);
        this.setState({paused: true});
        this.props.onImageCapture(data.uri);
      }
    }
  };
}

const styles = StyleSheet.create({
  preview: {
    height: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  captureContainer: {
    position: 'absolute',
    alignSelf: 'center',
    margin: 30,
    bottom: 0,
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
  },
  capturePaused: {
    flex: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 3,
    alignSelf: 'center',
  },
});
