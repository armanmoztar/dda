import React from 'react';
import { Platform, StatusBar, StyleSheet, View, AppRegistry } from 'react-native';
import { AppLoading } from 'expo';
import AppContainer from './src/navigation/AppContainer';
// import Amplify from 'aws-amplify';



// Amplify.configure({
//   Auth: {
//     region: 'ca-central-1',
//     userPoolId: 'ca-central-1_bgiztNJBA',
//     userPoolWebClientId: '4uf6v103ij9q0nir40opiod39',
//   }
// });

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppContainer />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});