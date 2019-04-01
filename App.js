import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import ItemsLogin from './components/ItemsLogin';

export default class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.containerImg}>
          <Image source={require('./logo.png')} style={styles.logo} />
        </View>
        <ItemsLogin />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    height: 30,
    backgroundColor: '#FF7700',
  },
  containerImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 270,
    borderBottomRightRadius: 185
  },
  logo: {
    width: 100, 
    height: 300, 
    alignItems: 'center', 
    resizeMode: 'contain'
  }
});
