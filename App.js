import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Platform,
  View,
} from 'react-native';


import CameraComponent from './components/CameraComponent';
import FormComponent from './components/FormComponent';

import GetLocation from 'react-native-get-location';

export default class App extends React.Component {
  onImageCapture = async (imageUri) => {
    console.log(imageUri);

    const locationData = await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000
    });
    console.log(locationData);
  }
  
  render() {
    return (
//       <KeyboardAvoidingView
//         behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
//         <ScrollView>
//           <CameraComponent />
//           <View style={styles.sectionContainer}>
//             <FormComponent />
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
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
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});