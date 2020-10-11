import React from 'react';

import ImageMapper from 'react-native-image-mapper';

const MAPPING = [{
  id: '0',
  name: 'Species 1',
  shape: 'circle',
  x1: 80,
  y1: 110,
  prefill: 'red',
  radius: 15,
},
{
  id: '1',
  name: 'Species 2',
  shape: 'circle',
  x1: 120,
  y1: 120,
  prefill: 'red',
  radius: 15,
},
{
  id: '2',
  name: 'Species 3',
  shape: 'circle',
  x1: 200,
  y1: 400,
  prefill: 'red',
  radius: 15,
},
{
  id: '3',
  name: 'Species 4',
  shape: 'circle',
  x1: 250,
  y1: 500,
  prefill: 'red',
  radius: 15,
},
{
  id: '4',
  name: 'Species 5',
  shape: 'circle',
  x1: 280,
  y1: 450,
  prefill: 'red',
  radius: 15,
},
{
  id: '5',
  name: 'Species 6',
  shape: 'circle',
  x1: 30,
  y1: 15,
  prefill: 'red',
  radius: 15,
},
{
  id: '6',
  name: 'Species 7',
  shape: 'circle',
  x1: 199,
  y1: 80,
  prefill: 'red',
  radius: 15,
},
{
  id: '7',
  name: 'Species 8',
  shape: 'circle',
  x1: 200,
  y1: 50,
  prefill: 'red',
  radius: 15,
},
{
  id: '8',
  name: 'Species 9',
  shape: 'circle',
  x1: 290,
  y1: 470,
  prefill: 'red',
  radius: 15,
},
{
  id: '9',
  name: 'Species 10',
  shape: 'circle',
  x1: 235,
  y1: 270,
  prefill: 'red',
  radius: 15,
},
{
  id: '10',
  name: 'Species 11',
  shape: 'circle',
  x1: 280,
  y1: 300,
  prefill: 'red',
  radius: 15,
},
{
  id: '11',
  name: 'Species 12',
  shape: 'circle',
  x1: 260,
  y1: 300,
  prefill: 'red',
  radius: 15,
},
{
  id: '12',
  name: 'Species 13',
  shape: 'circle',
  x1: 240,
  y1: 270,
  prefill: 'red',
  radius: 15,
},
{
  id: '13',
  name: 'Species 14',
  shape: 'circle',
  x1: 219,
  y1: 198,
  prefill: 'red',
  radius: 15,
},
{
  id: '14',
  name: 'Species 15',
  shape: 'circle',
  x1: 281,
  y1: 329,
  prefill: 'red',
  radius: 15,
},
{
  id: '15',
  name: 'Species 16',
  shape: 'circle',
  x1: 168,
  y1: 125,
  prefill: 'red',
  radius: 15,
},
{
  id: '16',
  name: 'Species 17',
  shape: 'circle',
  x1: 100,
  y1: 150,
  prefill: 'red',
  radius: 15,
},
{
  id: '17',
  name: 'Species 18',
  shape: 'circle',
  x1: 200,
  y1: 30,
  prefill: 'red',
  radius: 15,
},
{
  id: '18',
  name: 'Species 19',
  shape: 'circle',
  x1: 102,
  y1: 40,
  prefill: 'red',
  radius: 15,
},
{
  id: '19',
  name: 'Species 20',
  shape: 'circle',
  x1: 219,
  y1: 198,
  prefill: 'red',
  radius: 15,
},
{
  id: '20',
  name: 'Species 21',
  shape: 'circle',
  x1: 178,
  y1: 209,
  prefill: 'red',
  radius: 15,
},
{
  id: '21',
  name: 'Species 22',
  shape: 'circle',
  x1: 145,
  y1: 290,
  prefill: 'red',
  radius: 15,
},
{
  id: '22',
  name: 'Species 23',
  shape: 'circle',
  x1: 245,
  y1: 555,
  prefill: 'red',
  radius: 15,
},
{
  id: '23',
  name: 'Species 24',
  shape: 'circle',
  x1: 255,
  y1: 580,
  prefill: 'red',
  radius: 15,
},
{
  id: '24',
  name: 'Species 25',
  shape: 'circle',
  x1: 265,
  y1: 550,
  prefill: 'red',
  radius: 15,
},
{
  id: '25',
  name: 'Species 26',
  shape: 'circle',
  x1: 290,
  y1: 540,
  prefill: 'red',
  radius: 15,
},
]

export default class MapViewComponent extends React.Component {
  onCircleSelect = async (item, idx, event) => {
    alert(MAPPING[idx].name);
  };

  render() {
    return (
      <>
        <ImageMapper 
          imgHeight={'100%'}
          imgWidth={'100%'}
          imgSource={require('../assets/florida_map.png')}
          imgMap={MAPPING}
          onPress={(item, idx, event) => this.onCircleSelect(item, idx, event)}
        />
      </>
    );
  }
}