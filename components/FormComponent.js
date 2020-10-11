import React from 'react';
import {
  ActivityIndicator,
  Platform,
  Text,
  View,
  ScrollView,
} from 'react-native';

import {Button, Image, Input} from 'react-native-elements';

import SpeciesStatusComponent from './SpeciesStatusComponent.js';

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

  render() {
    return (
      <>
        <View
          style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: 30}}>
          <Image
            source={{uri: this.props.photoURI}}
            style={{width: 300, height: 300, borderRadius: 5}}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
        <SpeciesStatusComponent uri={this.props.photoURI} />
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
              Submission succesful!
            </Text>
          )}
          <Button
            title="Submit"
            loading={this.state.loading}
            onPress={(e) => this.handlePress(e)}
            buttonStyle={{height: 50}}
            containerStyle={{marginBottom: 10, paddingHorizontal: 10}}
          />
        </View>
      </>
    );
  }
}
