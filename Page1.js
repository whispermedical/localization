import React, { Component } from 'react';
import { Text,View,TouchableHighlight } from 'react-native';


var routes = [
    {title: 'first Scene', index: 0},
    {title: 'Second Scene', index: 1}
];

class Page1 extends Component {


    render() {
        return(
            <View>

                <TouchableHighlight onPress={() => {
                        this.props.navigator.push(routes[1]);

                    }}>

                    <Text>Go to Page2</Text>
                </TouchableHighlight>
            </View>
        )

    }
}

module.exports = Page1;