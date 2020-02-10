
import React, {Component} from 'react';
import {AppLoading} from "expo";
import * as Font from 'expo-font';
import {IonIcons} from "@expo/vector-icons";
import {Text, View} from "react-native";

class App extends Component {


  constructor() {
    super();
    this.state = {
      loaded: false
    };
  }

  handleError = error => console.log(error);

  handleLoaded = () => this.setState({loaded: true});

  loadAssets = async() => {
    await Font.loadAsync({
      ...IonIcons.font
    });
  };



  render() {
    const { loaded } = this.state;

    if (loaded) {
      return (
        <View>
          <Text>Open up App.js~~~~</Text>
        </View>
      );
    } else {
      return (
        <AppLoading 
          startAsync={this.loadAssets}
          onFinish={this.handleLoaded}
          onError={this.handleLoaded}
        />
      );
    }
    
  }
}


export default App;
