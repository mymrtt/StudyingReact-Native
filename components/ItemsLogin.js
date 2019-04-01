import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class ItemsLogin extends Component {
  
  showAlertFacebook = () => {
    alert('You will be directed to Facebook...')
  }
  showAlertGoogle = () => {
    alert('You will be directed to Google...')
  }
  
  render() {
    return (
      <View style={styles.containerLogin}>
        <Text style={styles.title}>Let’s create your new account</Text>
        <TouchableOpacity onPress={this.showAlertFacebook} style={styles.buttons}>
          <Image source={require('../facebook.png')} style={styles.imgs} />
          <Text style={styles.textInput}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.showAlertGoogle} style={styles.buttons}>
          <Image source={require('../google.png')} style={styles.imgs} />
          <Text style={styles.textInput}>Google</Text>
        </TouchableOpacity>
        <Text style={styles.titleFooter}>By proceeding, you agree to the M4A User Agreement, Privacy Policy, and Cookie Policy.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    width: 370,
    height: 70,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    width: 275,
    fontSize: 25,
    color: '#fff',
  },  
  imgs: {
    width: 40, 
    height: 40, 
    resizeMode: 'contain'
  },
  textInput: {
    color: '#0081C3',
  },
  buttons: {
    width: 270,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderBottomWidth: 3,
    borderColor: '#707070'
  },
  titleFooter: {
    width: 270,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
    fontSize: 12,
  }
});