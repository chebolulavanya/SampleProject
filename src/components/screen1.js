import { useNavigation } from '@react-navigation/native';
import { Button } from "react-native";
import ProfileScreen from './profileScreen';
import React, { Component } from 'react';


// const navigation = useNavigation();
// const { navigation  } = this.prop;
export default class HomeScreen extends Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button
      title="Go to Jane's profile"
      onPress={() =>
        useNavigation.navigate('Profile', {name: 'Jane'})
      }
    />
    );
  }
    
  }
