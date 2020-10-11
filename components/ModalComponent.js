import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import FormComponent from './FormComponent.js';

const ModalComponent = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Button title="Open Overlay" onPress={toggleOverlay} />

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} animationType={'slide'} transparent={true}>
          <View style={{maxHeight: '80%'}}>
            <Text>Hello from Overlay!</Text>
            <FormComponent />
        </View>
      </Overlay>
    </View>
  );
};

export default ModalComponent;