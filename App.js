
import React, {Component} from 'react';
import {AppLoading} from "expo";
import * as Font from 'expo-font';
import {Ionicons} from "@expo/vector-icons";
import Main_Nav from './navigation/MainNavigation';

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
      ...Ionicons.font
    });
  };



  render() {
    const { loaded } = this.state;

    if (loaded) {
      return <Main_Nav />;
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
