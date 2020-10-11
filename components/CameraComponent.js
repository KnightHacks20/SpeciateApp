import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import {Overlay, Button} from 'react-native-elements';

import {RNCamera} from 'react-native-camera';

import FormComponent from './FormComponent.js';

export default class CameraComponent extends React.Component {
  state = {paused: false, photoURI: ''};

  render() {
    return (
      <>
        <RNCamera
          ref={(ref) => {
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
        <SafeAreaView>
          <Overlay
            isVisible={this.state.paused}
            onBackdropPress={this.newPicture}
            overlayStyle={{minWidth: '90%', maxHeight: '90%', borderRadius: 10}}
            animationType={'slide'}
            transparent={true}>
            <KeyboardAvoidingView behavior="padding">
              <ScrollView style={{marginTop: 10}}>
                <FormComponent photoURI={this.state.photoURI} />
                <Button
                  type="clear"
                  title="Close"
                  buttonStyle={{height: 50}}
                  containerStyle={{marginBottom: 10, paddingHorizontal: 10}}
                  onPress={this.newPicture}
                />
              </ScrollView>
            </KeyboardAvoidingView>
          </Overlay>
        </SafeAreaView>
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
        console.log(data.uri);
        this.setState({paused: true, photoURI: data.uri});

        this.props.onImageCapture(data.uri);
      }
    }
  };
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
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
