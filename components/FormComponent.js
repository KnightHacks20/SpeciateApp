import React from 'react';
import {
  ActivityIndicator,
  Platform,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {Button, Image, Input} from 'react-native-elements';

import SpeciesStatusComponent from './SpeciesStatusComponent.js';

import Icon from 'react-native-vector-icons/Ionicons';

const initialState = {
  latitude: '',
  longitude: '',
  date: '',
  time: '',
  comments: '',
  loading: false,
  submitSuccess: false,
};

export default class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    const d = new Date();
    const date = [d.getMonth() + 1, d.getDate() + 1, d.getFullYear()].join('-');
    const time = [('00' + d.getHours()).substr(-2), d.getMinutes()].join(':');
    this.setState({
      date: date,
      time: time,
    });
  }

  handlePress(event) {
    console.log(this.state);
    this.setState({loading: true});
    // Pretend we're sending this to the API
    setTimeout(() => {
      this.setState({...initialState, submitSuccess: true});
    }, 2000);
  }

  onLocationDataReceive = (latVal, longVal) => {
    this.setState({
      latitude: '' + latVal,
      longitude: '' + longVal
    });
  }

  render() {
    return (
      <>
        <View
          style={{marginLeft: 0, marginRight: 0, marginBottom: 0}}>
          <Image
            source={{uri: this.props.photoURI}}
            style={{width: '100%', height: 300, borderRadius: 5}}
            PlaceholderContent={<ActivityIndicator />}
          />
          <TouchableOpacity 
            style={{position: 'absolute', right: 5, top: 5}} 
            onPress={this.props.onFormClose}>
            <Icon
              name={'close-outline'}
              color='white'
              size={30}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 40, marginRight: 40, marginTop: 16, marginBottom: 16, 
                      backgroundColor: '#D5D5D5', height: 1}} />
        <SpeciesStatusComponent uri={this.props.photoURI} onLocationDataReceive={this.onLocationDataReceive} />
        <View style={{flexDirection: 'row', marginTop: 40}}>
          <Input
            label="Latitude"
            placeholder="DDD.dddd"
            containerStyle={{flex: 1}}
            labelStyle={{color: '#545454'}}
            onChangeText={(text) => this.setState({latitude: text})}
            value={this.state.latitude}
          />
          <Input
            label="Longitude"
            placeholder="DDD.dddd"
            containerStyle={{flex: 1}}
            labelStyle={{color: '#545454'}}
            onChangeText={(text) => this.setState({longitude: text})}
            value={this.state.longitude}
          />
        </View>
        <View
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <Input
            label="Date of Sighting"
            placeholder="MM-DD-YY"
            labelStyle={{color: '#545454'}}
            onChangeText={(text) => this.setState({date: text})}
            value={this.state.date}
          />
          <Input
            label="Time of Sighting"
            placeholder="HH:MM a.m. / p.m."
            labelStyle={{color: '#545454'}}
            onChangeText={(text) => this.setState({time: text})}
            value={this.state.time}
          />
          <Input
            label="Comments"
            placeholder=""
            labelStyle={{color: '#545454'}}
            onChangeText={(text) => this.setState({comments: text})}
            value={this.state.comments}
          />
          {this.state.submitSuccess && (
            <Text
              style={{
                paddingHorizontal: 10,
                marginBottom: 10,
                color: 'green',
                fontSize: 18,
              }}>
              Submission successful!
            </Text>
          )}
          <Button
            title="Submit"
            loading={this.state.loading}
            onPress={(e) => this.handlePress(e)}
            buttonStyle={{height: 50, borderRadius: 8}}
            containerStyle={{marginBottom: 10, paddingHorizontal: 10}}
          />
        </View>
      </>
    );
  }
}
