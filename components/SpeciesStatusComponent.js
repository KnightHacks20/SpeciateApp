import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';

import GetLocation from 'react-native-get-location';

export default class SpeciesStatusComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      hasFetched: false,
      commonName: 'Green Turtle',
      latinName: 'Chelonia mydas',
      status: 'Endangered',
    };
  }

  handlePress(event) {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
    .then(location => {
      this.props.onLocationDataReceive(location.latitude, location.longitude);
    })
    .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
    });

    this.setState({isLoading: true});

    console.log(this.props.uri);

    const file = {
      uri: this.props.uri,
      name: 'Test.jpg',
    };
    
    const body = new FormData();
    body.append('file', file);
    
    const url = 'https://www.floydlabs.com/serve/HEymaCcSNwJrkYHyCQHy3Q/predict';

    fetch(url, {
      method: 'POST',
      body: body,
    })
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        isLoading: false,
        hasFetched: true,
        commonName: json.common_name,
        latinName: json.latin_name,
        status: json.status,
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.state.hasFetched ? (
          <Button
            title="Identify"
            onPress={(e) => this.handlePress(e)}
            loading={this.state.isLoading}
            buttonStyle={{height: 50, borderRadius: 8}}
            containerStyle={{marginBottom: 10}}
          />
        ) : (
          <View>
            <View
              style={{backgroundColor: '#DB6232', padding: 8, borderRadius: 3}}>
              <Text style={styles.status}>{this.state.status}</Text>
            </View>
            <Text style={styles.commonName}>{this.state.commonName}</Text>
            <Text style={styles.latinName}>{this.state.latinName}</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  commonName: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: '800',
    color: '#000',
    textAlign: 'center',
  },
  latinName: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: '400',
    color: '#252526',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  status: {
    fontSize: 18,
    paddingTop: 2,
    paddingBottom: 1,
    fontWeight: '600',
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#fff',
  },
});
