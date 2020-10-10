import React from 'react';

import { View } from 'react-native';

import { Button, Input } from 'react-native-elements';

const initialState = {
    latitude: '',
    longitude: '',
    date: '',
    time: '',
    comments: '',
    loading: false
}

export default class FormComponent extends React.Component {
    state = initialState;

    handlePress(event) {
        console.log(this.state);

        /* Uncomment this once we're ready for the API */
        // this.setState({loading: true})
        this.setState(initialState);
    }

    render() {
        return (
            <>
                <View style={{flexDirection: 'row'}}>
                    <Input 
                        label='Latitude'
                        placeholder='DDD.dddd' 
                        containerStyle={{paddingRight: 10, paddingLeft: 0, flex: 1}} 
                        onChangeText={(text) => this.setState({latitude: text})}
                        value={this.state.latitude}
                    />
                    <Input 
                        label='Longitude'
                        placeholder='DDD.dddd' 
                        containerStyle={{paddingLeft: 10, paddingRight: 0, flex: 1}} 
                        onChangeText={(text) => this.setState({longitude: text})}
                        value={this.state.longitude}
                    />
                </View>
                <Input 
                    label='Date of Sighting' 
                    placeholder='MM-DD-YY'
                    containerStyle={{paddingHorizontal: 0}}
                    onChangeText={(text) => this.setState({date: text})}
                    value={this.state.date}
                />
                <Input 
                    label='Time of Sighting' 
                    placeholder='HH:MM a.m. / p.m.'
                    containerStyle={{paddingHorizontal: 0}}
                    onChangeText={(text) => this.setState({time: text})}
                    value={this.state.time}
                />
                <Input 
                    label='Comments' 
                    placeholder=''
                    containerStyle={{paddingHorizontal: 0}}
                    onChangeText={(text) => this.setState({comments: text})}
                    value={this.state.comments}
                />
                <Button 
                    title='Submit' 
                    loading={this.state.loading} 
                    onPress={(e) => this.handlePress(e)}
                />
            </>
        );
    }
}