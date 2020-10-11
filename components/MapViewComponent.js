import React from 'react';

import ImageMapper from 'react-native-image-mapper';

const MAPPING = [{
  id: '0',
  name: 'First Area Name',
  shape: 'circle',
  x1: 80,
  y1: 110,
  prefill: 'red',
  fill: 'blue',
  radius: 10,
},
]

export default class MapViewComponent extends React.Component {
  render() {
    return (
      <>
        <ImageMapper 
          imgHeight={'100%'}
          imgWidth={'100%'}
          imgSource={require('../assets/florida-beaches-map.png')}
          imgMap={MAPPING}
        />
      </>
    );
  }
}