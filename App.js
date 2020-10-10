import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import CameraComponent from './components/CameraComponent';
import FormComponent from './components/FormComponent';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <CameraComponent />
        <View style={styles.sectionContainer}>
          <FormComponent />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  }
})