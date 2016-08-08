import React, { Component } from 'react';
import {AppRegistry, Text, Navigator,TouchableHighlight } from 'react-native';

import Page1 from './Page1';
import Page2 from './Page2';

var routes = [
    {title: 'first Scene', index: 0},
    {title: 'Second Scene', index: 1}
];


class MyNavigator extends Component {

    renderScene(route, navigator){
       if(route.index === 0){
           return (
               <Page1 navigator={navigator} />
           );
       }
       else {
           return (
               <Page2 navigator={navigator} />
           );
       }
    }

    render() {

        return (
            <Navigator
                initialRoute={routes[0]}
                initialRouteStack={routes}

                renderScene = {this.renderScene.bind(this)}
                style={{padding: 100}}

               navigationBar={
                <Navigator.NavigationBar
                    routeMapper={{
                    LeftButton: (route, navigator, index, navState) =>
                      {
                        if (route.index === 0) {
                          return null;
                        } else {
                          return (
                            <TouchableHighlight onPress={() => navigator.pop()}>
                              <Text>Back</Text>
                            </TouchableHighlight>
                          );
                        }
                      },
                 RightButton: (route, navigator, index, navState) =>
                   { return (<Text>Done</Text>); },
                 Title: (route, navigator, index, navState) =>
                   { return (<Text>Awesome Nav Bar</Text>); },
               }}
                    style={{backgroundColor: 'gray'}}
                />
                }
            />
        );



    }
}

AppRegistry.registerComponent('MyNavigator', () => MyNavigator);
