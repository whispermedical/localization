import React, { Component } from 'react';
import { Text,TouchableHighlight,View } from 'react-native';

var routes = [
    {title: 'first Scene', index: 0},
    {title: 'Second Scene', index: 1}
];


class Page2 extends Component {

    render() {
        return(
            <View>
                <TouchableHighlight onPress={() => {
                        this.props.navigator.pop();
                    }}>

                    <Text>Back to Page1</Text>
                </TouchableHighlight>
            </View>
        )

    }
}

module.exports = Page2;