import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';

import {Overlay, Button} from 'react-native-elements';

import {RNCamera} from 'react-native-camera';

import {Grid, Row, Col} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/Ionicons';

import FormComponent from './FormComponent.js';
import MapViewComponent from './MapViewComponent.js';

const {FlashMode: CameraFlashMode} = RNCamera.Constants;

export default class CameraComponent extends React.Component {
  state = {paused: false, photoURI: '', flashMode: CameraFlashMode.off, isMapViewVisible: false};

  render() {
    return (
      <>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          type={RNCamera.Constants.Type.back}
          flashMode={this.state.flashMode}
          captureAudio={false}
          style={styles.preview}
          captureAudio={false}
        />
        <Grid style={styles.captureContainer}>
          <Row>
            <Col style={styles.alignCenter}>
              <TouchableOpacity onPress={this.toggleFlashMode.bind(this)}>
                <Icon
                  name={this.state.flashMode === CameraFlashMode.on ? 'flash-sharp' : 'flash-off-sharp'}
                  color='white'
                  size={30}
                />
              </TouchableOpacity>
            </Col>
            <Col size={2} style={styles.alignCenter}>
              <TouchableOpacity
                onPress={this.takePicture.bind(this)}
                style={this.state.paused ? styles.capturePaused : styles.capture}
              />
            </Col>
            <Col style={styles.alignCenter}>
              <TouchableOpacity onPress={this.showMapView.bind(this)}>
                <Icon
                  name={'map-sharp'}
                  color='white'
                  size={30}
                />
              </TouchableOpacity>
            </Col>
          </Row>
        </Grid>

        <SafeAreaView>
          <Overlay
            isVisible={this.state.isMapViewVisible}
            onBackdropPress={this.hideMapView}
            overlayStyle={{minWidth: '90%', maxHeight: '93%', borderRadius: 10}}
            animationType={'slide'}
            transparent={true}
          >
            <MapViewComponent />
          </Overlay>

          <Overlay
            isVisible={this.state.paused}
            onBackdropPress={this.newPicture}
            overlayStyle={{minWidth: '90%', maxHeight: '93%', borderRadius: 10}}
            animationType={'slide'}
            transparent={true}>
            <KeyboardAvoidingView behavior="padding">
              <ScrollView style={{marginTop: 0}}>
                <FormComponent photoURI={this.state.photoURI} onFormClose={this.newPicture} />
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

  toggleFlashMode = () => {
    this.setState({
      flashMode: this.state.flashMode === CameraFlashMode.on ? CameraFlashMode.off : CameraFlashMode.on
    });
  }

  showMapView = () => {
    this.setState({
      isMapViewVisible: true
    });
  }

  hideMapView = () => {
    this.setState({
      isMapViewVisible: false
    });
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
        this.setState({paused: true, photoURI: data.uri});
      }
    }
  };
}

const styles = StyleSheet.create({
  alignCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  captureContainer: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: 100,
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
