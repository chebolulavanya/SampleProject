import { Text } from "react-native";
// import * as React from 'react';
import React, { useState, useContext, useRef, useEffect } from 'react';


const ProfileScreen = ({route, navigation}) => {
  // const [ screenTitle , setScreenTitle] = route.params.title;
  const [ screenTitle , setScreenTitle] =  useState(route.params.title);
  
    return <Text>This is my{ screenTitle} scree's profile</Text>;
  };

  export default ProfileScreen