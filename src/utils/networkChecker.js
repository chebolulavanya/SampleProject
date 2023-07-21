import React, { Component ,useState} from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Snackbar from 'react-native-snackbar';

 function NetworkChecker (props) {
     const {isConnected}=props; 
     console.log(isConnected,"state")
      return (
          !isConnected ?
        Snackbar.show({
            text: 'Hello world',
            duration: Snackbar.LENGTH_SHORT,
          })
            : null
        
      );
   
}

const styles= StyleSheet.create ({
    container: {
   //  flex: 1,
     width: '100%',
     marginTop:300,
     alignItems: 'center',
     justifyContent: 'space-around',
     position: 'absolute',
     left: 0,
     right: 0,
     top: 0,
     bottom: 0,
    // backgroundColor: ''
 
    },
    activityIndicator: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       height: 80,
       width: 20
    }
 });
export default NetworkChecker;