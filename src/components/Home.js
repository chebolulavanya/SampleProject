import { NavigationProp } from '@react-navigation/native';
import { Button } from "react-native";
import ProfileScreen from './profileScreen';
import React, { Component } from 'react';

const HomeScreenProp = ({ route, navigation }) =>{

  
  return(
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile',{title:'lavanya'})
      }
    />
  )
}

  export default HomeScreenProp