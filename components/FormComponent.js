import React from 'react';
import {
  ActivityIndicator,
  Platform,
  Text,
  View,
  ScrollView,
} from 'react-native';

import {Button, Image, Input} from 'react-native-elements';

const initialState = {
  latitude: '',
  longitude: '',
  date: '',
  time: '',
  comments: '',
  loading: false,
};

export default class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handlePress(event) {
    console.log(this.state);

    this.setState(initialState);
    this.setState({loading: true});
  }

  render() {
    return (
      <>
        <ScrollView style={{marginTop: 10}}>
          <View style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: 30}}>
            <Image
              source={{ uri: this.props.photoURI }}
              style={{ width: 175, height: 175, borderRadius: 5}}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
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
            <Button
              title="Submit"
              loading={this.state.loading}
              onPress={(e) => this.handlePress(e)}
              buttonStyle={{borderRadius: 50, height: 50}}
              containerStyle={{marginBottom: 20}}
            />
          </View>
        </ScrollView>
      </>
    );
  }
}
