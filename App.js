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

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <CameraComponent />
          <View style={styles.sectionContainer}>
            <FormComponent />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
